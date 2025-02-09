import { createOpenAI } from "@ai-sdk/openai"
import { streamText } from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

interface CustomConfig {
  baseURL: string
  model: string
  apiKey: string
}

export async function POST(req: Request) {
  const customConfigHeader = req.headers.get("X-Custom-Config")
  const customConfig: CustomConfig = JSON.parse(customConfigHeader || "{}")
  // Extract the `messages` from the body of the request
  const { messages, id } = await req.json()

  console.log("chat id", id) // can be used for persisting the chat

  const openai = createOpenAI({
    baseURL: customConfig.baseURL,
    apiKey: customConfig.apiKey,
  })

  // Call the language model
  const result = streamText({
    model: openai(customConfig.model),
    messages,
    // async onFinish({ text, toolCalls, toolResults, usage, finishReason }) {
    //   // implement your own logic here, e.g. for storing messages
    //   // or recording token usage
    // },
  })

  // Respond with the stream
  return result.toDataStreamResponse()
}
