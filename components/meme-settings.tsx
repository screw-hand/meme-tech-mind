import { MemeSettingsType } from "@/types/meme-settings"

interface MemeSettingsProps {
  settings: MemeSettingsType
  onSettingsChange: (newSettings: MemeSettingsType) => void
}

export function MemeSettings({
  settings,
  onSettingsChange,
}: MemeSettingsProps) {
  return <div>MemeSettings</div>
}
