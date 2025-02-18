import { useCallback, useEffect } from "react"
import { Icon } from "@iconify/react"
import { useChat } from "ai/react"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"

import { MemeSettingsType } from "@/types/meme-settings"
import { Input } from "@/components/ui/input"

import { Button } from "./ui/button"

interface CustomConfig {
  baseURL: string
  model: string
  apiKey: string
}

interface AiBarProps {
  name: Extract<
    keyof MemeSettingsType,
    // 还在构思是否需要让source使用ai能力
    // "source" |
    "target" | "specialEffect"
  >
  settings: MemeSettingsType
  onSettingsChange: (settings: MemeSettingsType) => void
}

export function AiBar({ name, settings, onSettingsChange }: AiBarProps) {
  const { isLoading, setInput, handleInputChange, append } = useChat({
    api: "/api/chat",
    headers: {
      "Content-Type": "application/json",
      "X-Custom-Config": JSON.stringify({
        baseURL: settings.ai.baseURL,
        model: settings.ai.model,
        apiKey: settings.ai.apiKey,
      } as CustomConfig),
    },
    onFinish(message, { usage, finishReason }) {
      console.log("Usage", usage)
      console.log("FinishReason", finishReason)
      console.log("message", message)
      onSettingsChange({ ...settings, [name]: message.content })
    },
    onError(error: Error) {
      toast.error("AI请求失败", {
        description: error.message,
      })
    },
  })

  const handleClick = async () => {
    if (!settings.searchKey) {
      toast.info("AI智能填充需要根据“搜索”内容生成，请填写“搜索”框！")
      return
    }
    const prompt =
      typeof settings.ai.prompt[name] === "function"
        ? (settings.ai.prompt[name] as (settings: MemeSettingsType) => string)(
            settings
          )
        : (settings.ai.prompt[name] as string)

    await append({
      role: "user",
      content: prompt,
      parts: [{ type: "text", text: prompt }],
    })

    handleInputChange({
      target: { value: prompt },
    } as React.ChangeEvent<HTMLInputElement>)
  }

  const handleUpdatePrompt = useCallback(() => {
    console.log("handleUpdatePrompt", settings.ai.prompt[name])
    const prompt =
      typeof settings.ai.prompt[name] === "function"
        ? (settings.ai.prompt[name] as (settings: MemeSettingsType) => string)(
            settings
          )
        : (settings.ai.prompt[name] as string)

    setInput(prompt)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    handleUpdatePrompt()
  }, [handleUpdatePrompt])

  return (
    <div className="flex w-full items-center space-x-2">
      <Input
        type="text"
        name={name}
        className="h-8 px-2 text-sm"
        value={settings[name]}
        onChange={(e) =>
          onSettingsChange({ ...settings, [name]: e.target.value })
        }
      />
      <Button
        variant="outline"
        className="h-8 px-2 py-0"
        disabled={isLoading}
        onClick={() => handleClick()}
      >
        {isLoading ? (
          <Loader2 className="animate-spin" />
        ) : (
          <Icon icon="mdi:brain" className="size-5 text-blue-500" />
        )}
      </Button>
    </div>
  )
}
