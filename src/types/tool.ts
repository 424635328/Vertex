export interface Tool {
  id: string;
  name: string;
  url: string;
  description: string;
  category: '开发工具' | '设计资源' | '效率提升' | '人工智能';
  tags: string[];
  icon?: string; 
}