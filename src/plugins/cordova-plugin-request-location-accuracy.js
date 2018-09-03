exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {
    if (typeof window.cordova === 'undefined' || typeof window.cordova.plugins === 'undefined' || window.cordova.plugins.locationAccuracy === 'undefined') {
      return cb(false)
    }

    // pass through the locationAccuracy object
    Vue.cordova.locationAccuracy = window.cordova.plugins.locationAccuracy

    return cb(true)

  }, false)
}
