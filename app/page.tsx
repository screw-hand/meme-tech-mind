"use client"

import dynamic from "next/dynamic"

import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"

import pkg from "../package.json"

const MemeGenerator = dynamic(
  () => import("@/components/meme-generator").then((mod) => mod.MemeGenerator),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  }
)

export default function IndexPage() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background">
        {/* header start */}
        <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
          <div className="container relative py-1.5">
            <h1 className="text-center text-2xl font-bold">
              梗图生成器 v{pkg.version}
            </h1>
            <div className="absolute right-0 top-0">
              <ThemeToggle />
            </div>
          </div>
        </header>
        {/* header end */}
        <div className="container pt-[calc(var(--header-height)+var(--top-bar-height))]">
          <MemeGenerator />
        </div>
      </main>
      <Toaster position="top-center" richColors closeButton />
    </ThemeProvider>
  )
}
