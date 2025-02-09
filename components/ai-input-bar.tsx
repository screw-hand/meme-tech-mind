import { Icon } from "@iconify/react"
import { useChat } from "ai/react"

import { MemeSettingsType } from "@/types/meme-settings"
import { Input } from "@/components/ui/input"

import { Button } from "./ui/button"

interface AiBarProps {
  name: Extract<
    keyof MemeSettingsType,
    "searchKey" | "source" | "target" | "specialEffect"
  >
  settings: MemeSettingsType
  onSettingsChange: (settings: MemeSettingsType) => void
}

export function AiBar({ name, settings, onSettingsChange }: AiBarProps) {
  return (
    <div className="flex w-full items-center space-x-2">
      <Input
        type="text"
        name={name}
        className="h-8 px-2 text-sm"
        value={settings[name]}
        onChange={(e) =>
          onSettingsChange({ ...settings, [name]: e.target.value })
        }
      />
      <Button variant="outline" className="h-8 px-2 py-0">
        <Icon icon="mdi:brain" className="size-5 text-blue-500" />
      </Button>
    </div>
  )
}
