exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {
    if (typeof window.cordova === 'undefined' || typeof window.cordova.plugins === 'undefined' || window.cordova.plugins.notification === 'undefined') {
      return cb(false)
    }

    // pass through the diagnostic object
    Vue.cordova.notification = window.cordova.plugins.notification

    return cb(true)

  }, false)
}