"use client"

import { Icon } from "@iconify/react"

import { MemeOperatorType } from "@/types/meme-operator"
import { Button } from "@/components/ui/button"

interface MemeOperationsProps {
  onGenerateMeme: (operator: MemeOperatorType) => void
}

export function MemeOperations({ onGenerateMeme }: MemeOperationsProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Button
        variant="outline"
        size="sm"
        className="gap-2 text-gray-600 hover:text-gray-900"
        onClick={() => onGenerateMeme(MemeOperatorType.COPY)}
      >
        <Icon icon="uil:copy" className="size-4" />
        复制
      </Button>
      <Button
        variant="default"
        size="sm"
        className="gap-2 bg-blue-500 hover:bg-blue-600"
        onClick={() => onGenerateMeme(MemeOperatorType.DOWNLOAD)}
      >
        <Icon icon="uil:download-alt" className="size-4" />
        下载
      </Button>
      {/* <Button onClick={() => onGenerateMeme(MemeOperatorType.SHARE_LINK)}>
        <Icon icon="uil:link" />
        链接
      </Button> */}
      <Button
        variant="secondary"
        size="sm"
        className="gap-2 bg-green-500 text-white hover:bg-green-600"
        onClick={() => onGenerateMeme(MemeOperatorType.SHARE)}
      >
        <Icon icon="uil:share" className="size-4" />
        分享
      </Button>
    </div>
  )
}
