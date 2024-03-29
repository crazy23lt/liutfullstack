import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },
  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "后台首页", icon: "dashboard" }
      }
    ]
  },
  {
    path: "/content",
    component: Layout,
    redirect: "/content/course/crud",
    name: "Content",
    meta: { title: "资源管理", icon: "el-icon-folder" },
    children: [
      {
        path: "course/crud",
        name: "course-crud",
        meta: {
          title: "课程管理",
          icon: "el-icon-tickets",
          resources: "courses"
        },
        component: () => import("@/views/resourcesCrud")
      },
      {
        path: "episode/crud",
        name: "episode-crud",
        meta: {
          title: "课时管理",
          icon: "el-icon-tickets",
          resources: "episodes"
        },
        component: () => import("@/views/resourcesCrud")
      }
    ]
  },
  {
    path: "/operate",
    component: Layout,
    redirect: "/operate/user/crud",
    name: "Operate",
    meta: { title: "运营管理", icon: "el-icon-folder" },
    children: [
      {
        path: "user/crud",
        name: "User",
        component: () => import("@/views/resourcesCrud"),
        meta: { title: "用户管理", icon: "el-icon-tickets", resources: "users" }
      }
    ]
  },
  {
    path: "/form",
    component: Layout,
    redirect: "/form/one",
    name: "Operate",
    meta: { title: "表单缓存", icon: "el-icon-folder" },
    children: [
      {
        path: "/one",
        name: "one",
        component: () => import("@/views/form/form01.vue"),
        meta: {
          title: "表单01",
          icon: "el-icon-tickets",
          resources: "users",
          keepAlive: true
        }
      },
      {
        path: "/two",
        name: "two",
        component: () => import("@/views/form/form02.vue"),
        meta: {
          keepAlive: true,
          title: "表单01",
          icon: "el-icon-tickets",
          resources: "users"
        }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () =>
  new Router({
    mode: "history", // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
