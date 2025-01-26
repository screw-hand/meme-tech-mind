import { MemeSettingsType } from "@/types/meme-settings"
import { Input } from "@/components/ui/input"
import { SettingBar } from "@/components/setting-bar"

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
        <Input
          type="number"
          name="size"
          className="h-8 px-2 text-sm"
          value={settings.icon.size}
          onChange={(e) =>
            onSettingsChange({
              ...settings,
              icon: { ...settings.icon, size: Number(e.target.value) },
            })
          }
        />
      </SettingBar>
      <SettingBar label={<span>表情大小</span>}>
        <Input
          type="number"
          name="size"
          className="h-8 px-2 text-sm"
          value={settings.emoji.size}
          onChange={(e) =>
            onSettingsChange({
              ...settings,
              emoji: { ...settings.emoji, size: Number(e.target.value) },
            })
          }
        />
      </SettingBar>
      <SettingBar label={<span>表情位置</span>}>
        <div className="flex flex-row gap-2">
          <Input
            type="number"
            name="size"
            className="h-8 px-2 text-sm"
            value={settings.emoji.x}
            onChange={(e) =>
              onSettingsChange({
                ...settings,
                emoji: { ...settings.emoji, x: Number(e.target.value) },
              })
            }
          />
          <Input
            type="number"
            name="y"
            className="h-8 px-2 text-sm"
            value={settings.emoji.y}
            onChange={(e) =>
              onSettingsChange({
                ...settings,
                emoji: { ...settings.emoji, y: Number(e.target.value) },
              })
            }
          />
        </div>
      </SettingBar>
      <SettingBar label={<span>背景大小</span>}>
        <Input
          type="number"
          name="size"
          className="h-8 px-2 text-sm"
          value={settings.background.size}
          onChange={(e) =>
            onSettingsChange({
              ...settings,
              background: {
                ...settings.background,
                size: Number(e.target.value),
              },
            })
          }
        />
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
        <Input
          type="number"
          name="borderRadius"
          className="h-8 px-2 text-sm"
          value={settings.background.borderRadius}
          onChange={(e) =>
            onSettingsChange({
              ...settings,
              background: {
                ...settings.background,
                borderRadius: Number(e.target.value),
              },
            })
          }
        />
      </SettingBar>
      <SettingBar label={<span>背景水平内边距</span>}>
        <div className="flex flex-row gap-2">
          <Input
            type="number"
            name="paddingX"
            className="h-8 px-2 text-sm"
            value={settings.background.paddingX}
            onChange={(e) =>
              onSettingsChange({
                ...settings,
                background: {
                  ...settings.background,
                  paddingX: Number(e.target.value),
                },
              })
            }
          />
          <Input
            type="number"
            name="paddingY"
            className="h-8 px-2 text-sm"
            value={settings.background.paddingY}
            onChange={(e) =>
              onSettingsChange({
                ...settings,
                background: {
                  ...settings.background,
                  paddingY: Number(e.target.value),
                },
              })
            }
          />
        </div>
      </SettingBar>
      <SettingBar label={<span>背景与文字间距</span>}>
        <Input
          type="number"
          name="gap"
          className="h-8 px-2 text-sm"
          value={settings.background.gap}
          onChange={(e) =>
            onSettingsChange({
              ...settings,
              background: {
                ...settings.background,
                gap: Number(e.target.value),
              },
            })
          }
        />
      </SettingBar>
      <SettingBar label={<span>文本宽度</span>}>
        <Input
          type="number"
          name="width"
          className="h-8 px-2 text-sm"
          value={settings.text.width}
          onChange={(e) =>
            onSettingsChange({
              ...settings,
              text: { ...settings.text, width: Number(e.target.value) },
            })
          }
        />
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
        <Input
          type="number"
          name="fontSize"
          className="h-8 px-2 text-sm"
          value={settings.text.fontSize}
          onChange={(e) =>
            onSettingsChange({
              ...settings,
              text: { ...settings.text, fontSize: Number(e.target.value) },
            })
          }
        />
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
