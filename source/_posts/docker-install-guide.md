---
title: Linux 服务器安装 Docker 完整指南
date: 2026-01-08 22:00:00
tags:
  - Docker
  - Linux
  - 运维
categories:
  - 技术教程
---

本文介绍在 Debian/Ubuntu 系统上安装 Docker 的几种方法，以及配置国内镜像加速。

## 方法一：从系统软件源安装（最简单）

适合快速部署，版本可能不是最新：

```bash
# 安装 Docker 和 Docker Compose
apt update
apt install -y docker.io docker-compose

# 设置开机自启
systemctl enable --now docker
```

## 方法二：使用官方安装脚本

### 使用官方源（国外服务器推荐）

```bash
curl -fsSL https://get.docker.com | bash
```

### 使用阿里云镜像（国内服务器推荐）

```bash
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

### 使用 Azure 中国镜像

```bash
curl -fsSL https://get.docker.com | bash -s docker --mirror AzureChinaCloud
```

安装完成后设置自启：

```bash
systemctl enable --now docker
```

## 安装 Docker Compose（可选）

如果需要最新版 Docker Compose：

```bash
# 获取最新版本号并安装
COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep tag_name | cut -d '"' -f 4)
curl -L "https://github.com/docker/compose/releases/download/${COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# 验证安装
docker-compose --version
```

## 配置国内镜像加速

国内服务器拉取镜像较慢，配置镜像加速：

```bash
mkdir -p /etc/docker

cat > /etc/docker/daemon.json << EOF
{
  "registry-mirrors": [
    "https://docker.m.daocloud.io",
    "https://dockerproxy.com"
  ]
}
EOF

# 重启 Docker 生效
systemctl daemon-reload
systemctl restart docker
```

## 验证安装

```bash
# 查看版本
docker --version

# 运行测试容器
docker run hello-world
```

## 常用命令

```bash
# 查看运行中的容器
docker ps

# 查看所有容器
docker ps -a

# 查看镜像
docker images

# 停止容器
docker stop <容器ID>

# 删除容器
docker rm <容器ID>

# 删除镜像
docker rmi <镜像ID>
```

安装完成后就可以愉快地使用 Docker 了！
