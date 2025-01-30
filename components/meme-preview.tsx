"use client"

import Image from "next/image"
import droplet from "@/public/images/droplet.png"
import { Icon } from "@iconify/react"
import clsx from "clsx"

import { MemeSettingsType } from "@/types/meme-settings"

interface MemePreviewProps {
  settings: MemeSettingsType
}

export function MemePreview({ settings }: MemePreviewProps) {
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
          }}
        >
          <div className="mx-auto justify-self-center">
            {settings.source.startsWith("blob:") ? (
              <Image
                src={settings.source}
                alt="uploaded icon"
                width={settings.icon.size}
                height={settings.icon.size}
                className="object-contain"
              />
            ) : (
              <Icon
                icon={settings.source}
                style={{
                  fontSize: `${settings.icon.size}px`,
                }}
              />
            )}
          </div>
          <Image
            className={clsx("absolute")}
            src={droplet}
            alt="💧"
            width={settings.emoji.size}
            height={settings.emoji.size}
            style={{
              left: `${settings.emoji.x}px`,
              bottom: `${settings.emoji.y}px`,
            }}
          />
          <p
            style={{
              width: `${settings.text.width}`,
              color: `${settings.text.color}`,
              fontFamily: `${settings.text.fontFamily}`,
              fontSize: `${settings.text.fontSize}px`,
              marginTop: `${settings.text.marginTop}px`,
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
