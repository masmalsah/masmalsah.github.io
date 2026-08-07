import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";

const port = process.env.PORT || "8080";
const url = `http://localhost:${port}/`;

const eleventy = spawn(
  process.platform === "win32" ? "npx.cmd" : "npx",
  ["eleventy", "--serve", "--watch", `--port=${port}`],
  { stdio: "inherit", shell: true },
);

let opened = false;

async function openBrowser() {
  if (opened) return;
  opened = true;
  // Wait for the first serve to come up before opening.
  await sleep(1200);

  const command =
    process.platform === "darwin"
      ? ["open", url]
      : process.platform === "win32"
        ? ["cmd", "/c", "start", "", url]
        : ["xdg-open", url];

  spawn(command[0], command.slice(1), {
    stdio: "ignore",
    detached: true,
  }).unref();
}

openBrowser();

function shutdown(signal) {
  if (!eleventy.killed) {
    eleventy.kill(signal);
  }
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));

eleventy.on("exit", (code, signal) => {
  if (signal) process.exit(0);
  process.exit(code ?? 0);
});
