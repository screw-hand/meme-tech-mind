"use client"

import { useEffect, useState } from "react"
import {
  copyMemeLink,
  copyMemeToClipboard,
  downloadMeme,
  shareMeme,
} from "@/utils/meme-operations"

import { MemeOperatorType } from "@/types/meme-operator"
import { MemeSettingsType } from "@/types/meme-settings"
import { DefaultMeMeSettings } from "@/config/default-meme-settings"
import { MemeOperations } from "@/components/meme-operations"
import { MemePreview } from "@/components/meme-preview"
import { MemeSettings } from "@/components/meme-settings"

export function MemeGenerator() {
  const [settings, setSettings] = useState<MemeSettingsType>({
    ...DefaultMeMeSettings,
  })

  const handleSettingsChange = (newSettings: MemeSettingsType) => {
    setSettings(newSettings)
    console.log("newSettings", newSettings)
  }

  const handleOperatorMeme = (operator: MemeOperatorType) => {
    console.log("operator", operator)
    console.log("Generating meme with settings:", settings)

    const memeContentDom = document.querySelector(
      "#meme-content"
    ) as HTMLElement

    if (operator === MemeOperatorType.COPY) {
      copyMemeToClipboard(memeContentDom)
    } else if (operator === MemeOperatorType.DOWNLOAD) {
      downloadMeme(
        memeContentDom,
        `meme-${settings.source}-${settings.target}.png`
      )
    } else if (operator === MemeOperatorType.SHARE) {
      shareMeme(memeContentDom)
    } else if (operator === MemeOperatorType.SHARE_LINK) {
      copyMemeLink(settings)
    }
  }

  useEffect(() => {
    if (settings.ai.baseURL !== undefined) {
      window.localStorage.setItem("baseURL", settings.ai.baseURL)
    }
    if (settings.ai.apiKey !== undefined) {
      window.localStorage.setItem("apiKey", settings.ai.apiKey)
    }
    if (settings.ai.model !== undefined) {
      window.localStorage.setItem("model", settings.ai.model)
    }
  }, [settings])

  return (
    <div className="flex h-[calc(100vh-var(--header-height)-var(--top-bar-height))] flex-col">
      {/* 固定在上半部分的内容 */}
      <div className="flex-none px-4">
        {/* meme 预览 */}
        <div className="my-4">
          <MemePreview settings={settings} />
        </div>
        {/* meme 操作 */}
        <div className="my-4">
          <MemeOperations
            onGenerateMeme={(operator) => handleOperatorMeme(operator)}
          />
        </div>
      </div>

      {/* 可滚动的设置部分 */}
      <div className="flex-1 overflow-y-auto px-4">
        {/* meme 设置 */}
        <div className="my-4">
          <MemeSettings
            settings={settings}
            onSettingsChange={handleSettingsChange}
          />
        </div>
      </div>
    </div>
  )
}
