import { useState, useEffect } from 'react';

// 一个简单的自定义 Hook，用于实现值防抖
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // 在 delay 毫秒后更新 debounced value
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // 在 value 或 delay 改变时，清除上一个 timeout
    // 这可以防止在 delay 时间内 value 变化时，旧的 timeout 仍然执行
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}