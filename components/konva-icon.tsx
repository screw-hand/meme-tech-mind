import { useEffect, useState } from "react"
import { Icon } from "@iconify/react"
import { Image as KonvaImage } from "react-konva"
import useImage from "use-image"

interface KonvaIconProps {
  icon: string
  size: number
  x: number
  y: number
}

export function KonvaIcon({ icon, size, x, y }: KonvaIconProps) {
  const [imageUrl, setImageUrl] = useState<string>("")
  const [image] = useImage(imageUrl)

  useEffect(() => {
    if (icon.startsWith("blob:")) {
      setImageUrl(icon)
      return
    }

    // 如果是 Iconify 图标，将其转换为 SVG，然后转为 data URL
    const iconSize = size * 2 // 使用2倍大小以确保清晰度

    // 渲染图标到 div
    const iconComponent = (
      <Icon icon={icon} width={iconSize} height={iconSize} />
    )

    // 使用 React 渲染到 div
    const root = document.createElement("div")
    root.style.position = "absolute"
    root.style.pointerEvents = "none"
    root.style.opacity = "0"
    document.body.appendChild(root)

    // @ts-ignore - 忽略 createRoot 类型错误
    const reactRoot = require("react-dom/client").createRoot(root)
    reactRoot.render(iconComponent)

    // 等待图标加载完成
    setTimeout(() => {
      const svgElement = root.querySelector("svg")
      if (svgElement) {
        // 将 SVG 转换为 data URL
        const svgString = new XMLSerializer().serializeToString(svgElement)
        const dataUrl = `data:image/svg+xml;base64,${btoa(svgString)}`
        setImageUrl(dataUrl)
      }
      // 清理
      reactRoot.unmount()
      document.body.removeChild(root)
    }, 100)

    return () => {
      if (imageUrl.startsWith("blob:")) {
        URL.revokeObjectURL(imageUrl)
      }
    }
  }, [icon, size])

  if (!image) return null

  return <KonvaImage image={image} width={size} height={size} x={x} y={y} />
}
