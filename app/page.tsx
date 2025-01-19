"use client";

import { MemeGenerator } from '@/components/meme-generator';
import { ThemeProvider } from '@/components/theme-provider';

export default function IndexPage() {
  return (
    <ThemeProvider>
      <main className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-center text-3xl font-bold">
          梗图生成器
        </h1>
        <h3 className="mb-8 text-center text-xl font-bold">
          无语💧 跟你讲不下去，典型的玩梗思维！！
        </h3>
        <MemeGenerator />
      </main>
    </ThemeProvider>
  );
}
