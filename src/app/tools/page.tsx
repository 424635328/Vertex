// src/app/tools/page.tsx

"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Code, Palette, Zap, Cpu, Sparkles, FilterX } from "lucide-react";
import type { Tool } from "@/types/tool"; // 从新的类型文件导入
import { localToolsData } from "@/config/tools"; // 直接导入本地数据
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// 卡片图标映射 (保持不变)
const categoryIcons: { [key: string]: React.ElementType } = {
  '开发工具': Code,
  '设计资源': Palette,
  '效率提升': Zap,
  '人工智能': Sparkles,
};

// 工具卡片组件 (保持不变)
const ToolCard = ({ tool }: { tool: Tool }) => {
  const Icon = categoryIcons[tool.category] || Cpu;
  return (
    <motion.a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group relative block overflow-hidden rounded-xl border border-border bg-card/50 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
    >
      <div className="absolute -inset-px rounded-xl opacity-0 transition-all duration-300 group-hover:opacity-100 [background:radial-gradient(300px_circle_at_var(--x)_var(--y),hsl(var(--primary)/0.1),transparent)]"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-4">
          <div className="rounded-lg bg-primary/10 p-2">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">{tool.name}</h3>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{tool.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="transition-colors group-hover:bg-primary/20">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

// 主页面组件
export default function ToolsPage() {
  // ✅ 简化状态管理，直接从本地数据初始化
  const allTools: Tool[] = localToolsData;
  const categories: string[] = ["全部", ...new Set(allTools.map(tool => tool.category))];
  
  const [activeCategory, setActiveCategory] = React.useState("全部");
  const [searchQuery, setSearchQuery] = React.useState("");
  
  // ✅ 使用 useMemo 来计算过滤后的工具列表，性能更佳
  const filteredTools = React.useMemo(() => {
    let result = allTools;
    if (activeCategory !== "全部") {
      result = result.filter(tool => tool.category === activeCategory);
    }
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      result = result.filter(
        tool =>
          tool.name.toLowerCase().includes(lowerCaseQuery) ||
          tool.description.toLowerCase().includes(lowerCaseQuery) ||
          tool.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
      );
    }
    return result;
  }, [searchQuery, activeCategory, allTools]);

  const cardContainerRef = React.useRef<HTMLDivElement>(null);

  // 辉光效果的 useEffect 保持不变
  React.useEffect(() => {
    const container = cardContainerRef.current;
    if (!container) return;
    const handleMouseMove = (e: MouseEvent) => {
      for (const card of container.getElementsByTagName("a")) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--x", e.clientX - rect.left + "px");
        card.style.setProperty("--y", e.clientY - rect.top + "px");
      }
    };
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [cardContainerRef]);

  return (
    <>
      <div className="fixed inset-0 -z-10 bg-background/10 bg-[linear-gradient(to_right,theme(colors.border/0.4)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border/0.4)_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute inset-0 -z-20 bg-background/25 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_20%,transparent_100%)]"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="container mx-auto max-w-6xl px-4 py-16 sm:py-24"
      >
        <div className="text-center">
          <Sparkles className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            工具中枢
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            一个精心策划的集合，汇集了我在开发、设计和提升效率过程中依赖的工具与资源。
          </p>
        </div>

        <div className="sticky top-20 z-20 my-12 rounded-xl border border-border/50 bg-background/40 p-4 backdrop-blur-md">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="搜索工具、描述或标签..."
                className="w-full pl-10"
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={activeCategory === category ? 'secondary' : 'ghost'}
                  onClick={() => setActiveCategory(category)}
                  className="relative"
                >
                  {category}
                  {activeCategory === category && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-primary"
                      layoutId="active-category-underline"
                    />
                  )}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* ✅ 移除了 isLoading 判断和骨架屏 */}
        <motion.div
          ref={cardContainerRef}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredTools.length > 0 ? (
              filteredTools.map(tool => <ToolCard key={tool.id} tool={tool} />)
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border p-12 text-center"
              >
                  <FilterX className="h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-xl font-semibold">未找到匹配的工具</h3>
                  <p className="mt-2 text-muted-foreground">请尝试调整搜索词或更换筛选分类。</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </>
  );
}