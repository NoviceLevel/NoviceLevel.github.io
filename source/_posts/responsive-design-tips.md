---
title: 响应式设计最佳实践
date: 2026-01-03 09:00:00
tags:
  - CSS
  - 响应式
  - 前端
categories:
  - 设计
---

现代 Web 应用必须适配各种屏幕尺寸，响应式设计是关键。

<!-- more -->

## 媒体查询

```css
/* 移动端优先 */
.container {
  padding: 16px;
}

/* 平板 */
@media (min-width: 768px) {
  .container {
    padding: 24px;
  }
}

/* 桌面 */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

## Grid 布局

CSS Grid 是响应式布局的利器：

```css
.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}
```

## 断点选择

| 断点 | 尺寸 | 设备 |
|------|------|------|
| xs | < 600px | 手机 |
| sm | 600px | 小平板 |
| md | 960px | 平板 |
| lg | 1280px | 桌面 |
