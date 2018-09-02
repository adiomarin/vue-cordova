exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {
    if (typeof window.progressNotification === 'undefined') {
      return cb(false)
    }

    // pass through the progressNotification object
    Vue.cordova.progressNotification = window.progressNotification

    return cb(true)

  }, false)
}