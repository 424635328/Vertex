export type ToolCategory = 
  | '开发工具' 
  | '设计资源' 
  | '效率提升' 
  | '人工智能'
  | '生活娱乐'
  | '游戏相关'
  | '学习办公'
  | '社交媒体';

export interface Tool {
  id: string;
  name: string;
  url: string;
  description: string;
  category: ToolCategory;
  tags: string[];
  icon?: string; 
}