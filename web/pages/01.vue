<template></template>
<script>
export default {
  // ↓ 服务点请求主要数据 服务端阶段无法获取 this 使用 context:{app} ↓
  async asyncData({ app, store, params, query }) {},
  // ↓ 客户端请求次要数据 ↓
  fetch({ store, params }) {
    return new Promise();
  },
  async mounted() {},
  // ↓ 页面使用的layout模板 ↓
  layout: "",
  // ↓ 设置请求头 ↓
  head() {},
};
</script>
<style lang="scss" scoped></style>
