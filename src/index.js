// list here all supported plugins
const pluginsList = [
  'cordova-plugin-camera',
  'cordova-plugin-device',
  'cordova-plugin-geolocation',
  'cordova-plugin-contacts',
  'cordova-plugin-chrome-apps-sockets-tcp',
  'cordova-plugin-sms',
  'cordova-plugin-inappbrowser',
  'cordova-plugin-spinner-dialog',
  'cordova-plugin-file-downloader',
  'cordova-plugin-file',
  'cordova-plugin-progress-notification',
  'cordova-plugin-file-opener2',
  'cordova.plugins.diagnostic',
  'cordova-plugin-request-location-accuracy',
  'cordova-plugin-local-notification',
  'cordova-plugin-googleplus',
  'cordova-plugin-facebook4',
  'cordova-plugin-secure-storage',
  'cordova-plugin-calendar'
]

exports.install = (Vue, options) => {

  // declare global Vue.cordova object
  Vue.cordova = Vue.cordova || {
    deviceready: false,
    plugins: []
  }

  // Cordova events wrapper
  Vue.cordova.on = (eventName, cb) => {
    document.addEventListener(eventName, cb, false)
  }

  // let Vue know that deviceready has been triggered
  document.addEventListener('deviceready', () => {
    Vue.cordova.deviceready = true
  }, false)

  // load supported plugins
  pluginsList.forEach(pluginName => {
    let plugin = require('./plugins/' + pluginName)
    plugin.install(Vue, options, pluginLoaded => {
      if (pluginLoaded) {
        Vue.cordova.plugins.push(pluginName)
      }
      if (Vue.config.debug) {
        console.log('[VueCordova]', pluginName, '→', pluginLoaded ? 'loaded' : 'not loaded')
      }
    })
  })

}
