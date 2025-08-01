// src/hooks/use-scroll-direction.ts

import { useState, useEffect, useRef } from 'react';

export function useScrollDirection(threshold: number = 10) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 判断是否滚动超过阈值
      if (currentScrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 判断滚动方向
      if (currentScrollY > lastScrollY.current) {
        setIsScrollingUp(false); // 向下滚动
      } else {
        setIsScrollingUp(true); // 向上滚动
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return { isScrolled, isScrollingUp };
}