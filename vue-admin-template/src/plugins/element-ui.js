import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import locale from "element-ui/lib/locale/lang/en"; // lang i18n
import { Notification } from "element-ui";
// set ElementUI lang to EN
// Vue.use(ElementUI, { locale });
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI);
Vue.prototype.$notify = Notification;
