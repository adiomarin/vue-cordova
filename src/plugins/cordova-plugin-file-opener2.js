exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {
    if (typeof window.cordova === 'undefined' || typeof window.cordova.plugins === 'undefined' || window.cordova.plugins.fileOpener2 === 'undefined') {
      return cb(false)
    }

    // pass through the file object
    Vue.cordova.fileOpener2 = window.cordova.plugins.fileOpener2

    return cb(true)

  }, false)
}