"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { MemeGenerator } from "@/components/meme-generator"
import { SearchSelector } from "@/components/search-selector"
import { ThemeProvider } from "@/components/theme-provider"

import pkg from "../package.json"

export default function IndexPage() {
  const [searchInput, setSearchInput] = useState("react")

  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background">
        {/* header start */}
        <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
          <div className="container py-4">
            <h1 className="text-center text-2xl font-bold">
              梗图生成器 v{pkg.version}
            </h1>
          </div>
        </header>
        {/* header end */}
        <div className="container pb-16 pt-20">
          <div className="space-y-6">
            <MemeGenerator name={searchInput} />
            <div className="fixed inset-x-0 bottom-0 border-t bg-background/80 p-4 backdrop-blur-sm">
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
  )
}
