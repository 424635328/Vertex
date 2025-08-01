// src/components/layout/footer.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig, footerLinks } from "@/config/site";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full border-t border-border/50 bg-background/45 backdrop-blur-sm"
    >
      <div className="container mx-auto max-w-7xl px-6 py-12">
        {/* 主要内容网格布局 */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* 第一列：品牌信息 */}
          <div className="md:col-span-1 lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-tighter text-foreground">
              {siteConfig.name}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          {/* 链接列：动态生成 */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.items.map((item) => (
                  <li key={item.label}>
                    {/* ✅✅✅ FIX: 添加类型守卫来检查 'icon' 属性是否存在 ✅✅✅ */}
                    {"icon" in item && item.icon ? (
                       // 如果 item 中存在 icon 属性，渲染带图标的链接
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={item.label}
                              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                            >
                              <item.icon className="h-5 w-5" />
                              <span className="md:hidden">{item.label}</span> {/* 在移动端显示文字 */}
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>{item.label}</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      // 否则，渲染普通文本链接
                      <Link
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : "_self"}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : ""}
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 底部版权和状态信息 */}
        <div className="mt-12 border-t border-border/50 pt-8">
          <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {year} {siteConfig.author}. All Rights Reserved.
            </p>
            <a 
              href={siteConfig.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              aria-label="网站状态"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              All systems normal
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}