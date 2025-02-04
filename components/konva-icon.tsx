import { useCallback, useEffect, useState } from "react"
import { getIcon } from "@iconify/react"
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

  const generateDataUrl = useCallback((icon: string, size: number) => {
    const iconData = getIcon(icon)
    if (!iconData) {
      console.error(`Icon ${icon} not found`)
      return
    }

    const svgElement = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="${iconData.width}"
        height="${iconData.height}"
        viewBox="${iconData.left} ${iconData.top} ${iconData.width} ${iconData.height}"
      >
        ${iconData.body}
      </svg>
    `

    const dataUrl = `data:image/svg+xml;base64,${btoa(svgElement)}`
    setImageUrl(dataUrl)
  }, [])

  const clearImageUrl = useCallback(() => {
    if (imageUrl.startsWith("blob:")) {
      URL.revokeObjectURL(imageUrl)
    }
  }, [imageUrl])

  useEffect(() => {
    generateDataUrl(icon, size)

    return () => {
      clearImageUrl()
    }
  }, [icon, size, generateDataUrl, clearImageUrl])

  if (!image) return null

  return <KonvaImage image={image} width={size} height={size} x={x} y={y} />
}
