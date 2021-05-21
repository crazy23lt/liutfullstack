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
        meta: { title: "Dashboard", icon: "dashboard" }
      }
    ]
  },
  {
    path: "/content",
    component: Layout,
    redirect: "/content/course-list",
    name: "Content",
    meta: { title: "Content", icon: "el-icon-folder" },
    children: [
      {
        path: "course-list",
        name: "CourseList",
        component: () => import("@/views/course/courseList"),
        meta: { title: "CourseList", icon: "el-icon-tickets" }
      },
      {
        path: "episode",
        name: "Episode",
        component: () => import("@/views/episode/episode"),
        meta: { title: "Episode", icon: "el-icon-tickets" }
      },
      {
        path: "course/list",
        name: "course-crud",
        meta: { title: "CourseCrud", icon: "el-icon-tickets" },
        component: () => import("@/views/course/courseCrud")
      }
    ]
  },
  {
    path: "/operate",
    component: Layout,
    redirect: "/operate/user",
    name: "Operate",
    meta: { title: "Operate", icon: "el-icon-folder" },
    children: [
      {
        path: "user",
        name: "User",
        component: () => import("@/views/user/userList"),
        meta: { title: "User", icon: "el-icon-tickets" }
      }
    ]
  },
  {
    path: "/edit",
    component: Layout,
    name: "Edit",
    hidden: true,
    children: [
      {
        path: "course/:id",
        name: "CourseEdit",
        component: () => import("@/views/course/courseEdit")
      }
    ]
  },
  {
    path: "/create",
    component: Layout,
    name: "Create",
    hidden: true,
    children: [
      {
        path: "course",
        name: "CourseCreate",
        component: () => import("@/views/course/courseCreate")
      }
    ]
  },
  {
    path: "/details",
    component: Layout,
    name: "Details",
    hidden: true,
    children: [
      {
        path: "course",
        name: "CourseDetails",
        component: () => import("@/views/course/courseDetails")
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
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
