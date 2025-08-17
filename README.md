# 個人網站 - Nuxt.js

這是一個使用 Nuxt.js 框架構建的現代化個人網站，包含以下功能：

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
│   │   └── i18n.client.ts  # 國際化插件
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
