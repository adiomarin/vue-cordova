exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {
    if (typeof window.cordova === 'undefined' || typeof window.cordova.plugins === 'undefined' || window.cordova.plugins.notification.local === 'undefined') {
      return cb(false)
    }

    // pass through the diagnostic object
    Vue.cordova.localNotification = window.cordova.plugins.notification.local

    return cb(true)

  }, false)
}