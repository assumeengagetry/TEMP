# 使用 Node.js 官方镜像作为基础镜像
FROM node:20-slim AS builder

# 安装 pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 pnpm-lock.yaml
COPY package*.json pnpm-lock.yaml ./

# 安装依赖
RUN pnpm install

# 复制源代码
COPY . .

# 构建应用
RUN pnpm build

# 使用更轻量级的镜像作为运行环境
FROM node:20-slim

WORKDIR /app

# 从构建阶段复制必要文件
COPY --from=builder /app/.output /app/.output
COPY --from=builder /app/public /app/public

# 设置环境变量
ENV NODE_ENV=production
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# 暴露端口
EXPOSE 3000

# 启动命令
CMD [ "node", ".output/server/index.mjs" ]
