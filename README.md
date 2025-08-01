<div align="center">
  <h1 align="center">Vertex - 个人创意与工具中枢</h1>
  <p align="center">
    <strong>"击碎命运的诅咒"</strong>
  </p>
  <p align="center">
    一个高度可定制的、配置驱动的个人数字世界控制中心。
  </p>
  <p align="center">
    <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F424635328%2FVertex">
      <img src="https://vercel.com/button" alt="Deploy with Vercel"/>
    </a>
  </p>
  <p align="center">
    <img src="https://img.shields.io/github/license/424635328/Vertex?color=yellow" alt="License">
    <img src="https://img.shields.io/github/last-commit/424635328/Vertex" alt="Last Commit">
    <img src="https://img.shields.io/github/stars/424635328/Vertex?style=social" alt="GitHub Stars">
  </p>
</div>

---

## 概览

`Vertex` 不仅仅是一个个人主页，它是一个精心设计的、具备高度可扩展性的**个人门户网站**。它将富有创意的个人品牌展示与功能强大的实用工具导航无缝融合，旨在成为你个人数字世界的起点和控制中心。

本项目遵循**企业级标准**构建，注重代码质量、可访问性 (A11y)、开发者体验 (DX) 以及最终的用户体验 (UX)。

## ✨ 核心功能

- **沉浸式叙事主页 (`/`)**:

  - **动态视觉**: 铺满全屏的固定网格背景，能响应鼠标移动产生光晕效果。
  - **流畅的滚动体验**: 通过精心编排的入场动画，引导用户探索英雄区域、核心理念、技术栈和项目入口。
  - **丰富的微交互**: 基于 **Framer Motion**，包含 3D 悬浮卡片、“充能”发光图标等，提供令人愉悦的探索反馈。

- **企业级智能 Header**:

  - **智能滚动**: 向下滚动时自动隐藏以节省空间，向上滚动时立即出现以便导航。
  - **配置驱动**: 导航链接和图标链接均通过单一配置文件 (`src/config/navigation.ts`) 管理，增删链接无需修改组件代码。
  - **完全可访问 (A11y)**: 全键盘支持、焦点管理、`Esc` 关闭菜单及符合规范的 ARIA 属性。

- **动态工具导航页 (`/tools`)**:

  - **API 驱动**: 工具列表从 **Supabase** 后端动态获取，通过 Next.js API Route 实现前后端分离。
  - **交互式筛选**: 支持按分类对工具进行一键筛选，提供流畅的查询体验。

- **技术细节**:
  - **响应式设计**: 使用 Tailwind CSS 精心构建，确保在桌面、平板和移动设备上均有卓越体验。
  - **暗黑模式**: 支持亮色、暗色和跟随系统三种模式，提供舒适的视觉选择。

## 🚀 线上访问

**Live Demo:** [https://vertex-personal-hub.vercel.app/](https://vertex-personal-hub.vercel.app/) _(可以根据你自己的 Vercel 部署链接进行修改)_

## 📸 项目截图

_一个好的项目截图是 README 的灵魂。强烈建议在此处放置一张网站首页的截图或 GIF 动图。_

![Vertex 项目截图](https://via.placeholder.com/1200x675.png?text=Vertex+Project+Screenshot+Here)

---

## 🛠️ 技术栈

| 类型         | 技术/库                                         | 作用                                                     |
| ------------ | ----------------------------------------------- | -------------------------------------------------------- |
| **框架**     | [Next.js](https://nextjs.org/) (App Router)     | 提供生产级的 React 全栈开发能力。                        |
| **UI 样式**  | [Tailwind CSS](https://tailwindcss.com/)        | 功能类优先的 CSS 框架，用于快速、精细地构建 UI。         |
| **UI 组件**  | [shadcn/ui](https://ui.shadcn.com/)             | 高度可定制、可访问的组件集合，与 Tailwind CSS 完美集成。 |
| **动画**     | [Framer Motion](https://www.framer.com/motion/) | 实现声明式、高性能的 React 动画和交互。                  |
| **数据后端** | [Supabase](https://supabase.com/)               | 提供免费的 PostgreSQL 数据库和即时 API。                 |
| **数据交互** | `@supabase/supabase-js`                         | 在 Next.js 服务端安全地与 Supabase 数据库通信。          |
| **字体**     | [Geist](https://vercel.com/font)                | 由 Vercel 设计的现代化无衬线和等宽字体。                 |
| **部署**     | [Vercel](https://vercel.com/)                   | 为 Next.js 提供无缝的持续集成和部署 (CI/CD)。            |
| **语言**     | [TypeScript](https://www.typescriptlang.org/)   | 为项目提供强大的类型安全。                               |
| **图标**     | [Lucide React](https://lucide.dev/)             | 简单、美观、一致的开源图标库。                           |

---

## 📂 项目结构

```
.
├── src/
│   ├── app/                # Next.js App Router 核心目录
│   │   ├── api/            # API 路由
│   │   ├── tools/          # 工具导航页
│   │   ├── layout.tsx      # 全局根布局
│   │   └── page.tsx        # 个人展示主页
│   ├── components/         # 可复用 React 组件
│   │   ├── layout/         # 布局组件 (Header, Footer)
│   │   └── ui/             # shadcn/ui 自动生成的 UI 基础组件
│   ├── config/             # 项目配置文件
│   │   └── navigation.ts   # 导航链接配置
│   ├── hooks/              # 自定义 React Hooks
│   │   ├── use-on-click-outside.ts
│   │   └── use-scroll-direction.ts
│   └── lib/                # 辅助模块/库的初始化
│       ├── supabase.ts     # Supabase 客户端实例
│       └── utils.ts        # 工具函数 (如 cn)
├── public/                 # 静态资源 (图片, favicon等)
├── .env.local              # 本地环境变量 (!!! 禁止提交到 Git)
├── .env.example            # 环境变量示例文件
├── next.config.mjs         # Next.js 配置文件
└── tailwind.config.ts      # Tailwind CSS 配置文件
```

---

## ⚙️ 本地开发指南

### 1. 先决条件

- [Node.js](https://nodejs.org/) (v18 或更高版本)
- [npm](https://www.npmjs.com/) (随 Node.js 自动安装)
- 一个 [Supabase](https://supabase.com/) 账户 (免费)

### 2. 克隆与安装

```bash
# 克隆项目到本地
git clone https://github.com/424635328/Vertex.git

# 进入项目目录
cd Vertex

# 安装项目依赖
npm install
```

### 3. 配置 Supabase

1.  登录 Supabase，创建一个新项目。
2.  在 **Table Editor** 中，创建一个名为 `tools` 的表。
3.  **关闭 "Row Level Security (RLS)"** 以便在开发初期快速访问数据。（**生产环境强烈建议开启！**）
4.  确保 `tools` 表包含以下字段：`id` (uuid, 主键), `name` (text), `url` (text), `description` (text), `category` (text), `tags` (text[])。
5.  向 `tools` 表中插入一些示例数据。

### 4. 配置环境变量

1.  在项目根目录，复制 `.env.example` 文件并重命名为 `.env.local`。
    ```bash
    cp .env.example .env.local
    ```
2.  进入 Supabase 项目的 **Settings > API**。
3.  复制 **Project URL** 和 **Project API Keys** 中的 `anon` `public` Key。
4.  将这些值粘贴到 `.env.local` 文件中。

### 5. 启动开发服务器

```bash
npm run dev
```

现在，在浏览器中打开 `http://localhost:3000` 即可看到你的网站。

---

## 🧩 架构与可扩展性

本项目的核心设计思想之一是**配置驱动**，这使得非开发者也能轻松维护和扩展内容。

### 如何新增导航链接？

1.  打开 `src/config/navigation.ts` 文件。
2.  在 `mainNavLinks` 数组中，添加一个新的对象，例如：
    ```ts
    export const mainNavLinks = [
      // ...
      { href: "/blog", label: "博客" },
    ];
    ```
3.  保存文件。Header 会自动在桌面和移动端更新导航栏。

### 如何修改主页内容？

1.  打开 `src/app/page.tsx` 文件。
2.  在文件顶部的 **配置区域**，你可以找到并修改 `YOUR_NAME`, `YOUR_ROLE`, `corePhilosophies` (核心理念), 和 `techArsenal` (技术栈) 等变量。
3.  修改后保存，主页内容会立即更新。

---

## 核心逻辑解读

### 主页 (`page.tsx`)

- **组件化**: 整个页面被拆分为多个独立的子组件（如 `HeroSection`, `PhilosophySection`），提高了代码的可读性和复用性。
- **配置驱动**: 页面内容（如核心理念、技术栈）由文件顶部的数组配置生成，实现了数据与视图的分离。
- **状态与交互**: 使用 `React.useState` 和 `React.useRef` 结合 `useEffect` 来处理复杂的交互，如鼠标辉光效果。

### Header 组件 (`header.tsx`)

- **逻辑抽象**: 复杂的交互逻辑（如点击外部关闭、滚动方向判断）被抽离到 `src/hooks/` 目录下的自定义 Hooks 中，保持了组件代码的整洁。
- **状态管理**: 使用 `useState` 管理移动端菜单的开关状态，`useEffect` 负责处理副作用，如窗口缩放、键盘事件监听和焦点管理。

---

## 部署到 Vercel

本项目已为 Vercel 部署进行了优化。

1.  将你的项目推送到 GitHub 仓库。
2.  点击本 README 文件顶部的 "Deploy with Vercel" 按钮，或在 Vercel 仪表盘中选择 "Import Project"。
3.  在配置步骤中，展开 **Environment Variables** (环境变量) 部分。
4.  将你在 `.env.local` 中配置的 `NEXT_PUBLIC_SUPABASE_URL` 和 `NEXT_PUBLIC_SUPABASE_ANON_KEY` 添加进去。
5.  点击 "Deploy"，等待部署完成即可。

---

**"May your spirit soar, and your code compile."**
