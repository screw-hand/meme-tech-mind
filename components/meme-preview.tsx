import { Icon } from "@iconify/react"

import { MemeSettingsType } from "@/types/meme-settings"
import ICON_LIST from "@/config/iconify-skill-icon-list"

interface MemePreviewProps {
  settings: MemeSettingsType
}

const ICONIFY_TYPE_PREFIX = "skill-icons:"

export function MemePreview({ settings }: MemePreviewProps) {
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

  return (
    <div className="meme-preview flex items-center justify-center">
      <div className="relative mx-auto text-center">
        <Icon
          icon={getIconifyIconName(settings.source)}
          className="mx-auto text-center text-9xl"
        />
        <span className="absolute right-1 top-[20px] text-5xl">💧</span>
        <p>
          无语,跟你讲不下去，
          <br /> 典型的{settings.target}思维
        </p>
      </div>
    </div>
  )
}
