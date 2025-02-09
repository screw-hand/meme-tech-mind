"use client"

import { useEffect, useState } from "react"

import { MemeSettingsType } from "@/types/meme-settings"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { AiBar } from "@/components/ai-input-bar"
import { MemeSearchIcon } from "@/components/meme-search-icon"
import { SettingBar } from "@/components/setting-bar"

interface MemeSettingsProps {
  settings: MemeSettingsType
  onSettingsChange: (newSettings: MemeSettingsType) => void
}

export function MemeSettings({
  settings,
  onSettingsChange,
}: MemeSettingsProps) {
  const [maxWidth, setMaxWidth] = useState(1400 - 32) // 默认值

  useEffect(() => {
    setMaxWidth(
      window.innerWidth > 1400
        ? 1400 - 32 // 1400px - 2rem
        : window.innerWidth - 32
    )
  }, [])

  const handleIconClick = (icon: string) => {
    onSettingsChange({ ...settings, source: icon })
  }
  return (
    <div className="meme-settings my-3 flex flex-col gap-3">
      {/* ai */}
      <section className="flex flex-col gap-3">
        <h3 className="text-center text-lg font-medium">AI</h3>
        <SettingBar label="服务">
          <Input
            type="text"
            name="baseURL"
            value={settings.ai.baseURL}
            onChange={(e) =>
              onSettingsChange({
                ...settings,
                ai: { ...settings.ai, baseURL: e.target.value },
              })
            }
            className="h-8 px-2 text-sm"
          />
        </SettingBar>
        <SettingBar
          label="密钥"
          other={<span>api key只存储在本地，服务器并不收集，请放心。</span>}
        >
          <Input
            type="password"
            name="api key"
            value={settings.ai.apiKey}
            onChange={(e) =>
              onSettingsChange({
                ...settings,
                ai: { ...settings.ai, apiKey: e.target.value },
              })
            }
            className="h-8 px-2 text-sm"
          />
        </SettingBar>
        <SettingBar label="模型">
          <Input
            type="text"
            name="model"
            value={settings.ai.model}
            onChange={(e) =>
              onSettingsChange({
                ...settings,
                ai: { ...settings.ai, model: e.target.value },
              })
            }
            className="h-8 px-2 text-sm"
          />
        </SettingBar>
      </section>
      {/* 基本信息 */}
      <section className="flex flex-col gap-3">
        <h3 className="text-center text-lg font-medium">基本信息</h3>
        <SettingBar
          label="搜索"
          other={
            <MemeSearchIcon
              searchKey={settings.searchKey}
              onIconClick={handleIconClick}
            />
          }
        >
          <Input
            type="text"
            name="searchKey"
            className="h-8 px-2 text-sm"
            value={settings.searchKey}
            onChange={(e) =>
              onSettingsChange({ ...settings, searchKey: e.target.value })
            }
          />
        </SettingBar>
        <SettingBar label="目标">
          <AiBar
            name="target"
            settings={settings}
            onSettingsChange={onSettingsChange}
          />
        </SettingBar>
      </section>
      {/* 图标和表情设置 */}
      <section className="flex flex-col gap-3">
        <h3 className="text-center text-lg font-medium">图标和表情</h3>
        <SettingBar label={<span>图标大小</span>}>
          <div className="flex items-center gap-2">
            <Slider
              value={[settings.icon.size]}
              min={0}
              max={300}
              step={1}
              onValueChange={(value) =>
                onSettingsChange({
                  ...settings,
                  icon: { ...settings.icon, size: value[0] },
                })
              }
            />
            <span className="flex-none">{settings.icon.size}</span>
          </div>
        </SettingBar>
        <SettingBar label={<span>表情大小</span>}>
          <div className="flex items-center gap-2">
            <Slider
              value={[settings.emoji.size]}
              max={300}
              step={1}
              onValueChange={(value) =>
                onSettingsChange({
                  ...settings,
                  emoji: { ...settings.emoji, size: value[0] },
                })
              }
            />
            <span className="flex-none">{settings.emoji.size}</span>
          </div>
        </SettingBar>
        <SettingBar label={<span>表情位置</span>}>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="flex-none">X</span>
              <Slider
                value={[settings.emoji.x]}
                min={-150}
                max={150}
                step={1}
                onValueChange={(value) =>
                  onSettingsChange({
                    ...settings,
                    emoji: { ...settings.emoji, x: value[0] },
                  })
                }
              />
              <span className="flex-none">{settings.emoji.x}</span>
              <span className="flex-none">Y</span>
              <Slider
                value={[settings.emoji.y]}
                min={-500}
                max={500}
                step={1}
                onValueChange={(value) =>
                  onSettingsChange({
                    ...settings,
                    emoji: { ...settings.emoji, y: value[0] },
                  })
                }
              />
              <span className="flex-none">{settings.emoji.y}</span>
            </div>
          </div>
        </SettingBar>
      </section>
      {/* 背景设置 */}
      <section className="flex flex-col gap-3">
        <h3 className="text-center text-lg font-medium">背景</h3>
        <SettingBar label={<span>背景</span>}>
          <div className="flex items-center gap-2">
            <span className="flex-none">宽</span>
            <Slider
              value={[settings.background.width]}
              max={maxWidth}
              step={1}
              onValueChange={(value) =>
                onSettingsChange({
                  ...settings,
                  background: {
                    ...settings.background,
                    width: value[0],
                  },
                })
              }
            />
            <span className="flex-none">{settings.background.width}</span>
            <span className="flex-none">高</span>
            <Slider
              value={[settings.background.height]}
              max={maxWidth}
              step={1}
              onValueChange={(value) =>
                onSettingsChange({
                  ...settings,
                  background: {
                    ...settings.background,
                    height: value[0],
                  },
                })
              }
            />
            <span className="flex-none">{settings.background.height}</span>
          </div>
        </SettingBar>
        <SettingBar label={<span>顶部距离</span>}>
          <div className="flex items-center gap-2">
            <Slider
              value={[settings.background.topPadding]}
              max={100}
              step={1}
              onValueChange={(value) =>
                onSettingsChange({
                  ...settings,
                  background: {
                    ...settings.background,
                    topPadding: value[0],
                  },
                })
              }
            />
            <span className="flex-none">{settings.background.topPadding}</span>
          </div>
        </SettingBar>
      </section>
      {/* 文字设置 */}
      <section className="flex flex-col gap-3">
        <h3 className="text-center text-lg font-medium">文字</h3>
        <SettingBar label={<span>文字宽度</span>}>
          <div className="flex items-center gap-2">
            <Slider
              value={[settings.text.width]}
              max={1000}
              step={1}
              onValueChange={(value) =>
                onSettingsChange({
                  ...settings,
                  text: { ...settings.text, width: value[0] },
                })
              }
            />
            <span className="flex-none">{settings.text.width}</span>
          </div>
        </SettingBar>
        <SettingBar label={<span>文字颜色</span>}>
          <Input
            type="color"
            name="color"
            className="h-8 w-full"
            value={settings.text.color}
            onChange={(e) =>
              onSettingsChange({
                ...settings,
                text: { ...settings.text, color: e.target.value },
              })
            }
          />
        </SettingBar>
        <SettingBar label={<span>文字大小</span>}>
          <div className="flex items-center gap-2">
            <Slider
              value={[settings.text.fontSize]}
              max={100}
              step={1}
              onValueChange={(value) =>
                onSettingsChange({
                  ...settings,
                  text: { ...settings.text, fontSize: value[0] },
                })
              }
            />
            <span className="flex-none">{settings.text.fontSize}</span>
          </div>
        </SettingBar>
        <SettingBar label={<span>图标与文字间距</span>}>
          <div className="flex items-center gap-2">
            <Slider
              value={[settings.text.marginTop]}
              min={-50}
              max={100}
              step={1}
              onValueChange={(value) =>
                onSettingsChange({
                  ...settings,
                  text: {
                    ...settings.text,
                    marginTop: value[0],
                  },
                })
              }
            />
            <span className="flex-none">{settings.text.marginTop}</span>
          </div>
        </SettingBar>
        <SettingBar
          label={<span>文字字体</span>}
          other={<span>在写了在写了！</span>}
        >
          <Input
            type="text"
            name="fontFamily"
            disabled
            className="h-8 px-2 text-sm"
            value={settings.text.fontFamily}
            onChange={(e) =>
              onSettingsChange({
                ...settings,
                text: { ...settings.text, fontFamily: e.target.value },
              })
            }
          />
        </SettingBar>
        <SettingBar
          label={<span>特殊效果</span>}
          other={<span>再等等再等等！</span>}
        >
          <Input
            type="text"
            disabled
            name="specialEffect"
            className="h-8 px-2 text-sm"
            value={settings.specialEffect}
            onChange={(e) =>
              onSettingsChange({
                ...settings,
                specialEffect: e.target.value,
              })
            }
          />
        </SettingBar>
      </section>
    </div>
  )
}
