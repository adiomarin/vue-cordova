exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {
    if (typeof window.cordova === 'undefined' || typeof window.cordova.plugins === 'undefined' || window.cordova.plugins.diagnostic === 'undefined') {
      return cb(false)
    }

    // pass through the diagnostic object
    Vue.cordova.diagnostic = window.cordova.plugins.diagnostic

    return cb(true)

  }, false)
}