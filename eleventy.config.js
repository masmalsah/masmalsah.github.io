import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function listFolderImages(folder) {
  if (!folder || typeof folder !== "string" || !folder.trim()) return [];
  const clean = folder.replace(/^\//, "").replace(/\/$/, "");
  const abs = path.join(__dirname, clean);
  if (!fs.existsSync(abs) || !fs.statSync(abs).isDirectory()) return [];
  return fs
    .readdirSync(abs)
    .filter((f) => /\.(png|jpe?g|gif|webp|svg)$/i.test(f))
    .sort()
    .map((f) => `/${clean}/${f}`.replace(/\/+/g, "/"));
}

function deriveTitle(item) {
  if (item.data.title) return item.data.title;
  const slug = path.basename(item.inputPath, path.extname(item.inputPath));
  const cleaned = slug.replace(/^_/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
  return cleaned
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function enrichFolderImages(items) {
  return items.map((item) => {
    const data = item.data;
    data.folderImages = listFolderImages(data.imagefolder);
    data.title = deriveTitle(item);
    data.projectDate = data["project-date"] || "";
    data.projectStart = data["project-start"] || data.projectStart || "";
    return item;
  });
}

export default function (eleventyConfig) {
  eleventyConfig.addGlobalData("buildYear", new Date().getFullYear());

  // Relative path required: absolute paths break implied output mapping (assets → _site/assets).
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addTransform("fixAssetPaths", function (content, outputPath) {
    if (!outputPath || !outputPath.endsWith(".html")) return content;
    return content
      .replace(/src="assets\//g, 'src="/assets/')
      .replace(/src='assets\//g, "src='/assets/");
  });

  eleventyConfig.addWatchTarget("src/styles/input.css");
  eleventyConfig.addWatchTarget("tailwind.config.js");

  eleventyConfig.on("eleventy.after", () => {
    execSync(
      `npx postcss "${path.join(__dirname, "src/styles/input.css")}" -o "${path.join(__dirname, "_site/assets/css/styles.css")}"`,
      { stdio: "inherit" },
    );
    const siteDir = path.join(__dirname, "_site");
    for (const name of ["favicon.ico", "favicon.svg"]) {
      fs.copyFileSync(
        path.join(__dirname, "assets/img", name),
        path.join(siteDir, name),
      );
    }
    // Skip GitHub’s Jekyll post-process on the artifact
    fs.writeFileSync(path.join(siteDir, ".nojekyll"), "");
  });

  eleventyConfig.addCollection("caseStudies", (collectionApi) => {
    const items = enrichFolderImages(
      collectionApi.getFilteredByGlob("src/case-studies/*.md"),
    );
    return items.sort((a, b) => {
      const oa = a.data.order ?? 999;
      const ob = b.data.order ?? 999;
      if (oa !== ob) return oa - ob;
      return new Date(b.data.date) - new Date(a.data.date);
    });
  });

  eleventyConfig.addCollection("previousWorks", (collectionApi) => {
    const items = enrichFolderImages(
      collectionApi.getFilteredByGlob("src/previous-works/*.md"),
    );
    return items.sort((a, b) => {
      const oa = a.data.order ?? 999;
      const ob = b.data.order ?? 999;
      if (oa !== ob) return oa - ob;
      return new Date(b.data.date) - new Date(a.data.date);
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
}
