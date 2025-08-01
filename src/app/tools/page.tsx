// src/app/tools/page.tsx

"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Balancer from "react-wrap-balancer"; // 引入 Balancer
import Tilt from "react-parallax-tilt"; // 引入 Tilt
import { 
  Search, Code, Palette, Zap, Cpu, Sparkles, FilterX, 
  Tv, Gamepad2, BookOpen, MessageSquare, ArrowUpRight
} from "lucide-react";
import type { Tool, ToolCategory } from "@/types/tool"; 
import { localToolsData } from "@/config/tools";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// 扩展卡片图标和颜色映射
const categoryDetails: { 
  [key in ToolCategory]: { icon: React.ElementType; color: string; } 
} = {
  '开发工具': { icon: Code, color: 'hsl(210, 100%, 60%)' }, // Blue
  '设计资源': { icon: Palette, color: 'hsl(270, 100%, 65%)' }, // Purple
  '效率提升': { icon: Zap, color: 'hsl(45, 100%, 50%)' }, // Yellow
  '人工智能': { icon: Sparkles, color: 'hsl(310, 100%, 60%)' }, // Magenta
  '生活娱乐': { icon: Tv, color: 'hsl(10, 100%, 60%)' }, // Red
  '游戏相关': { icon: Gamepad2, color: 'hsl(145, 100%, 45%)' }, // Green
  '学习办公': { icon: BookOpen, color: 'hsl(30, 100%, 55%)' }, // Orange
  '社交媒体': { icon: MessageSquare, color: 'hsl(190, 100%, 50%)' }, // Cyan
};

// 全新工具卡片组件 (视觉和交互升级)
const ToolCard = ({ tool }: { tool: Tool }) => {
  const details = categoryDetails[tool.category] || { icon: Cpu, color: 'hsl(var(--primary))' };
  const Icon = details.icon;

  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      glareEnable={true}
      glareMaxOpacity={0.15}
      glarePosition="all"
      className="h-full w-full"
    >
      <motion.a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{ '--glow-color': details.color } as React.CSSProperties}
        className="group relative flex h-full transform-gpu flex-col overflow-hidden rounded-2xl border border-border bg-card/80 p-6 transition-all duration-300 will-change-transform hover:border-transparent hover:!shadow-2xl hover:!shadow-[--glow-color]/20"
      >
        {/* 发光边框 */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
             style={{
                background: `radial-gradient(400px circle at var(--x) var(--y), var(--glow-color), transparent 40%)`
             }}/>

        <div className="relative z-10 flex h-full flex-col">
           {/* 卡片头部 */}
          <div 
             className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
             style={{
                background: `radial-gradient(circle at 50% 0%, ${details.color} 0%, transparent 70%)`
             }}
          >
             <Icon className="h-7 w-7 text-white/90" />
          </div>
          
          {/* 内容区域 */}
          <div className="flex flex-grow flex-col">
            <h3 className="text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-[--glow-color]">{tool.name}</h3>
            <p className="mt-2 flex-grow text-sm text-muted-foreground">
              <Balancer>{tool.description}</Balancer>
            </p>
          </div>
          
          {/* 底部标签和箭头 */}
          <div className="mt-4">
             <div className="flex flex-wrap gap-2">
               {tool.tags.slice(0, 3).map((tag) => ( // 最多显示3个标签
                 <Badge key={tag} variant="secondary" className="pointer-events-none">
                   {tag}
                 </Badge>
               ))}
             </div>
             <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-muted-foreground/50 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:!text-[--glow-color]" />
          </div>
        </div>
      </motion.a>
    </Tilt>
  );
};


// 主页面组件 (保持大部分逻辑不变，仅微调样式)
export default function ToolsPage() {
  const allTools: Tool[] = localToolsData;
  const categories: ToolCategory[] = ["开发工具", "设计资源", "效率提升", "人工智能", "游戏相关", "学习办公", "社交媒体", "生活娱乐"];
  
  const [activeCategory, setActiveCategory] = React.useState<ToolCategory | "全部">("全部");
  const [searchQuery, setSearchQuery] = React.useState("");
  
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
  }, [cardContainerRef, filteredTools]); // 依赖 filteredTools 以重新绑定事件

  return (
    <>
      <div className="fixed inset-0 -z-10 bg-background/10 bg-[linear-gradient(to_right,theme(colors.border/0.4)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border/0.4)_1px,transparent_1px)] bg-[size:32px_32px]">
        <div className="absolute inset-0 -z-20 bg-background/25 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_20%,transparent_100%)]"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="container mx-auto max-w-7xl px-4 py-16 sm:py-24"
      >
        <div className="text-center">
          <Sparkles className="mx-auto h-12 w-12 text-primary drop-shadow-[0_0_10px_hsl(var(--primary))]" />
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <Balancer>工具中枢</Balancer>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
             <Balancer>一个精心策划的集合，汇集了我在开发、设计和提升效率过程中依赖的工具与资源。</Balancer>
          </p>
        </div>

        <div className="sticky top-20 z-20 my-12 rounded-2xl border border-border/50 bg-background/50 p-4 backdrop-blur-xl">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="搜索工具、描述或标签..."
                className="w-full rounded-lg bg-card/50 pl-10"
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-nowrap items-center justify-start gap-2 overflow-x-auto pb-2 sm:justify-center sm:overflow-x-visible">
              <Button
                  key="全部"
                  variant={activeCategory === "全部" ? 'secondary' : 'ghost'}
                  onClick={() => setActiveCategory("全部")}
                  className="relative flex-shrink-0 rounded-lg"
              >
                  全部
                  {activeCategory === "全部" && (
                    <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-primary" layoutId="active-category-underline" />
                  )}
              </Button>
              {categories.map(category => (
                <Button
                  key={category}
                  variant={activeCategory === category ? 'secondary' : 'ghost'}
                  onClick={() => setActiveCategory(category)}
                  className="relative flex-shrink-0 rounded-lg"
                >
                  {category}
                  {activeCategory === category && (
                    <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-primary" layoutId="active-category-underline" />
                  )}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          ref={cardContainerRef}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
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