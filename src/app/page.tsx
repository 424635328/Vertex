// src/app/page.tsx

"use client";

import Link from "next/link";
import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Palette, Zap, Cpu, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// --- 配置区域 (保持不变) ---
const YOUR_NAME = "Tony.";
const YOUR_ROLE = "开发者 / 创造者 / 设计师";
const corePhilosophies = [
  {
    icon: Code,
    title: "优雅的代码",
    description:
      "坚信代码不仅是机器的指令，更是思想的表达。追求简洁、高效、可维护的艺术品级代码。",
  },
  {
    icon: Palette,
    title: "用户中心设计",
    description:
      "从用户的视角出发，打造直观、愉悦的交互体验。功能与美学在此交汇，形成无缝的用户旅程。",
  },
  {
    icon: Zap,
    title: "极致的性能",
    description:
      "痴迷于速度与响应。通过精细的优化，确保每一个像素、每一次交互都如闪电般迅速。",
  },
];
const techArsenal = [
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    color: "shadow-gray-400/50",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    color: "shadow-cyan-400/50",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    color: "shadow-blue-500/50",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    color: "shadow-cyan-300/50",
  },
  {
    name: "Framer Motion",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framer/framer-original.svg",
    color: "shadow-pink-500/50",
  },
  {
    name: "Supabase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    color: "shadow-green-500/50",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    color: "shadow-blue-400/50",
  },
  {
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    color: "shadow-gray-400/50",
  },
];

// --- 动画变体 (保持不变) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// --- 子组件 ---

const GridBackground = () => (
  <div className="fixed inset-0 -z-10 bg-background/10 bg-[linear-gradient(to_right,theme(colors.border/0.4)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border/0.4)_1px,transparent_1px)] bg-[size:24px_24px]">
    <div className="absolute inset-0 -z-20 bg-background/10 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_60%,transparent_100%)]"></div>
  </div>
);

const HeroSection = () => {
  const motto = "击碎命运的诅咒".split("");
  return (
    <motion.section
      className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
        variants={itemVariants}
      >
        {YOUR_NAME}
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-muted-foreground md:text-xl"
        variants={itemVariants}
      >
        {YOUR_ROLE}
      </motion.p>
      <motion.h2
        className="mt-12 text-2xl font-semibold tracking-wider md:text-3xl"
        aria-label="击碎命运的诅咒"
      >
        {motto.map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={letterVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h2>
      <motion.div className="mt-20 animate-bounce" variants={itemVariants}>
        <div className="h-6 w-6 rotate-45 border-b-2 border-r-2 border-muted-foreground"></div>
      </motion.div>
    </motion.section>
  );
};

const PhilosophySection = () => (
  <motion.section
    className="py-24"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={containerVariants}
  >
    <motion.h3
      className="text-center text-3xl font-bold tracking-tight md:text-4xl"
      variants={itemVariants}
    >
      核心理念
    </motion.h3>
    <motion.div
      className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3"
      variants={itemVariants}
    >
      {corePhilosophies.map((philosophy) => (
        <motion.div
          key={philosophy.title}
          className="group relative overflow-hidden rounded-xl border border-border bg-card/50 p-6"
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
        >
          <div className="absolute -inset-px rounded-xl opacity-0 transition-all duration-300 group-hover:opacity-100 [background:radial-gradient(300px_circle_at_var(--x)_var(--y),hsl(var(--primary)/0.1),transparent)]"></div>
          <div className="relative z-10">
            <philosophy.icon className="h-8 w-8 text-primary" />
            <h4 className="mt-4 text-xl font-semibold text-foreground">
              {philosophy.title}
            </h4>
            <p className="mt-2 text-muted-foreground">
              {philosophy.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
);

const ArsenalSection = () => (
  <motion.section
    className="py-24"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={containerVariants}
  >
    <motion.h3
      className="text-center text-3xl font-bold tracking-tight md:text-4xl"
      variants={itemVariants}
    >
      技术兵器库
    </motion.h3>
    <TooltipProvider>
      <motion.div
        className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8"
        variants={itemVariants}
      >
        {techArsenal.map((tech) => (
          <Tooltip key={tech.name}>
            <TooltipTrigger asChild>
              {/* 1. 使用 <span> 作为 asChild 的安全子元素，并应用样式 */}
              <span
                className={cn(
                  "flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-card/80 p-3 transition-all duration-300 hover:bg-card",
                  `hover:shadow-lg ${tech.color}`
                )}
              >
                {/* 2. 将 motion.div 移到内部，只负责动画 */}
                <motion.div whileHover={{ scale: 1.15, y: -5 }}>
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-full w-full object-contain"
                  />
                </motion.div>
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>{tech.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </motion.div>
    </TooltipProvider>
  </motion.section>
);

const GatewaySection = () => (
  <motion.section
    className="py-24"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={containerVariants}
  >
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <GatewayCard
        href="/tools"
        title="进入工具中枢"
        description="探索、使用和管理我收集和创造的实用工具集合。"
        icon={Layers}
      />
      <GatewayCard
        href="https://github.com/424635328/Vertex" // 建议替换为你的真实 GitHub 用户名
        title="审视代码根源"
        description="深入我的 GitHub，查看项目源码，见证从零到一的构建过程。"
        icon={Cpu}
      />
    </div>
  </motion.section>
);

const GatewayCard = ({
  href,
  title,
  description,
  icon: Icon,
}: {
  href: string;
  title: string;
  description: string;
  icon: React.ElementType;
}) => {
  const isExternal = href.startsWith("http");
  
  const MotionWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      className="group relative block h-full overflow-hidden rounded-xl border border-border bg-card/50 p-8"
      whileHover="hover"
      initial="initial"
      variants={{ initial: { y: 0 }, hover: { y: -8 } }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );

  const cardContent = (
    <>
      <div className="relative z-10">
        <Icon className="mb-4 h-8 w-8 text-primary" />
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
        <div className="mt-6 flex items-center font-medium text-primary">
          立即前往
          <motion.span
            variants={{ initial: { x: 0 }, hover: { x: 5 } }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.span>
        </div>
      </div>
      <motion.div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(circle_at_50%_120%,hsl(var(--primary)/0.1),transparent)]"></motion.div>
    </>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        <MotionWrapper>{cardContent}</MotionWrapper>
      </a>
    );
  }
  return (
    <Link href={href} className="block h-full">
      <MotionWrapper>{cardContent}</MotionWrapper>
    </Link>
  );
};

// --- 主页面组件 ---
export default function HomePage() {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ref.current.style.setProperty("--x", `${x}px`);
      ref.current.style.setProperty("--y", `${y}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      <GridBackground />
      <main className="container mx-auto max-w-5xl px-4">
        <HeroSection />
        <PhilosophySection />
        <ArsenalSection />
        <GatewaySection />
      </main>
    </div>
  );
}