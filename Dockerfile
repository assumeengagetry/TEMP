# 使用 Node.js 官方鏡像作為基礎鏡像
FROM node:20-slim AS builder

# 設置構建參數
ARG NODE_ENV=production
ARG NUXT_HOST=0.0.0.0
ARG NUXT_PORT=3000

# 設置環境變量
ENV NODE_ENV=${NODE_ENV} \
    NUXT_HOST=${NUXT_HOST} \
    NUXT_PORT=${NUXT_PORT}

# 安裝 pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# 設置工作目錄
WORKDIR /app

# 複製 package.json 和 pnpm-lock.yaml
COPY package*.json pnpm-lock.yaml ./

# 安裝依賴
RUN pnpm install --frozen-lockfile

# 複製源代碼
COPY . .

# 構建應用
RUN pnpm build

# 使用更輕量級的鏡像作為運行環境
FROM node:20-slim

# 創建非 root 用戶
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nuxt

WORKDIR /app

# 從構建階段複製必要文件
COPY --from=builder --chown=nuxt:nodejs /app/.output /app/.output
COPY --from=builder --chown=nuxt:nodejs /app/public /app/public

# 設置環境變量
ENV NODE_ENV=production \
    NUXT_HOST=0.0.0.0 \
    NUXT_PORT=3000

# 切換到非 root 用戶
USER nuxt

# 健康檢查
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:${NUXT_PORT}/api/health || exit 1

# 暴露端口
EXPOSE ${NUXT_PORT}

# 啟動命令
CMD [ "node", ".output/server/index.mjs" ]
