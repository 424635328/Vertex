// 这个文件用于存放网站的全局配置信息

import { Github, Twitter, Linkedin } from 'lucide-react';

export const siteConfig = {
  name: "Vertex",
  description: "一个高度可定制的、配置驱动的个人数字世界控制中心。",
  author: "你的名字", // 替换成你的名字
  url: "https://vertex-personal-hub.vercel.app", // 替换成你的线上访问链接
  links: {
    github: "https://github.com/424635328/Vertex", // 替换成你的项目 GitHub 链接
    personalGithub: "https://github.com/424635328", // 替换成你的个人 GitHub 链接
    twitter: "https://twitter.com/[你的推特]",
    linkedin: "https://linkedin.com/in/[你的领英]",
  },
};

export const footerLinks = [
  {
    title: "导航",
    items: [
      { label: "主页", href: "/" },
      { label: "工具中枢", href: "/tools" },
      // 如果你有博客或其他页面，可以在这里添加
      // { label: "博客", href: "/blog" },
    ],
  },
  {
    title: "资源",
    items: [
      { label: "源码", href: siteConfig.links.github },
      { label: "部署于 Vercel", href: "https://vercel.com" },
      { label: "Next.js 文档", href: "https://nextjs.org" },
      { label: "shadcn/ui", href: "https://ui.shadcn.com" },
    ],
  },
  {
    title: "社交媒体",
    items: [
      { label: "GitHub", href: siteConfig.links.personalGithub, icon: Github },
      { label: "Twitter", href: siteConfig.links.twitter, icon: Twitter },
      { label: "LinkedIn", href: siteConfig.links.linkedin, icon: Linkedin },
    ],
  }
];