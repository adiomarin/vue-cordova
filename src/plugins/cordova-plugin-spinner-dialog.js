exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {
    console.log('Window', window)
    console.log('Window.plugins', window.plugins)
    console.log('navigator', navigator)

    if (typeof window.SpinnerDialog === 'undefined') {
      return cb(false)
    }

    // pass through the SpinnerDialog object
    Vue.cordova.SpinnerDialog = window.SpinnerDialog

    return cb(true)

  }, false)
}