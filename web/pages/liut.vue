<template></template>
<script>
export default {
  // ↓ 校验动态路由参数的有效性 ↓
  validate({ params, query }) {
    return true;
  },
  // ↓ 服务点请求主要数据 服务端阶段无法获取 this 使用 context:{app} ↓
  async asyncData({ app, store, params, query }) {},
  // ↓ fetch 方法用于在渲染页面前填充应用的状态树（store）数据 ↓
  fetch({ store, params }) {
    return new Promise();
  },
  // ↓ 设置请求头 ↓
  head() {},
  // ↓ 页面渲染生命周函数 ↓
  async mounted() {},
  // ↓ 监听参数字符串 (asyncData, fetch, validate, layout, ...) ↓
  methods: {},
  // ↓ 页面使用的layout模板 ↓
  layout: "",
};
</script>
<style lang="scss" scoped></style>
