import { MemeSettingsType } from "@/types/meme-settings"
import { Input } from "@/components/ui/input"
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
  return (
    <div className="meme-settings my-3 flex flex-col gap-3">
      <SettingBar label={<span>主角</span>}>
        <Input
          type="text"
          name="source"
          className="h-8 px-2 text-sm"
          value={settings.source}
          onChange={(e) =>
            onSettingsChange({ ...settings, source: e.target.value })
          }
        />
      </SettingBar>
      <SettingBar label={<span>目标</span>}>
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
      <SettingBar label={<span>图标大小</span>}>
        <div className="flex items-center gap-2">
          <Slider
            value={[settings.icon.size]}
            max={100}
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
            max={500}
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
              max={500}
              step={1}
              onValueChange={(value) =>
                onSettingsChange({
                  ...settings,
                  emoji: { ...settings.emoji, x: value[0] },
                })
              }
            />
            <span className="flex-none">{settings.emoji.x}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex-none">Y:</span>
            <Slider
              value={[settings.emoji.y]}
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
      <SettingBar label={<span>背景大小</span>}>
        <div className="flex items-center gap-2">
          <Slider
            value={[settings.background.size]}
            max={1000}
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
          name="color"
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
            max={50}
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
          <span className="flex-none">{settings.background.borderRadius}</span>
        </div>
      </SettingBar>
      <SettingBar label={<span>背景水平内边距</span>}>
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
          </div>
          <div className="flex items-center gap-2">
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
      <SettingBar label={<span>背景与文字间距</span>}>
        <div className="flex items-center gap-2">
          <Slider
            value={[settings.background.gap]}
            max={100}
            step={1}
            onValueChange={(value) =>
              onSettingsChange({
                ...settings,
                background: {
                  ...settings.background,
                  gap: value[0],
                },
              })
            }
          />
          <span className="flex-none">{settings.background.gap}</span>
        </div>
      </SettingBar>
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
    </div>
  )
}
