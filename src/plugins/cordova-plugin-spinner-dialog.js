exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {
    // console.log('Window', window)
    // console.log('Window.plugins', window.plugins)
    // console.log('navigator', navigator)

    if (typeof window.plugins.spinnerDialog === 'undefined') {
      return cb(false)
    }

    // pass through the SpinnerDialog object
    Vue.cordova.spinnerDialog = window.plugins.spinnerDialog

    return cb(true)

  }, false)
}