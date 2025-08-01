// src/config/navigation.ts

import { Github, Twitter, Mail, Rss, LucideIcon } from "lucide-react";

// 定义导航链接的类型
export type NavLink = {
  href: string;
  label: string;
};

// 定义社交/功能图标链接的类型
export type IconLink = {
  href: string;
  label: string; // 用于 aria-label 和 tooltip
  icon: LucideIcon;
};

// --- 主导航配置 ---
// 在这里增删改查，Header 会自动更新
export const mainNavLinks: NavLink[] = [
  { href: "/", label: "主页" },
  { href: "/tools", label: "工具集" },
  // 示例：未来想新增一个“博客”页面，只需在这里加一行
  // { href: "/blog", label: "博客" }, 
];

// --- 图标链接配置 ---
export const iconLinks: IconLink[] = [
  {
    href: "https://github.com/424635328/Vertex",
    label: "查看 GitHub 源码",
    icon: Github,
  },
  // 示例：未来想新增一个 Twitter 链接
  // {
  //   href: "https://twitter.com/[YOUR_TWITTER_USERNAME]",
  //   label: "关注我的 Twitter",
  //   icon: Twitter,
  // },
];