module.exports = {
  verbose: true,
  replacePrefix: '',
  navigateFallback: '',
  runtimeCaching: [{
    urlPattern: /.*/,
    handler: 'cacheFirst',
    options: {
        cache: {
          maxEntries: 500,
          name: 'Tv-cache'
        }
    }
  }],
  staticFileGlobs: [
    'index.html',
    'manifest.json',
    'Tv/Tv.nocache.js'
  ]
};
