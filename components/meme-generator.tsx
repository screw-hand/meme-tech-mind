"use client"

import { useState } from "react"
import { Icon } from "@iconify/react"
import html2canvas from "html2canvas"

import ICON_LIST from "@/config/iconify-skill-icon-list"
import { Button } from "@/components/ui/button"
import { SearchSelector } from "@/components/search-selector"

const ICONIFY_TYPE_PREFIX = "skill-icons:"

const attackTarget = "玩梗"

export function MemeGenerator({ name = "react" }: { name?: string }) {
  const [searchInput, setSearchInput] = useState("react")

  const getIconifyIconName = (name: string) => {
    let iconName = name
    let result = `${ICONIFY_TYPE_PREFIX}${iconName}`
    const filterIconifyList = ICON_LIST.filter((x) => x.includes(name))
    if (filterIconifyList?.length > 0) {
      iconName = filterIconifyList[0]
    }
    result = `${ICONIFY_TYPE_PREFIX}${iconName}`
    console.log("getIconifyIconName", result)
    return result
  }

  const handleGenerateMeme = async () => {
    const memeEl = document.getElementById("meme")
    if (!memeEl) return

    // const originalBorder = memeEl.style.border;
    // memeEl.style.border = 'none';

    try {
      const canvas = await html2canvas(memeEl, {
        backgroundColor: null,
        scale: 2,
      })

      // 创建下载链接
      const link = document.createElement("a")
      link.download = `tech-meme-${name}.png`
      link.href = canvas.toDataURL("image/png")
      link.click()
    } finally {
      // 恢复边框
      // memeEl.style.border = originalBorder;
    }
  }

  return (
    <div className="space-y-6 text-center">
      {/* meme start */}
      <div id="meme" className="relative inline-block border-2 p-5">
        <Icon
          icon={getIconifyIconName(name)}
          className="mx-auto text-center text-9xl"
        />
        {/* TODO position need to let user custom config */}
        <span className="absolute right-1 top-[20px] text-5xl">💧</span>
        <p>
          无语,跟你讲不下去，
          <br /> 典型的{attackTarget}思维
        </p>
        {/* meme end */}
      </div>
      {/* control */}
      <div>
        <Button onClick={handleGenerateMeme}>保存梗图</Button>
      </div>

      <SearchSelector value={searchInput} onChange={setSearchInput} />
      <div className="fixed inset-x-0 bottom-0 border-t bg-background/80 p-4 backdrop-blur-sm">
        <div className="container space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <Button variant="outline">
              <Icon icon="uil:copy" />
              复制
            </Button>
            <Button>
              <Icon icon="uil:download-alt" />
              下载
            </Button>
            <Button>
              <Icon icon="uil:link" />
              下载
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
