/**
 * 复制图片到剪贴板
 * @param imageUrl
 * @returns
 */
export const copyMemeToClipboard = async (imageUrl: string) => {
  try {
    const response = await fetch(imageUrl)
    const blob = await response.blob()
    await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })])
    return true
  } catch (error) {
    console.error("复制图片失败:", error)
    return false
  }
}

/**
 * 下载梗图
 * @param imageUrl
 * @param fileName
 */
export const downloadMeme = (
  imageUrl: string,
  fileName: string = "meme.png"
) => {
  const link = document.createElement("a")
  link.href = imageUrl
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
export const copyMemeLink = async (imageUrl: string) => {
  try {
    await navigator.clipboard.writeText(imageUrl)
    return true
  } catch (error) {
    console.error("复制链接失败:", error)
    return false
  }
}
