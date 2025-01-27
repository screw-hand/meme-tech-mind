"use client"

import { useEffect, useState } from "react"
import { Icon } from "@iconify/react"

import ICON_LIST from "@/config/iconify-skill-icon-list"

const ICONIFY_TYPE_PREFIX = "skill-icons:"

export function MemeSearchIcon({
  searchKey,
  onIconClick,
}: {
  searchKey: string
  onIconClick: (icon: string) => void
}) {
  const [iconList, setIconList] = useState<string[]>([])
  const [isExpanded, setIsExpanded] = useState(false)

  const getIconifyIconName = (name: string) => {
    const result = ICON_LIST.filter((x) => x.includes(name)).map(
      (icon) => `${ICONIFY_TYPE_PREFIX}${icon}`
    )
    console.log("getIconifyIconName11", result)
    return result
  }

  const handleIconClick = (icon: string) => {
    onIconClick(icon)
  }

  useEffect(() => {
    setIconList(getIconifyIconName(searchKey))
    setIsExpanded(false)
  }, [searchKey])

  const displayedIcons = isExpanded ? iconList : iconList.slice(0, 8)

  return (
    <div className="flex flex-col gap-2">
      <p>
        目前只支持
        <a
          href="https://icon-sets.iconify.design/skill-icons/page-1.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          skill-icons
        </a>
        （
        <span className="inline-block rounded-md border bg-gray-200 px-1">
          skill-icons:
        </span>
        不用加）
      </p>
      <div className="flex flex-wrap gap-3">
        {displayedIcons.map((icon) => {
          return (
            <Icon
              key={icon}
              icon={icon}
              onClick={() => handleIconClick(icon)}
              className="size-20"
            />
          )
        })}
      </div>
      {iconList.length === 0 ? (
        <p className=" text-center text-red-500">搜不到，换个词吧。</p>
      ) : (
        iconList.length > 8 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-500 hover:underline"
          >
            {isExpanded
              ? "点击折叠"
              : `显示更多（共 ${iconList.length} 个结果）`}
          </button>
        )
      )}
    </div>
  )
}
