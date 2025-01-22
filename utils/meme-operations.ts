import html2canvas from "html2canvas"

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
    const canvas = await html2canvas(dom)
    const blob = await new Promise<Blob | null>((resolve) => {
      canvas.toBlob(resolve, "image/png")
    })
    if (blob) {
      await navigator.clipboard.write([
        new ClipboardItem({
          "image/png": blob,
        }),
      ])
    }
  } catch (e) {
    console.error("复制失败", e)
  }
}

/**
 * 下载梗图
 * @param imageUrl
 * @param fileName
 */
export const downloadMeme = (
  dom: HTMLElement | null,
  fileName: string = "meme.png"
) => {
  if (!dom) {
    return
  }
  const link = document.createElement("a")
  link.href = dom.innerText
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

/**
 * 复制梗图链接
 * @param imageUrl
 * @returns
 */
export const copyMemeLink = async (settings: MemeSettingsType) => {
  console.log(settings)
}
