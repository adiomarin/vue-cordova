exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof cordova.SpinnerDialog === 'undefined') {
      return cb(false)
    }

    // pass through the SpinnerDialog object
    Vue.cordova.SpinnerDialog = cordova.SpinnerDialog

    return cb(true)

  }, false)
}