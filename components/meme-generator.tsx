"use client"

import { useState } from "react"
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

  return (
    <div className="mx-4">
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
      {/* meme 设置 */}
      <div className="my-4">
        <MemeSettings
          settings={settings}
          onSettingsChange={handleSettingsChange}
        />
      </div>
    </div>
  )
}
