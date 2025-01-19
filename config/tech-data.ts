import { Tech } from "@/types/meme";

export const techData: Record<string, Tech> = {
  typescript: {
    id: 'typescript',
    name: 'TypeScript',
    category: 'language',
    logo: '/logos/ts.svg',
    bgColor: '#007ACC',
    rivals: ['javascript']
  },
  react: {
    id: 'react',
    name: 'React',
    category: 'framework',
    logo: '/logos/react.svg',
    bgColor: '#61DAFB',
    rivals: ['vue'],
    specialEffect: {
      type: 'repeat',
      times: 2
    }
  },
  // ... 其他技术
};
