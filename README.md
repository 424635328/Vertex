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

  - **动态视觉**: 铺满全屏的固定网格背景，能响应鼠标移动产生微妙的光晕效果。
  - **流畅的滚动体验**: 通过精心编排的入场动画，引导用户探索英雄区域、核心理念、技术栈和项目入口。
  - **丰富的微交互**: 基于 **Framer Motion**，包含 3D 悬浮卡片、“充能”发光图标等，提供令人愉悦的探索反馈。

- **企业级智能 Header & Footer**:

  - **智能滚动 Header**: 向下滚动时自动隐藏，向上滚动时立即出现，最大化内容可视区域。
  - **配置驱动**: 导航链接、社交图标、页脚信息均通过单一配置文件 (`src/config/`) 管理，增删改查无需修改组件代码。
  - **完全可访问 (A11y)**: 全键盘支持、焦点管理、`Esc` 关闭菜单及符合规范的 ARIA 属性。

- **动态工具中枢 (`/tools`)**:

  - **本地配置驱动**: 工具列表完全由本地文件 (`src/config/tools.ts`) 控制，无需外部数据库，部署简单，响应迅速。
  - **即时搜索与筛选**: 支持按分类一键筛选和关键词实时搜索，提供流畅的查询体验。
  - **顶级视觉体验**:
    - **3D 视差卡片**: 基于 `react-parallax-tilt`，鼠标悬浮时产生酷炫的 3D 倾斜效果。
    - **动态辉光**: 每张卡片根据其分类拥有独特的发光边框和高亮颜色。
    - **优雅动画**: 使用 `Framer Motion` 实现卡片的平滑入场、退场和布局动画。

- **技术细节**:
  - **响应式设计**: 使用 Tailwind CSS 精心构建，确保在桌面、平板和移动设备上均有卓越体验。
  - **暗黑模式**: 支持亮色、暗色和跟随系统三种模式，提供舒适的视觉选择。

## 🚀 线上访问

**Live Demo:** [https://vertex-personal-hub.vercel.app/](https://vertex-personal-hub.vercel.app/) _(可以根据你自己的 Vercel 部署链接进行修改)_

## 📸 项目截图

_强烈建议在此处放置一张网站首页或工具页面的截图或 GIF 动图，以展示其炫酷的交互效果。_

![Vertex 项目截图](https://via.placeholder.com/1200x675.png?text=Vertex+Project+Screenshot+or+GIF+Here)

---

## 🛠️ 技术栈

| 类型         | 技术/库                                                                  | 作用                                                     |
| ------------ | ------------------------------------------------------------------------ | -------------------------------------------------------- |
| **框架**     | [Next.js](https://nextjs.org/) (App Router)                              | 提供生产级的 React 全栈开发能力。                        |
| **UI 样式**  | [Tailwind CSS](https://tailwindcss.com/)                                 | 功能类优先的 CSS 框架，用于快速、精细地构建 UI。         |
| **UI 组件**  | [shadcn/ui](https://ui.shadcn.com/)                                      | 高度可定制、可访问的组件集合，与 Tailwind CSS 完美集成。 |
| **动画**     | [Framer Motion](https://www.framer.com/motion/)                          | 实现声明式、高性能的 React 动画和交互。                  |
| **3D 交互**  | [react-parallax-tilt](https://www.npmjs.com/package/react-parallax-tilt) | 为卡片提供轻量、流畅的 3D 视差悬浮效果。                 |
| **文本优化** | [react-wrap-balancer](https://www.npmjs.com/package/react-wrap-balancer) | 优化文本换行，避免不美观的单字成行。                     |
| **字体**     | [Geist](https://vercel.com/font)                                         | 由 Vercel 设计的现代化无衬线和等宽字体。                 |
| **部署**     | [Vercel](https://vercel.com/)                                            | 为 Next.js 提供无缝的持续集成和部署 (CI/CD)。            |
| **语言**     | [TypeScript](https://www.typescriptlang.org/)                            | 为项目提供强大的类型安全。                               |
| **图标**     | [Lucide React](https://lucide.dev/)                                      | 简单、美观、一致的开源图标库。                           |

---

## 📂 项目结构

```
.
├── src/
│   ├── app/                # Next.js App Router 核心目录
│   │   ├── tools/          # 工具导航页
│   │   ├── layout.tsx      # 全局根布局
│   │   └── page.tsx        # 个人展示主页
│   ├── components/         # 可复用 React 组件
│   │   ├── layout/         # 布局组件 (Header, Footer)
│   │   └── ui/             # shadcn/ui 自动生成的 UI 基础组件
│   ├── config/             # 项目配置文件
│   │   ├── navigation.ts   # Header 导航配置
│   │   ├── site.ts         # Footer 和网站元数据配置
│   │   └── tools.ts        # 工具中枢数据配置
│   ├── hooks/              # 自定义 React Hooks
│   ├── lib/                # 辅助模块 (如 cn 工具函数)
│   └── types/              # 全局 TypeScript 类型定义
│       └── tool.ts         # 工具类型定义
├── public/                 # 静态资源 (图片, favicon等)
├── next.config.mjs         # Next.js 配置文件
└── tailwind.config.ts      # Tailwind CSS 配置文件
```

---

## ⚙️ 本地开发指南

### 1. 先决条件

- [Node.js](https://nodejs.org/) (v18 或更高版本)
- [pnpm](https://pnpm.io/) (推荐), `npm`, 或 `yarn`

### 2. 克隆与安装

```bash
# 克隆项目到本地
git clone https://github.com/424635328/Vertex.git

# 进入项目目录
cd Vertex

# 安装项目依赖 (推荐使用 pnpm)
pnpm install
# 或者 npm install
```

### 3. 启动开发服务器

```bash
pnpm dev
# 或者 npm run dev
```

现在，在浏览器中打开 `http://localhost:3000` 即可看到你的网站。一切就绪，无需额外配置！

---

## 🧩 架构与可扩展性

本项目的核心设计思想之一是**配置驱动**，这使得非开发者也能轻松维护和扩展内容。

### 如何新增/修改工具？

1.  打开 `src/config/tools.ts` 文件。
2.  在 `localToolsData` 数组中，添加一个新的工具对象或修改现有对象。
    ```ts
    export const localToolsData: Tool[] = [
      // ...
      {
        id: "unique-id", // 确保 ID 唯一
        name: "新工具名称",
        url: "https://example.com",
        description: "这是一个非常酷的新工具。",
        category: "开发工具", // 必须是 types/tool.ts 中定义的分类之一
        tags: ["标签1", "标签2"],
      },
    ];
    ```
3.  保存文件。网站的工具中枢页面会自动热重载并显示你的更改。

### 如何修改导航和页脚？

- **Header 导航**: 修改 `src/config/navigation.ts` 文件。
- **Footer 链接和信息**: 修改 `src/config/site.ts` 文件。

---

## 部署到 Vercel

本项目已为 Vercel 部署进行了优化，并且**无需任何环境变量配置**。

1.  将你的项目 fork 到自己的 GitHub 账户，然后推送到你的仓库。
2.  点击本 README 文件顶部的 "Deploy with Vercel" 按钮，或在 Vercel 仪表盘中从你的 GitHub 仓库导入项目。
3.  Vercel 会自动识别出这是一个 Next.js 项目并使用最佳配置。
4.  点击 "Deploy"，等待部署完成即可。

---

**"May your spirit soar, and your code compile."**
