import { MemeOperatorType } from "@/types/meme-operator"

interface MemeOperationsProps {
  onGenerateMeme: (operator: MemeOperatorType) => void
}

export function MemeOperations({ onGenerateMeme }: MemeOperationsProps) {
  return (
    <div>
      <button onClick={() => onGenerateMeme(MemeOperatorType.COPY)}>
        Copy
      </button>
      <button onClick={() => onGenerateMeme(MemeOperatorType.DOWNLOAD)}>
        Download
      </button>
      <button onClick={() => onGenerateMeme(MemeOperatorType.SHARE_LINK)}>
        Share Link
      </button>
    </div>
  )
}
