"use client"

import { MemeGenerator } from "@/components/meme-generator"
import { ThemeProvider } from "@/components/theme-provider"

import pkg from "../package.json"

export default function IndexPage() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background">
        {/* header start */}
        <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
          <div className="container py-1.5">
            <h1 className="text-center text-2xl font-bold">
              梗图生成器 v{pkg.version}
            </h1>
          </div>
        </header>
        {/* header end */}
        <div className="container pb-16 pt-20">
          <div className="space-y-6">
            <MemeGenerator />
          </div>
        </div>
      </main>
    </ThemeProvider>
  )
}
