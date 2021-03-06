Gem::Specification.new do |spec|
  spec.name                    = 'masmalsah-jekyll'
  spec.version                 = '1.0.0'
  spec.authors                 = ['Sam Haslam']

  spec.summary                 = 'Samuel Haslam Portfolio.'
  spec.homepage                = 'https://samhaslam.design'
  spec.licenses                = ['MIT']

  spec.metadata['plugin_type'] = 'theme'

  spec.files                   = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(assets|_(includes|layouts|posts)/|(LICENSE|README)((\.(txt|md|markdown)|$)))}i)
  end

  spec.add_runtime_dependency 'jekyll', '~> 3.8'
  spec.add_runtime_dependency 'jekyll-data', '~> 1.0'
  spec.add_runtime_dependency 'jekyll-feed', '~> 0.9.2'
  spec.add_runtime_dependency 'jekyll-gist', '~> 1.4'
  spec.add_runtime_dependency 'jekyll-paginate', '~> 1.1'
  spec.add_runtime_dependency 'jekyll-sitemap', '~> 1.1'
  spec.add_runtime_dependency 'jemoji', '~> 0.8'

  spec.add_development_dependency 'bundler', '~> 1.12'
  spec.add_development_dependency 'rake', '>= 12.3.3'
  spec.add_development_dependency 'wdm', '~> 0.1.0' if Gem.win_platform?
end
