import events from './events'
import MultiTab from './MultiTab'
import './index.less'

const api = {
  /**
   * open new tab on route fullPath
   * @param config
   */
  open: function (config) {
    events.$emit('open', config)
  },
  /**
   * close route fullPath tab
   * @param config
   */
  close: function (config) {
    events.$emit('close', config)
  }
}

MultiTab.install = function (Vue) {
  if (Vue.prototype.$multiTab) {
    return
  }
  api.instance = events
  Vue.prototype.$multiTab = api
  Vue.component('multi-tab', MultiTab)
}

export default MultiTab
