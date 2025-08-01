// src/app/layout.tsx

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans"; // 推荐使用新的导入方式
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import AuroraBackground from "@/components/layout/AuroraBackground";

import { cn } from "@/lib/utils"; // 引入 cn 工具函数，用于合并 class
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// 更新 Metadata，使其与你的项目匹配
export const metadata: Metadata = {
  title: "Vertex",
  description: "击碎命运的诅咒",
  // 可以在这里添加更多元数据，如 favicon
  icons: {
    icon: "/favicon.ico", // 确保 public 文件夹下有这个文件
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 'suppressHydrationWarning' 是 next-themes 推荐添加的，避免主题切换时的警告
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          GeistSans.variable, // 将 Geist Sans 字体变量应用到 body
          GeistMono.variable  // 将 Geist Mono 字体变量应用到 body
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* 使用 Flexbox 来构建页眉-内容-页脚的粘性布局 */}
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="container mx-auto max-w-4xl flex-grow px-4 py-8 sm:py-12">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <AuroraBackground neonSignText="Fantasy" /> {/* 添加 AuroraBackground 组件 */}
      </body>
    </html>
  );
}