"use client"

import { MemeSettingsType } from "@/types/meme-settings"
import { Input } from "@/components/ui/input"
import { MemeSearchIcon } from "@/components/meme-search-icon"
import { SettingBar } from "@/components/setting-bar"

import { Slider } from "./ui/slider"

interface MemeSettingsProps {
  settings: MemeSettingsType
  onSettingsChange: (newSettings: MemeSettingsType) => void
}

export function MemeSettings({
  settings,
  onSettingsChange,
}: MemeSettingsProps) {
  const handleIconClick = (icon: string) => {
    onSettingsChange({ ...settings, source: icon })
  }
  return (
    <div className="meme-settings my-3 flex flex-col gap-3">
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
          <Input
            type="text"
            name="target"
            className="h-8 px-2 text-sm"
            value={settings.target}
            onChange={(e) =>
              onSettingsChange({ ...settings, target: e.target.value })
            }
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
              <span className="flex-none">X:</span>
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
              <span className="flex-none">Y:</span>
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
        <SettingBar label={<span>背景大小</span>}>
          <div className="flex items-center gap-2">
            <Slider
              value={[settings.background.size]}
              max={
                window.innerWidth > 1400
                  ? 1400 - 16 * 2
                  : window.innerWidth - 16 * 2
              }
              step={1}
              onValueChange={(value) =>
                onSettingsChange({
                  ...settings,
                  background: {
                    ...settings.background,
                    size: value[0],
                  },
                })
              }
            />
            <span className="flex-none">{settings.background.size}</span>
          </div>
        </SettingBar>
        <SettingBar label={<span>背景颜色</span>}>
          <Input
            type="color"
            name="bg-color"
            className="h-8 w-full"
            value={settings.background.color}
            onChange={(e) =>
              onSettingsChange({
                ...settings,
                background: { ...settings.background, color: e.target.value },
              })
            }
          />
        </SettingBar>
        <SettingBar label={<span>背景圆角</span>}>
          <div className="flex items-center gap-2">
            <Slider
              value={[settings.background.borderRadius]}
              max={250}
              step={1}
              onValueChange={(value) =>
                onSettingsChange({
                  ...settings,
                  background: {
                    ...settings.background,
                    borderRadius: value[0],
                  },
                })
              }
            />
            <span className="flex-none">
              {settings.background.borderRadius}
            </span>
          </div>
        </SettingBar>
        <SettingBar label={<span>背景内边距</span>}>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="w-8 flex-none">X:</span>
              <Slider
                value={[settings.background.paddingX]}
                max={100}
                step={1}
                onValueChange={(value) =>
                  onSettingsChange({
                    ...settings,
                    background: {
                      ...settings.background,
                      paddingX: value[0],
                    },
                  })
                }
              />
              <span className="flex-none">{settings.background.paddingX}</span>
              <span className="w-8 flex-none">Y:</span>
              <Slider
                value={[settings.background.paddingY]}
                max={100}
                step={1}
                onValueChange={(value) =>
                  onSettingsChange({
                    ...settings,
                    background: {
                      ...settings.background,
                      paddingY: value[0],
                    },
                  })
                }
              />
              <span className="flex-none">{settings.background.paddingY}</span>
            </div>
          </div>
        </SettingBar>
      </section>
      {/* 文字设置 */}
      <section className="flex flex-col gap-3">
        <h3 className="text-center text-lg font-medium">文字</h3>
        <SettingBar label={<span>文本宽度</span>}>
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
