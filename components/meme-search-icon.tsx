"use client"

import { useCallback, useEffect, useState } from "react"
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

  const handleUploadIcon = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith("image/")) {
      alert("请上传图片文件")
      return
    }

    const imageUrl = URL.createObjectURL(file)
    onIconClick(imageUrl)

    e.target.value = ""
  }

  const handleClearUploadIcon = useCallback(() => {
    iconList.forEach((url) => {
      if (url.startsWith("blob:")) {
        URL.revokeObjectURL(url)
      }
    })
  }, [iconList])

  useEffect(() => {
    setIconList(getIconifyIconName(searchKey))
    setIsExpanded(false)
  }, [searchKey])

  useEffect(() => {
    return () => {
      handleClearUploadIcon()
    }
  }, [handleClearUploadIcon])

  const displayedIcons = isExpanded ? iconList : iconList.slice(0, 8)

  return (
    <div className="meme-search-icon flex flex-col gap-2">
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
      <div className="icon-list flex flex-wrap gap-3">
        <label className="flex w-full cursor-pointer flex-col items-center justify-center border p-2 hover:bg-gray-50">
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleUploadIcon}
          />
          <Icon icon="uil:image-upload" className="h-20 w-full" />
          <p>上传icon</p>
        </label>

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
