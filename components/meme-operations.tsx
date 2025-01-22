import { Icon } from "@iconify/react"

import { MemeOperatorType } from "@/types/meme-operator"
import { Button } from "@/components/ui/button"

interface MemeOperationsProps {
  onGenerateMeme: (operator: MemeOperatorType) => void
}

export function MemeOperations({ onGenerateMeme }: MemeOperationsProps) {
  return (
    <div className="mx-4 grid grid-cols-3 gap-4">
      <Button
        variant="outline"
        onClick={() => onGenerateMeme(MemeOperatorType.COPY)}
      >
        <Icon icon="uil:copy" />
        复制
      </Button>
      <Button onClick={() => onGenerateMeme(MemeOperatorType.DOWNLOAD)}>
        <Icon icon="uil:download-alt" />
        下载
      </Button>
      <Button onClick={() => onGenerateMeme(MemeOperatorType.SHARE_LINK)}>
        <Icon icon="uil:link" />
        下载
      </Button>
    </div>
  )
}
