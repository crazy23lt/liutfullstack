# liutfullstack

NodeJS+VueJS 全栈之巅教程 - 个人学习

## 项目目录结构

- `server` 服务端
  - `apps - admin` 客户端服务
  - `apps - server` 后台系统服务

## server

- `/server:nest g app admin` 创建子应用
- `/server:nest g lib db` 创建子应用公共模块

## module

- `nest g module name` 主应用创建模型
- `nest g module -p [child app name] [module name]` 子应用中创建模型

## controller

- `nest g controller name` 主应用创建控制器
- `nest g controller -p [child app name] [module name]` 子应用中创建控制器

## 其他命令

- `nest start --watch admin` 运行监听 admin 子应用

## NestJS 连接 MongoDB 数据库

`npm i --save nestjs-typegoose @typegoose/typegoose`

`npm i --save mongoose @types/mongoose`

## NestJS 生成接口文档

`npm i --save-dev @nestjs/swagger swagger-ui-express`
