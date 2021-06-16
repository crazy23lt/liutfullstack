# COMPONENTS

**This directory is not required, you can delete it if you don't want to use it.**

The components directory contains your Vue.js Components.

_Nuxt.js doesn't supercharge these components._

_components 目录包含您的 Vue.js 组件。组件构成了页面的不同部分，可以重复使用并导入到页面、布局甚至其他组件中。_

## Fetching Data

_要从组件中的 API 访问异步数据，您可以使用 Nuxt fetch() 钩子。_

- `$fetchState.pending`
  - 在数据等待加载时显示一条消息
- `$fetchState.error`
  - 获取数据时出现错误时显示错误消息

```js
<template>
  <div>
    <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching mountains</p>
    <ul v-else>
      <li v-for="(mountain, index) in mountains" :key="index">
        {{ mountain.title }}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        mountains: []
      }
    },
    async fetch() {
      this.mountains = await fetch(
        'https://api.nuxtjs.dev/mountains'
      ).then(res => res.json())
    }
  }
</script>
```