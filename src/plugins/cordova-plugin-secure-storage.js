exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {
    if (typeof window.cordova === 'undefined' || typeof window.cordova.plugins === 'undefined' || window.cordova.plugins.SecureStorage === 'undefined') {
      return cb(false)
    }

    // pass through the SecureStorage object
    Vue.cordova.SecureStorage = window.cordova.plugins.SecureStorage

    return cb(true)

  }, false)
}