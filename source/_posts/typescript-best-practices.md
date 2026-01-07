---
title: TypeScript 最佳实践
date: 2026-01-02 16:00:00
tags:
  - TypeScript
  - JavaScript
categories:
  - 技术教程
---

TypeScript 为 JavaScript 添加了类型系统，让代码更健壮。

<!-- more -->

## 类型定义

```typescript
interface User {
  id: number;
  name: string;
  email?: string;
}

function getUser(id: number): Promise<User> {
  return fetch(`/api/users/${id}`).then(res => res.json());
}
```

## 泛型

```typescript
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

const num = first([1, 2, 3]); // number
const str = first(['a', 'b']); // string
```

## 类型守卫

```typescript
function isString(value: unknown): value is string {
  return typeof value === 'string';
}
```

> 使用 TypeScript 可以在编译时发现错误，提高代码质量。
