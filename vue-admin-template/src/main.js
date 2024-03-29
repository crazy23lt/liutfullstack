import Vue from "vue";
import "normalize.css/normalize.css"; // A modern alternative to CSS resets
import "@/styles/index.scss"; // global css
import App from "./App";
import store from "./store";
import router from "./router";
// import "@/plugins/ele-form";
import "@/plugins/element-ui";
import "@/plugins/avue";
import "@/icons"; // icon
import "@/permission"; // permission control
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }
Vue.config.errorHandler = function(err) {
  console.info("errorHandler", new Date(), { err });
};
window.onerror = function(msg, url, lineNo, columnNo, error) {
  console.info("onerror", new Date(), { msg, url, lineNo, columnNo, error });
};
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
