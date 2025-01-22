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
      {/* meme border */}
      <div className="meme-border border-gray border-2 border-dashed">
        {/* meme content */}
        <div
          id="meme-content"
          className="item-center relative mx-auto flex flex-initial flex-col pb-[5px] text-center"
          style={{ width: "130px" }}
        >
          <div className="mx-auto justify-self-center">
            <Icon
              icon={getIconifyIconName(settings.source)}
              className="size-[130px]"
            />
          </div>
          <span className="absolute right-1 top-[10px] text-5xl">💧</span>
          <p>无语 跟你讲不下去 典型的{settings.target}思维</p>
        </div>
        {/* meme content */}
      </div>
      {/* meme border */}
    </div>
  )
}
