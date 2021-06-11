import request from "@/utils/request";
import axios from "axios";
export function resourcesOption({ url }) {
  return request({
    url: `/${url}/options`,
    method: "get",
    auth: true
  });
}
export function resourcesAll({ url, params = {} }) {
  return request({
    url: `/${url}`,
    method: "get",
    auth: true,
    params
  });
}
export function resourcesDetails({ url, id }) {
  return request({
    url: `/${url}/${id}`,
    method: "get",
    auth: true
  });
}
export function resourcesEdit({ url, id, data }) {
  return request({
    url: `/${url}/${id}`,
    method: "put",
    auth: true,
    data: data
  });
}
export function resourcesDel({ url, id }) {
  console.info({ url, id });
  return request({
    url: `/${url}/${id}`,
    method: "delete",
    auth: true
  });
}
export function resourcesCreate({ url, data }) {
  return request({
    url: `/${url}`,
    method: "POST",
    auth: true,
    data
  });
}
export function resourcesUpload({ params }) {
  return axios({
    url: `${process.env.VUE_APP_BASE_API}/upload`,
    method: "POST",
    headers: { "Content-Type": "multipart/form-data;charset=UTF-8" },
    auth: true,
    data: params
  });
}
export function error() {
  return axios({
    url: `awdawdawdawdawd`,
    method: "POST"
  });
}
