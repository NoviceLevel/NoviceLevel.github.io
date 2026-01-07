---
title: Hexo 主题开发入门
date: 2026-01-04 14:30:00
tags:
  - Hexo
  - 主题开发
categories:
  - 技术教程
---

学习如何从零开始开发一个 Hexo 主题。

<!-- more -->

## 目录结构

```
themes/mytheme/
├── layout/          # 模板文件
│   ├── layout.ejs   # 主布局
│   ├── index.ejs    # 首页
│   ├── post.ejs     # 文章页
│   └── _partial/    # 可复用组件
├── source/          # 静态资源
│   ├── css/
│   └── js/
└── _config.yml      # 主题配置
```

## 模板语法

Hexo 默认使用 EJS 模板引擎：

```ejs
<% page.posts.each(function(post){ %>
  <article>
    <h2><%= post.title %></h2>
    <p><%- post.excerpt %></p>
  </article>
<% }) %>
```

## 常用变量

- `config` - 站点配置
- `theme` - 主题配置
- `page` - 当前页面数据
- `site` - 全站数据
