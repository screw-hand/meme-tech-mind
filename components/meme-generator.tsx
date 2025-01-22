"use client"

import { useState } from "react"
import {
  copyMemeLink,
  copyMemeToClipboard,
  downloadMeme,
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
      downloadMeme(memeContentDom)
    } else if (operator === MemeOperatorType.SHARE_LINK) {
      copyMemeLink(settings)
    }
  }

  return (
    <div>
      {/* meme 预览 */}
      <MemePreview settings={settings} />
      {/* meme 设置 */}
      {false && (
        <MemeSettings
          settings={settings}
          onSettingsChange={handleSettingsChange}
        />
      )}
      {/* meme 操作 */}
      <MemeOperations
        onGenerateMeme={(operator) => handleOperatorMeme(operator)}
      />
    </div>
  )
}
