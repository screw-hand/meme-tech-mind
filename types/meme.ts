export type Category = 'language' | 'framework' | 'tool' | 'ide' | 'ai';

export interface Tech {
  id: string;
  name: string;
  category: Category;
  logo: string;  // logo URL
  bgColor: string; // 默认背景色
  rivals: string[]; // 敌对技术的 id
  specialEffect?: {
    type: 'repeat' | 'other';
    times?: number;
  }; // 特殊效果，比如 React 的重复效果
}
