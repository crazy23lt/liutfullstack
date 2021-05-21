import request from "@/utils/request";
export function resourcesOption({ url }) {
  return request({
    url: `/${url}/options`,
    method: "get",
    auth: true
  });
}
export function resourcesAll({ url }) {
  return request({
    url: `/${url}`,
    method: "get",
    auth: true
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
