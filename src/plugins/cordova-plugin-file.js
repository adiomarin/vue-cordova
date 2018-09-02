exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {
    if (typeof window.cordova === 'undefined' || typeof window.cordova.file === 'undefined') {
      return cb(false)
    }

    // pass through the file object
    Vue.cordova.file = window.cordova.file

    return cb(true)

  }, false)
}