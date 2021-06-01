import Vue from "vue";
import Avue from "@smallwei/avue";
import request from "@/utils/request";
import "@smallwei/avue/lib/index.css";
Vue.use(Avue);
Vue.prototype.$httpajax = request;
