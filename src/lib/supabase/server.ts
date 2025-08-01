// src/lib/supabase/server.ts

import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

// 这个函数用于在服务器组件、API 路由或 Server Actions 中创建 Supabase 客户端
export const createClient = () => {
  const cookieStore = cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch (error) {
            // 当在只读上下文（如服务器组件）中调用 set 时，
            // 'cookies().set()' 会抛出错误。
            // 这是一个预期的行为，所以我们可以安全地忽略这个错误。
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch (error) {
            // 同样，在只读上下文中调用 remove 也会抛出错误，
            // 我们可以安全地忽略它。
          }
        },
      },
    }
  )
}