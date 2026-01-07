---
title: Git 工作流指南
date: 2026-01-01 12:00:00
tags:
  - Git
  - 版本控制
categories:
  - 工具
---

掌握 Git 工作流，提升团队协作效率。

<!-- more -->

## 常用命令

```bash
# 创建分支
git checkout -b feature/new-feature

# 提交更改
git add .
git commit -m "feat: add new feature"

# 合并分支
git checkout main
git merge feature/new-feature
```

## 分支策略

- `main` - 生产环境代码
- `develop` - 开发分支
- `feature/*` - 功能分支
- `hotfix/*` - 紧急修复

## Commit 规范

```
feat: 新功能
fix: 修复 bug
docs: 文档更新
style: 代码格式
refactor: 重构
test: 测试
chore: 构建/工具
```
