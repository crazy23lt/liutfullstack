# liutfullstack

NodeJS+VueJS 全栈之巅教程 - 个人学习

## 后端

### 项目目录结构

_创建两个服务，后台系统与客户端系统_

- `server` 服务端
  - `apps - admin` 客户端服务
  - `apps - server` 后台系统服务
  - `libs - common` 子应用公共模块
  - `libs - db` 数据库模块

### server

_子应用公共模块例如连接数据库等数据库操作_

- `nest g app admin` 创建子应用
- `nest g lib db` 创建子应用公共模块

_创建子应用，通过 npm 运行子应用项目，对 package.json 的 scripts 进行修改_

- `start_admin:dev": "nest start --watch admin`

### module

- `nest g module name` 主应用创建模型
- `nest g module -p [child app name] [module name]` 子应用中创建模型

### controller

- `nest g controller name` 主应用创建控制器
- `nest g controller -p [child app name] [module name]` 子应用中创建控制器

### 其他命令

_通过 nest 命令来运行子应用的服务_

- `nest start --watch admin` 运行监听 admin 子应用

### NestJS 连接 MongoDB 数据库

`npm i --save nestjs-typegoose @typegoose/typegoose`

`npm i --save mongoose @types/mongoose`

_在`db.module.ts`模块中进行连接数据操作_

_主要用到`TypegooseModule.forRoot()`、`TypegooseModule.forFeature()`_

_admin 子应用的跟模块同时需要导入 db 模块_

### NestJS 生成接口文档

`npm i --save-dev @nestjs/swagger swagger-ui-express`

### npm 如何管理分支(给分支加上描述)

_分支加上描述_

- `git config branch.[branch.name].description [描述]`

_查看分支描述_

- `git config branch.[branch.name].description`

_`git-br`工具_

- `npm i -g git-br`

- `git br`

### Mongoose-crud

_条件查询(query)_

- `{"limit":2,"page",2}`
- `{"sort":{"_id":-1}}`
- `{"where":{"name":{"$regex":"awdawd}}}`
- `{"limit":2,"page",2}`

### nestjs/config 全局配置管理

`cnpm i --save @nestjs/config`

创建 `.env` 文件进行环境变量管理

创建 `.env.example` 环境变量范例文件,供其他开发人员编写各自的环境变量

### mongose 

#### 查询

`this.userModel.find({username:'user1'});`


## 前端

- *技术栈*
  - [NuxtJS](https://zh.nuxtjs.org/)
  - [Vuetify](https://vuetify.cn/zh-Hans/)

```js
  async asyncData({ $axios }) {
    const data = await $axios.$get("/");
    return { private_asyncData: data };
  },
  async fetch() {
    this.private_fetch = await this.test();
  },
  async mounted() {
    this.private_mounted = await this.test();
  },
  methods: {
    test() {
      return this.$axios.$get("/");
    },
  },
```
