import request from "@/utils/request";
export function courseList() {
  return request({
    url: "/courses",
    method: "get",
    auth: true
  });
}
export function courseCreate(data) {
  return request({
    url: "/courses",
    method: "POST",
    auth: true,
    data
  });
}
export function courseDetails(id) {
  return request({
    url: `/courses/${id}`,
    method: "get",
    auth: true
  });
}

export function courseEdit(id, data) {
  return request({
    url: `/courses/${id}`,
    method: "put",
    auth: true,
    data: data
  });
}
export function courseDel(id) {
  return request({
    url: `/courses/${id}`,
    method: "delete",
    auth: true
  });
}
