// src/app/api/tools/route.ts

import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server'; // 假设你有一个服务端 Supabase client

export const dynamic = 'force-dynamic'; // 确保每次都是动态获取最新数据

// 定义工具的数据类型，方便前后端复用
export interface Tool {
  id: string;
  name: string;
  url: string;
  description: string;
  category: '开发工具' | '设计资源' | '效率提升' | '人工智能';
  tags: string[];
  icon?: string; // 可选的图标名称 (来自 lucide-react)
}

export async function GET() {
  const supabase = createClient();
  
  try {
    const { data, error } = await supabase
      .from('tools')
      .select('*')
      .order('name', { ascending: true });

    if (error) {
      console.error('Supabase fetch error:', error);
      throw new Error(error.message);
    }

    return NextResponse.json(data as Tool[]);

  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch tools", error: (error as Error).message },
      { status: 500 }
    );
  }
}