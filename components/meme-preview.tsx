"use client"

import droplet from "@/public/images/droplet.png"
import { Image as KonvaImage, Layer, Rect, Stage, Text } from "react-konva"
import useImage from "use-image"

import { MemeSettingsType } from "@/types/meme-settings"

import { KonvaIcon } from "./konva-icon"

interface MemePreviewProps {
  settings: MemeSettingsType
}

export function MemePreview({ settings }: MemePreviewProps) {
  const [dropletImage] = useImage(droplet.src)

  return (
    <div className="meme-preview flex items-center justify-center">
      {/* meme border */}
      <div className="meme-border border-gray border-2 border-dashed">
        {/* meme content */}
        <Stage
          id="meme-content"
          width={settings.background.size}
          height={settings.background.size}
        >
          <Layer>
            {/* Background */}
            <Rect
              width={settings.background.size}
              height={settings.background.size}
              fill={settings.background.color}
              cornerRadius={settings.background.borderRadius}
            />

            {/* Icon */}
            <KonvaIcon
              icon={settings.source}
              size={settings.icon.size}
              x={(settings.background.size - settings.icon.size) / 2}
              y={settings.background.paddingY}
            />

            {/* Droplet */}
            <KonvaImage
              image={dropletImage}
              width={settings.emoji.size}
              height={settings.emoji.size}
              x={settings.emoji.x}
              y={
                settings.background.size -
                settings.emoji.y -
                settings.emoji.size
              }
            />

            {/* Text */}
            <Text
              text={`无语 跟你讲不下去 典型的${settings.target}思维`}
              width={settings.text.width}
              fill={settings.text.color}
              fontFamily={settings.text.fontFamily}
              fontSize={settings.text.fontSize}
              align="center"
              x={(settings.background.size - Number(settings.text.width)) / 2}
              y={
                settings.background.paddingY +
                settings.icon.size +
                settings.text.marginTop
              }
            />
          </Layer>
        </Stage>
        {/* meme content */}
      </div>
      {/* meme border */}
    </div>
  )
}
