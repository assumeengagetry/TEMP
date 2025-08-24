# 個人網站 - Nuxt.js

本專案是一個基於 Nuxt 3、TypeScript、Tailwind CSS 的個人網站，支援多語言（英文、中文），適合用於個人簡介、作品集展示。

## 目錄結構

```
nuxt-app/
├── app/
│   ├── assets/css/main.css         # Tailwind 主樣式
│   ├── composables/useLanguage.ts # 語言切換組件
│   ├── locales/                   # 多語言 JSON
│   │   ├── en.json
│   │   └── zh.json
│   ├── pages/                     # 各頁面
│   │   ├── about.vue
│   │   ├── awards.vue
│   │   ├── hobbies.vue
│   │   ├── index.vue
│   │   └── publications.vue
│   └── plugins/i18n.ts            # i18n 插件
├── public/                        # 公共資源
│   ├── favicon.ico
│   └── robots.txt
├── nuxt.config.ts                 # Nuxt 設定
├── package.json                   # 依賴管理
├── tailwind.config.js             # Tailwind 設定
├── tsconfig.json                  # TypeScript 設定
├── update-translations.js         # 翻譯自動化腳本
└── README.md                      # 專案說明
```

## 快速開始

### 1. 安裝依賴

```bash
pnpm install
# 或
npm install
```

### 2. 本地開發

```bash
pnpm dev
# 或
npm run dev
```

預設啟動於 http://localhost:3000

### 3. 編譯與部署

```bash
pnpm build
# 或
npm run build

# 啟動 production server
pnpm start
# 或
npm run start
```

### 4. VPS 部署（Ubuntu 範例）

1. 安裝 Node.js、pnpm（或 npm）
2. 將專案上傳至 VPS
3. 安裝依賴、編譯、啟動（可用 pm2 管理進程）

```bash
# 進入專案目錄
cd ~/nuxt-app

# 安裝依賴
pnpm install

# 編譯
pnpm build

# 啟動
pnpm start
# 或用 pm2
pm2 start .output/server/index.mjs --name nuxt-app --interpreter node
```

4. 安裝和配置 Nginx

```bash
# 安裝 Nginx
sudo apt update
sudo apt install nginx

# 建立 Nginx 配置檔
sudo nano /etc/nginx/sites-available/nuxt-app

# 貼上以下配置（記得修改 domain.com 為你的域名）
server {
    listen 80;
    server_name domain.com www.domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# 建立軟連結啟用配置
sudo ln -s /etc/nginx/sites-available/nuxt-app /etc/nginx/sites-enabled/

# 測試配置是否正確
sudo nginx -t

# 重啟 Nginx
sudo systemctl restart nginx
```

5. 設定 SSL（使用 Let's Encrypt）

```bash
# 安裝 Certbot
sudo apt install certbot python3-certbot-nginx

# 申請和安裝 SSL 證書（記得修改 domain.com）
sudo certbot --nginx -d domain.com -d www.domain.com

# Certbot 會自動修改 Nginx 配置並重啟
```

6. 設定防火牆

```bash
# 開放 HTTP 和 HTTPS 端口
sudo ufw allow 80
sudo ufw allow 443

# 如果防火牆未啟用，啟用它
sudo ufw enable
```

7. 設定 DNS
- 在你的域名管理面板中，添加 A 記錄
- 將你的域名指向你的 VPS IP 地址
- DNS 生效可能需要幾分鐘到幾小時

完成後，訪問 https://domain.com 即可看到你的網站。


## 主要技術棧
- [Nuxt 3](https://nuxt.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [vue-i18n](https://vue-i18n.intlify.dev/)

## 多語言切換
- 語言檔案位於 `app/locales/`
- 語言切換邏輯於 `app/composables/useLanguage.ts`

## 其他
- 如需自訂內容，請修改 `app/pages/` 下的 Vue 檔案
- 如需新增語言，請於 `app/locales/` 新增對應 JSON

---

如有問題，歡迎提 issue 或聯絡作者。

## 功能特色

- 🏠 **首頁** - 個人介紹和快速導航
- 👤 **關於我** - 詳細的個人背景、工作經驗和技能
- 📚 **出版物** - 學術論文和研究成果展示
- 🏆 **獎項** - 榮譽和成就展示
- 🎨 **愛好** - 個人興趣和活動展示
- 🌐 **中英文切換** - 支持中英文雙語切換
- 🔗 **社交媒體鏈接** - GitHub、LinkedIn、Twitter 等

## 技術棧

- **框架**: Nuxt.js 4
- **語言**: TypeScript
- **樣式**: Tailwind CSS
- **國際化**: 自定義 i18n 插件
- **圖標**: Heroicons (SVG)

## 快速開始

### 安裝依賴

```bash
# 使用 pnpm (推薦)
pnpm install

# 或使用 npm
npm install

# 或使用 yarn
yarn install
```

### 開發模式

```bash
# 啟動開發服務器
pnpm dev

# 或使用 npm
npm run dev

# 或使用 yarn
yarn dev
```

開發服務器將在 `http://localhost:3000` 啟動。

### 構建生產版本

```bash
# 構建應用
pnpm build

# 預覽生產版本
pnpm preview
```

## 項目結構

```
nuxt-app/
├── app/
│   ├── pages/           # 頁面文件
│   │   ├── index.vue    # 首頁
│   │   ├── about.vue    # 關於我
│   │   ├── publications.vue  # 出版物
│   │   ├── awards.vue   # 獎項
│   │   └── hobbies.vue  # 愛好
│   ├── locales/         # 國際化文件
│   │   ├── en.json      # 英文
│   │   └── zh.json      # 中文
│   ├── plugins/         # 插件
│   │   └── i18n.ts      # 國際化插件
│   ├── composables/     # 組合式函數
│   │   └── useLanguage.ts # 語言管理
│   └── assets/          # 靜態資源
│       └── css/
│           └── main.css # 主樣式文件
├── public/              # 公共文件
├── nuxt.config.ts       # Nuxt 配置
├── tailwind.config.js   # Tailwind 配置
└── package.json         # 項目依賴
```

## 自定義配置

### 修改個人信息

編輯 `app/locales/en.json` 和 `app/locales/zh.json` 文件來更新個人信息：

- 姓名和職位
- 工作經驗
- 教育背景
- 技能
- 出版物
- 獎項
- 愛好

### 修改社交媒體鏈接

在 `app/pages/index.vue` 中找到社交媒體鏈接部分，更新為你的實際鏈接：

```vue
<a href="https://github.com/yourusername" target="_blank">
  <!-- GitHub 圖標 -->
</a>
<a href="https://linkedin.com/in/yourusername" target="_blank">
  <!-- LinkedIn 圖標 -->
</a>
<a href="https://twitter.com/yourusername" target="_blank">
  <!-- Twitter 圖標 -->
</a>
```

### 添加新頁面

1. 在 `app/pages/` 目錄下創建新的 `.vue` 文件
2. 在導航欄中添加對應的鏈接
3. 在語言文件中添加對應的文本

## 部署

### Vercel (推薦)

1. 將代碼推送到 GitHub
2. 在 Vercel 中導入項目
3. 選擇 Nuxt.js 框架
4. 部署完成

### Netlify

1. 將代碼推送到 GitHub
2. 在 Netlify 中導入項目
3. 構建命令：`npm run build`
4. 發布目錄：`.output/public`
5. 部署完成

### 其他平台

這個項目可以部署到任何支持 Node.js 的平台，包括：

- Railway
- Heroku
- DigitalOcean App Platform
- AWS Amplify

## 貢獻

歡迎提交 Issue 和 Pull Request 來改進這個項目！

## 許可證

MIT License
