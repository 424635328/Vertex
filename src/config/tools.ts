// src/config/tools.ts

import type { Tool } from '@/types/tool'; // 我们将创建一个共享的类型文件

export const localToolsData: Tool[] = [
  {
    id: "1",
    name: "Figma",
    url: "https://www.figma.com",
    description: "一款强大的、基于云的协作式 UI/UX 设计工具，用于创建线框图、原型和设计系统。",
    category: "设计资源",
    tags: ["UI/UX", "设计", "协作", "原型"],
    icon: "Figma" // (可选) 为了未来的图标库扩展
  },
  {
    id: "2",
    name: "VS Code",
    url: "https://code.visualstudio.com/",
    description: "由微软开发的免费、开源的代码编辑器，支持海量扩展，功能强大且轻量。",
    category: "开发工具",
    tags: ["编辑器", "IDE", "微软", "开源"],
    icon: "Vscode"
  },
  {
    id: "3",
    name: "Notion",
    url: "https://www.notion.so/",
    description: "集成了笔记、知识库、任务管理等功能于一体的 all-in-one 工作空间。",
    category: "效率提升",
    tags: ["笔记", "文档", "项目管理", "知识库"],
    icon: "Notion"
  },
  {
    id: "4",
    name: "ChatGPT",
    url: "https://chat.openai.com/",
    description: "由 OpenAI 开发的先进大型语言模型，能够进行自然语言对话并执行多种任务。",
    category: "人工智能",
    tags: ["LLM", "AI", "对话", "OpenAI"],
    icon: "ChatGPT"
  },
  {
    id: "5",
    name: "GitHub",
    url: "https://github.com",
    description: "全球最大的代码托管平台和开发者社区，提供版本控制和协作功能。",
    category: "开发工具",
    tags: ["Git", "版本控制", "开源", "协作"],
    icon: "GitHub"
  },
  {
    id: "6",
    name: "Coolors",
    url: "https://coolors.co/",
    description: "快速生成和探索配色方案的在线工具，设计师的色彩灵感来源。",
    category: "设计资源",
    tags: ["配色", "色彩", "设计"],
    icon: "Coolors"
  },
  // --- 在这里添加更多你的工具 ---
];