exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof window.facebookConnectPlugin === 'undefined') {
      return cb(false)
    }

    // pass through the facebookConnectPlugin object
    Vue.cordova.facebookConnectPlugin = window.facebookConnectPlugin

    return cb(true)

  }, false)
}
