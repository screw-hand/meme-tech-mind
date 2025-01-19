"use client";

import { SearchSelector } from '@/components/search-selector'
import { MemeGenerator } from '@/components/meme-generator';
import { ThemeProvider } from '@/components/theme-provider';
import { useState } from 'react';


export default function IndexPage() {
  const [searchInput, setSearchInput] = useState('react')

  return (
    <ThemeProvider>
      <main className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-center text-3xl font-bold">
          梗图生成器
        </h1>
        <h3 className="mb-8 text-center text-xl font-bold">
          无语💧 跟你讲不下去，典型的玩梗思维！！
        </h3>
        <div className="mb-5">
          <SearchSelector value={searchInput} onChange={setSearchInput} />
        </div>

        <MemeGenerator name={searchInput} />
      </main>
    </ThemeProvider>
  );
}
