<p align="center">
  <a href="https://github.com/walrus-plus/walrus">
    <img width="100" src="https://avatars0.githubusercontent.com/u/55735928?s=200&v=4">
  </a>
</p>

<h1 align="center">walrus</h1>

<div align="center">
Frontend development tools 
</div>

[![Alita](https://img.shields.io/badge/alitajs-walrus-blue.svg)](https://github.com/walrus-plus/walrus)
[![NPM version](https://img.shields.io/npm/v/@walrus/cli.svg?style=flat)](https://npmjs.org/package/@walrus/cli)

## 项目由来以及定位

**项目由来:**

新开发一个前端项目，为了代码质量管控和团队一致性，总会需要配置lint、jest、...，每个配置项目都会有一份配置,会引发难以保证每个项目做到完全统一，同时需要安装各种依赖，比较繁琐，

社区上的解决方案有以下：

 1. 使用抽取配置为单独的npm包 缺点: 无法解决安装众多依赖的问题
 2. 通过项目模板创建项目 缺点: 模板升级不好对历史项目进行修改，无法解决安装众多依赖的问题
 
综上考虑，开发一个拥有插件体系的cli工具，对常用的工具进行封装、根据约定大于配置的原则，内置最优配置

最后结果: 只需要安装 `@walrus/cli` 一个依赖，所有配置内置，当然支持自定义配置

**项目定位:** 

不造轮子，只封装已有的成熟工具，会根据工作经验，开发一些实用的插件

## ✨ 特性

* 🚀 零配置，配置已内置
* 💅 内置支持 jest、eslint、stylelint 等
* 🎉 插件体系，所有功能通过插件实现
* 💻 使用TypeScript编写

## 🌈 插件

### 内置

* [@walrus/walrus-plugin-jest](https://github.com/walrus-plus/walrus/blob/master/packages/walrus-plugin-jest/README.md)
* [@walrus/walrus-plugin-eslint](https://github.com/walrus-plus/walrus/blob/master/packages/walrus-plugin-eslint/README.md)
* [@walrus/walrus-plugin-prettier](https://github.com/walrus-plus/walrus/blob/master/packages/walrus-plugin-prettier/README.md)
* [@walrus/walrus-plugin-stylelint](https://github.com/walrus-plus/walrus/blob/master/packages/walrus-plugin-stylelint/README.md)
* [@walrus/walrus-plugin-commitlint](https://github.com/walrus-plus/walrus/blob/master/packages/walrus-plugin-commitlint/README.md)

### 其他

* [@walrus/walrus-plugin-update-config](https://github.com/walrus-plus/walrus-plugin-update-config)
* [@walrus/walrus-plugin-replace-keywords](https://github.com/walrus-plus/walrus-plugin-replace-keywords)

### 社区

...待补充

## 📦 安装

```
// npm
npm install @walrus/cli --dev

// yarn
yarn add @walrus/cli --dev

// 全局安装
yarn global add @walrus/cli

```

## 🔨 使用

### 测试

> Cli自带`@walrus/walrus-plugin-jest`插件

* package.json 添加如下代码

```
// package.json

"scripts": {
  "test": "walrus test"
}
```

* 当前项目目录执行

```
yarn test
```

### ESLint

> Cli自带`@walrus/walrus-plugin-eslint`插件

* package.json 添加如下代码

```
// package.json

"scripts": {
  "lint": "walrus lint"
}
```

* 当前项目目录执行

```
yarn lint
```

### 代码美化

> Cli自带`@walrus/walrus-plugin-prettier`插件

* package.json 添加如下代码

```
// package.json

"scripts": {
  "prettier": "walrus prettier"
}
```

* 当前项目目录执行

```
yarn prettier
```

## ⌨️ 本地开发

```
# 克隆项目到本地
git clone git@github.com:walrus-plus/walrus.git

# 安装依赖
yarn bootstarp
```

## 🌟 社区

* 钉钉，请扫描下面的二维码加群

<img height="200" src="https://github.com/alitajs/alita/blob/master/public/dingding.png"></img> 

* 微信，扫描二维码添加机器人，回复alita进群

<img height="200" src="https://github.com/alitajs/alita/blob/master/public/wechat.png"></img> 
