// src/components/layout/header.tsx

'use client';

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { mainNavLinks, iconLinks } from "@/config/navigation";

// NavItem 和 ThemeToggle 组件保持不变
const NavItem = ({ href, label, onClick }: { href: string; label:string; onClick?: () => void }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link
            href={href}
            onClick={onClick}
            className={cn(
                "relative flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-accent hover:text-accent-foreground",
                isActive ? "text-primary bg-accent" : "text-muted-foreground"
            )}
            aria-current={isActive ? "page" : undefined}
        >
            {label}
            {isActive && (
                <motion.div
                    layoutId="active-nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-primary"
                />
            )}
        </Link>
    );
};

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div whileHover={{ scale: 1.1, rotate: 10 }} whileTap={{ scale: 0.9, rotate: -10 }}>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="切换主题"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent>
        <p>切换主题</p>
      </TooltipContent>
    </Tooltip>
  );
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isScrolled, isScrollingUp } = useScrollDirection(20);
  const headerRef = React.useRef<HTMLElement>(null);
  const menuTriggerRef = React.useRef<HTMLButtonElement>(null);

  useOnClickOutside(headerRef, () => setIsMenuOpen(false));

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  React.useEffect(() => {
    if (!isMenuOpen) {
      // Small delay to prevent focus trap race condition
      setTimeout(() => menuTriggerRef.current?.focus(), 0);
    }
  }, [isMenuOpen]);
  
  // Note: I also fixed your NavItem to remove legacyBehavior as it was inconsistent.
  // The new NavItem is cleaner and follows modern Next.js patterns.

  return (
    <TooltipProvider delayDuration={100}>
      <motion.header
        ref={headerRef}
        animate={{ y: isScrolled && !isScrollingUp ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="sticky top-4 z-50 mx-auto max-w-4xl"
      >
        <div className="relative rounded-full border border-border/40 bg-background/80 p-2 shadow-lg backdrop-blur-sm after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:content-[''] after:[box-shadow:0_0_120px_5px_hsl(var(--primary))_inset] after:[animation:glow_5s_ease-in-out_infinite]">
          <div className="flex items-center justify-between px-4">
            
            {/* --- ✅ FIX: Modern Next.js <Link> usage --- */}
            <Link
              href="/"
              className="group relative text-lg font-bold"
              aria-label="返回主页"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                VRTX
              </motion.div>
            </Link>

            <nav className="hidden items-center gap-1 rounded-full bg-background/50 p-1 md:flex">
              {mainNavLinks.map((link) => (
                <NavItem key={link.href} href={link.href} label={link.label} />
              ))}
            </nav>

            <div className="flex items-center gap-1">
              {iconLinks.map((link) => (
                <Tooltip key={link.href}>
                  <TooltipTrigger asChild>
                    <motion.a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <link.icon className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
                    </motion.a>
                  </TooltipTrigger>
                  <TooltipContent><p>{link.label}</p></TooltipContent>
                </Tooltip>
              ))}
              
              <ThemeToggle />
              
              <div className="md:hidden">
                <Button ref={menuTriggerRef} variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-expanded={isMenuOpen} aria-controls="mobile-menu" aria-label={isMenuOpen ? "关闭菜单" : "打开菜单"}>
                  <AnimatePresence initial={false} mode="wait">
                    <motion.div key={isMenuOpen ? 'close' : 'open'} initial={{ rotate: -90, opacity: 0, scale: 0.5 }} animate={{ rotate: 0, opacity: 1, scale: 1 }} exit={{ rotate: 90, opacity: 0, scale: 0.5 }} transition={{ duration: 0.2 }}>
                      {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </motion.div>
                  </AnimatePresence>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1, transition: { staggerChildren: 0.05, ease: "easeOut" } }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute left-0 right-0 top-full mt-2 md:hidden"
            >
              <div className="mx-4 rounded-lg border border-border/40 bg-background/95 p-4 shadow-lg backdrop-blur-sm">
                <nav className="flex flex-col space-y-2">
                  {mainNavLinks.map((link) => (
                    <motion.div key={link.href} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                      <NavItem href={link.href} label={link.label} onClick={() => setIsMenuOpen(false)} />
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <style jsx global>{`@keyframes glow { 0% { box-shadow: 0 0 20px 0px hsl(var(--primary)/0.2) inset; } 50% { box-shadow: 0 0 40px 5px hsl(var(--primary)/0.4) inset; } 100% { box-shadow: 0 0 20px 0px hsl(var(--primary)/0.2) inset; }}`}</style>
      </motion.header>
    </TooltipProvider>
  );
}