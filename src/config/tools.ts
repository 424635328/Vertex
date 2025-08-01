// src/config/tools.ts

import type { Tool } from '@/types/tool';

// 这是一个基础的工具列表，用于展示核心功能。
// 你可以根据自己的需求随意添加、修改或删除。
export const localToolsData: Tool[] = [
  // --- 开发工具 ---
  {
    id: "dev-1",
    name: "GitHub",
    url: "https://github.com",
    description: "全球最大的代码托管平台和开发者社区，提供版本控制和协作功能。",
    category: "开发工具",
    tags: ["Git", "版本控制", "开源", "协作"],
  },
  {
    id: "dev-2",
    name: "VS Code",
    url: "https://code.visualstudio.com/",
    description: "由微软开发的免费、开源的代码编辑器，支持海量扩展，功能强大且轻量。",
    category: "开发工具",
    tags: ["编辑器", "IDE", "微软", "开源"],
  },

  // --- 设计资源 ---
  {
    id: "design-1",
    name: "Figma",
    url: "https://www.figma.com",
    description: "一款强大的、基于云的协作式 UI/UX 设计工具，用于创建线框图、原型和设计系统。",
    category: "设计资源",
    tags: ["UI/UX", "设计", "协作", "原型"],
  },
  {
    id: "design-2",
    name: "Coolors",
    url: "https://coolors.co/",
    description: "快速生成和探索配色方案的在线工具，设计师的色彩灵感来源。",
    category: "设计资源",
    tags: ["配色", "色彩", "灵感"],
  },

  // --- 效率提升 ---
  {
    id: "eff-1",
    name: "Notion",
    url: "https://www.notion.so/",
    description: "集成了笔记、知识库、任务管理等功能于一体的 all-in-one 工作空间。",
    category: "效率提升",
    tags: ["笔记", "文档", "项目管理", "知识库"],
  },

  // --- 人工智能 ---
  {
    id: "ai-1",
    name: "ChatGPT",
    url: "https://chat.openai.com/",
    description: "由 OpenAI 开发的先进大型语言模型，能够进行自然语言对话并执行多种任务。",
    category: "人工智能",
    tags: ["LLM", "AI", "对话", "OpenAI"],
  },

  // --- 游戏相关 ---
  {
    id: "game-1",
    name: "原神",
    url: "https://ys.mihoyo.com/",
    description: "由米哈游开发的开放世界冒险游戏。",
    category: "游戏相关",
    tags: ["米哈游", "开放世界", "RPG"],
  },
  
  // --- 学习办公 ---
  {
    id: "study-1",
    name: "arXiv.org",
    url: "https://arxiv.org/",
    description: "提供物理、数学、计算机科学等领域学术论文预印本的开放获取网站。",
    category: "学习办公",
    tags: ["论文", "科研", "学术"],
  },
  
  // --- 社交媒体 ---
  {
    id: "social-1",
    name: "哔哩哔哩",
    url: "https://www.bilibili.com/",
    description: "国内知名的视频弹幕网站，涵盖动漫、游戏、生活等多元内容。",
    category: "社交媒体",
    tags: ["B站", "视频", "动漫", "弹幕"],
  },
  
  // --- 生活娱乐 ---
  {
    id: "life-1",
    name: "QQ音乐",
    url: "https://y.qq.com/",
    description: "千万正版高品质曲库，新歌热歌天天更新的在线音乐平台。",
    category: "生活娱乐",
    tags: ["音乐", "听歌"],
  },
];