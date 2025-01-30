// 正确导入方式
import domtoimage from "dom-to-image-more"
import { toast } from "sonner"

import { MemeSettingsType } from "@/types/meme-settings"

// 检查库是否正常初始化
console.log("domtoimage方法集:", Object.keys(domtoimage))
// 应输出: ["toSvg", "toPng", "toJpeg", "toBlob", "toPixelData"]

/**
 * 预加载所有图片资源
 */
const preloadImages = async (dom: HTMLElement) => {
  const images = Array.from(dom.querySelectorAll("img"))
  await Promise.all(
    images.map((img) => {
      if (!img.complete) {
        return new Promise((resolve, reject) => {
          img.onload = resolve
          img.onerror = reject
        })
      }
      return Promise.resolve()
    })
  )
}

/**
 * 复制梗图到剪贴板
 * @param dom
 */
export const copyMemeToClipboard = async (dom: HTMLElement | null) => {
  if (!dom) {
    return
  }

  try {
    // 预加载所有图片资源
    await preloadImages(dom)

    console.log("domtoimage方法集:", Object.keys(domtoimage))

    // 使用dom-to-image生成Blob
    const blob = await domtoimage.toBlob(dom, {
      quality: 1, // 最高质量
      width: dom.offsetWidth, // 确保宽度一致
      height: dom.offsetHeight, // 确保高度一致
      style: { transform: "none" }, // 避免transform干扰
      filter: (node) => {
        // 过滤掉不需要渲染的节点
        if (node instanceof HTMLElement && node.style.display === "none") {
          return false
        }
        return true
      },
    })

    // 复制Blob到剪贴板
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
 * @param dom
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
    // 使用dom-to-image生成PNG
    const blob = await domtoimage.toBlob(dom, {
      quality: 1,
      width: dom.offsetWidth,
      height: dom.offsetHeight,
      style: { transform: "none" },
    })

    console.log(blob)

    if (blob) {
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    }
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
    // 使用dom-to-image生成Blob
    const blob = await domtoimage.toBlob(dom, {
      quality: 1,
      width: dom.offsetWidth,
      height: dom.offsetHeight,
      style: { transform: "none" },
    })

    if (blob) {
      const file = new File([blob], "meme.png", { type: "image/png" })
      await navigator.share({
        files: [file],
        title: "分享图片",
      })
    }
  } catch (e) {
    console.error("分享失败", e)
    toast.error("分享失败", {
      description: e + "",
    })
  }
}

/**
 * 复制梗图链接
 * @param settings
 */
export const copyMemeLink = async (settings: MemeSettingsType) => {
  console.log(settings)
}
