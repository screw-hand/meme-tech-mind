import { toast } from "sonner"

import { MemeSettingsType } from "@/types/meme-settings"

/**
 * 复制梗图到剪贴板
 * @param dom
 * @returns
 */
export const copyMemeToClipboard = async (dom: HTMLElement | null) => {
  if (!dom) {
    return
  }

  try {
    const stage = dom.querySelector("canvas")
    if (!stage) {
      throw new Error("找不到canvas元素")
    }

    const dataUrl = stage.toDataURL()
    const response = await fetch(dataUrl)
    const blob = await response.blob()

    await navigator.clipboard.write([
      new ClipboardItem({
        "image/png": blob,
      }),
    ])

    toast.success("复制成功")
  } catch (e) {
    console.error("复制失败", e)
    toast.error("复制失败", {
      description: e + "",
    })
  }
}

/**
 * 下载梗图
 * @param imageUrl
 * @param fileName
 */
export const downloadMeme = async (
  dom: HTMLElement | null,
  fileName: string = "meme.png"
) => {
  if (!dom) {
    return
  }

  try {
    const stage = dom.querySelector("canvas")
    if (!stage) {
      throw new Error("找不到canvas元素")
    }

    const dataUrl = stage.toDataURL()
    const response = await fetch(dataUrl)
    const blob = await response.blob()

    const file = new File([blob], fileName, { type: "image/png" })
    const url = URL.createObjectURL(file)
    const link = document.createElement("a")
    link.href = url
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  } catch (e) {
    console.error("下载失败", e)
    toast.error("下载失败", {
      description: e + "",
    })
  }
}

/**
 * 分享梗图
 * @param dom
 */
export const shareMeme = async (dom: HTMLElement | null) => {
  if (!dom) {
    return
  }

  try {
    const stage = dom.querySelector("canvas")
    if (!stage) {
      throw new Error("找不到canvas元素")
    }

    const dataUrl = stage.toDataURL()
    const response = await fetch(dataUrl)
    const blob = await response.blob()

    const file = new File([blob], "meme.png", { type: "image/png" })
    await navigator
      .share({
        files: [file],
        title: "分享图片",
      })
      .catch((e) => {
        if (e.message === "Share canceled") {
          return
        }
        throw e
      })
  } catch (e) {
    console.error("分享失败", e)
    toast.error("分享失败", {
      description: e + "",
    })
  }
}

/**
 * 复制梗图链接
 * @param imageUrl
 * @returns
 */
export const copyMemeLink = async (settings: MemeSettingsType) => {
  console.log(settings)
}
