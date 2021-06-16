# ASSETS

**此目录不是必需的，如果不想使用，可以删除。**

此目录包含未编译的资源，如 LESS、SASS 或 JavaScript。

中使用此目录的更多信息 [the documentation](https://nuxtjs.org/guide/assets#webpacked).

资产目录包含未编译的资产，例如 Stylus 或 Sass 文件、图像或字体。

## Images

在你的 vue 模板中，如果你需要链接到你的资产目录，使用 ~/assets/your_image.png 在资产前加一个斜杠。

```html
<template>
  <img src="~/assets/your_image.png" />
</template>
```

在您的 css 文件中，如果您需要引用您的资产目录，请使用 ~assets/your_image.png（不带斜杠）

```css
 {
  background: url("~assets/your_image.png");
}
```

使用动态图像时，您需要使用 require

```html
<img :src="require('~/assets/img/${image}.jpg')" />
```

## Styles

Nuxt.js 允许您定义要全局设置的 CSS 文件/模块/库（包含在每个页面中）。在 nuxt.config 中，您可以使用 CSS 属性轻松添加样式。

```js
## nuxt.config.js
export default {
  css: [
    // CSS file in the project
    "~/assets/css/main.css",
    // SCSS file in the project
    "~/assets/css/main.scss",
  ],
};
```

### Sass

如果你想使用 sass，请确保你已经安装了 sass 和 sass-loader 包。

` npm install --save-dev sass sass-loader@10 fibers `


## Fonts

您可以通过将本地字体添加到您的 assets 文件夹来使用它们。添加它们后，您可以使用 @font-face 通过 css 访问它们。

```
-| assets
----| fonts
-------| DMSans-Regular.ttf
-------| DMSans-Bold.ttf
```
```css
# assets/main.css
@font-face{
    font-family:"DM Sans";
    font-style:normal;
    font-weight:400;
    font-display:swap;
    src:url("~assets/fonts/DMSans-Regular.ttf");
}
@font-face{
    font-family:"DM Sans";
    font-style:normal;
    font-weight:700;
    font-display:swap;
    src:url("~assets/fonts/DMSans-Bold.ttf");
}
```

> CSS 文件不会自动加载。使用 CSS 配置属性添加它们。

> 要添加外部字体，例如 google 字体，请查看元标签和 SEO 章节

## Webpack

vue-loader 使用 css-loader 和开箱即用的 Vue 模板编译器自动处理您的样式和模板文件。在这个编译过程中，`<img src="...">`、background: url(...) 和 CSS @import 等所有资源 URL 都被解析为模块依赖。


