import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/vue-admin-template/user/login",
    method: "post",
    data
  });
}

export function getInfo(token) {
  return request({
    url: "/vue-admin-template/user/info",
    method: "get",
    params: { token }
  });
}

export function logout() {
  return request({
    url: "/vue-admin-template/user/logout",
    method: "post"
  });
}

export function findUsers() {
  return request({
    url: "/users",
    methods: "get",
    auth: true
  });
}
export function findUser(id) {
  return request({
    url: `/users/${id}`,
    methods: "get",
    auth: true
  });
}
export function createUser(data) {
  return request({
    url: "/users",
    methods: "post",
    auth: true,
    data: data
  });
}
