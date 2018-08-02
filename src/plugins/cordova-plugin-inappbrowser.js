exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof cordova.InAppBrowser === 'undefined') {
      return cb(false)
    }

    // pass through the InAppBrowser object
    Vue.cordova.InAppBrowser = cordova.InAppBrowser

    return cb(true)

  }, false)
}