exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {
    if (typeof window.downloader === 'undefined') {
      return cb(false)
    }

    // pass through the downloader object
    Vue.cordova.downloader = window.downloader

    return cb(true)

  }, false)
}