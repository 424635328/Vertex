// src/app/tools/page.tsx

"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Code, Palette, Zap, Cpu, Sparkles, FilterX } from "lucide-react";
import type { Tool } from "@/app/api/tools/route";
import { Input } from "@/components/ui/input"; // 假设已通过 CLI 添加
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"; // 假设已通过 CLI 添加

// 卡片图标映射
const categoryIcons: { [key: string]: React.ElementType } = {
  '开发工具': Code,
  '设计资源': Palette,
  '效率提升': Zap,
  '人工智能': Sparkles,
};

// 工具卡片组件
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

// 骨架屏组件
const SkeletonLoader = () => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="rounded-xl border border-border bg-card/50 p-6">
        <div className="flex animate-pulse items-center gap-4">
          <div className="h-10 w-10 rounded-lg bg-muted"></div>
          <div className="h-6 w-2/3 rounded bg-muted"></div>
        </div>
        <div className="mt-4 h-4 w-full rounded bg-muted"></div>
        <div className="mt-2 h-4 w-5/6 rounded bg-muted"></div>
        <div className="mt-4 flex gap-2">
          <div className="h-6 w-16 rounded-full bg-muted"></div>
          <div className="h-6 w-20 rounded-full bg-muted"></div>
        </div>
      </div>
    ))}
  </div>
);

// 主页面组件
export default function ToolsPage() {
  const [allTools, setAllTools] = React.useState<Tool[]>([]);
  const [filteredTools, setFilteredTools] = React.useState<Tool[]>([]);
  const [categories, setCategories] = React.useState<string[]>([]);
  const [activeCategory, setActiveCategory] = React.useState("全部");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  const cardContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const fetchTools = async () => {
      try {
        const response = await fetch('/api/tools');
        if (!response.ok) throw new Error('Network response was not ok');
        const data: Tool[] = await response.json();
        setAllTools(data);
        setFilteredTools(data);
        const uniqueCategories = ["全部", ...new Set(data.map(tool => tool.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Failed to fetch tools:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTools();
  }, []);

  React.useEffect(() => {
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
    setFilteredTools(result);
  }, [searchQuery, activeCategory, allTools]);

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

        <div className="sticky top-20 z-20 my-12 rounded-xl border border-border/50 bg-background/80 p-4 backdrop-blur-md">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="搜索工具、描述或标签..."
                className="w-full pl-10"
                value={searchQuery}
                // ✅✅✅ FIX: 为事件参数 'e' 添加明确的类型 ✅✅✅
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

        {isLoading ? (
          <SkeletonLoader />
        ) : (
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
        )}
      </motion.div>
    </>
  );
}