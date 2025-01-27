import { Icon } from "@iconify/react"
import clsx from "clsx"

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
          className="item-center relative mx-auto flex flex-initial flex-col overflow-hidden pb-[5px] text-center"
          style={{
            width: `${settings.background.size}px`,
            // height: `${settings.background.size}px`,
            backgroundColor: `${settings.background.color}`,
            borderRadius: `${settings.background.borderRadius}px`,
            padding: `${settings.background.paddingY}px ${settings.background.paddingX}px`,
            gap: `${settings.background.gap}px`,
          }}
        >
          <div className="mx-auto justify-self-center">
            <Icon
              icon={getIconifyIconName(settings.source)}
              // FIXME it not works.
              // className={`size-[${settings.icon.size}px]`}
              style={{
                fontSize: `${settings.icon.size}px`,
              }}
            />
          </div>
          <span
            className={clsx(
              "absolute"
              // FIXME it not works.
              // `text-[${settings.emoji.size}px]`,
              // `right-[${settings.emoji.x}px]`,
              // `top-[${settings.emoji.y}px]`
            )}
            style={{
              fontSize: `${settings.emoji.size}px`,
              right: `${settings.emoji.x}px`,
              top: `${settings.emoji.y}px`,
            }}
          >
            💧
          </span>
          <p
            style={{
              width: `${settings.text.width}`,
              color: `${settings.text.color}`,
              fontFamily: `${settings.text.fontFamily}`,
              fontSize: `${settings.text.fontSize}px`,
            }}
          >
            无语 跟你讲不下去 典型的{settings.target}思维
          </p>
        </div>
        {/* meme content */}
      </div>
      {/* meme border */}
    </div>
  )
}
