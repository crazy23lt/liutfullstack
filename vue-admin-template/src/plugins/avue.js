import Vue from "vue";
import Avue from "@smallwei/avue";
import "@smallwei/avue/lib/index.css";
import request from "@/utils/request";
window.axios = request;
Vue.use(Avue, { request });
