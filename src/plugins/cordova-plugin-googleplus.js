exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {
    if (typeof window.plugins === 'undefined' || typeof window.plugins.googleplus === 'undefined') {
      return cb(false)
    }

    // pass through the googleplus object
    Vue.cordova.googleplus = window.plugins.googleplus

    return cb(true)

  }, false)
}