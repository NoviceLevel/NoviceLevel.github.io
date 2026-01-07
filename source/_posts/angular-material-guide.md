---
title: Angular Material 入门指南
date: 2026-01-05 10:00:00
tags:
  - Angular
  - Material Design
  - 前端
categories:
  - 技术教程
---

Angular Material 是 Angular 官方的 Material Design 组件库，提供了丰富的 UI 组件。

<!-- more -->

## 安装

```bash
ng add @angular/material
```

## 常用组件

### Button

```html
<button mat-raised-button color="primary">Primary</button>
<button mat-raised-button color="accent">Accent</button>
```

### Card

```html
<mat-card>
  <mat-card-header>
    <mat-card-title>标题</mat-card-title>
  </mat-card-header>
  <mat-card-content>
    内容区域
  </mat-card-content>
</mat-card>
```

## 主题定制

Angular Material 支持自定义主题，可以通过 SCSS 变量来修改颜色。

> Material Design 是 Google 推出的设计语言，强调层次感和动效。
