"use client";

import pkg from '../package.json'
import { SearchSelector } from '@/components/search-selector'
import { MemeGenerator } from '@/components/meme-generator';
import { ThemeProvider } from '@/components/theme-provider';
import { useState } from 'react';
import { Button } from '@/components/ui/button'


export default function IndexPage() {
  const [searchInput, setSearchInput] = useState('react')

  return (
    <ThemeProvider>
     <main className="min-h-screen bg-background">
      {/* header start */}
       <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
         <div className="container py-4">
           <h1 className="text-2xl font-bold text-center">
             梗图生成器 v{pkg.version}
           </h1>
         </div>
       </header>
      {/* header end */}
      <div className="container pt-20 pb-16">
        <div className="space-y-6">
          <MemeGenerator name={searchInput} />
          <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t p-4">
            <div className="container space-y-4">
              <SearchSelector value={searchInput} onChange={setSearchInput} />
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline">复制</Button>
                <Button>下载</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
    </ThemeProvider>
  );
}

// app/page.tsx
/**
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
       {/* 固定头部 //}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container py-4">
          <h1 className="text-2xl font-bold text-center">
            梗图生成器 <span className="text-sm ml-2">💦</span>
          </h1>
        </div>
      </header>

      {/* 主要内容区 //}
      <div className="container pt-20 pb-16"> {/* pt-20 为头部留出空间 //}
        <div className="space-y-6">
          {/* 预览区 - 卡片式设计 //}
          <div className="bg-card rounded-lg p-4 shadow-lg">
            <div className="aspect-square bg-muted rounded-md overflow-hidden">
              {/* 这里放你的画布 //}
            </div>
          </div>

          {/* 控制面板 - 底部固定或滚动 //}
          <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t p-4">
            <div className="container space-y-4">
              {/* 文本输入 //}
              <Input
                placeholder="输入文案..."
                className="text-center"
              />

              {/* 操作按钮组 //}
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline">复制</Button>
                <Button>下载</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
*/
