import { createOpenAI } from "@ai-sdk/openai"
import { streamText } from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

const openai = createOpenAI({
  baseURL: process.env.OPENAI_BASE_URL,
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages, id } = await req.json()

  console.log("chat id", id) // can be used for persisting the chat

  // Call the language model
  const result = streamText({
    model: openai("deepseek-chat"),
    messages,
    // async onFinish({ text, toolCalls, toolResults, usage, finishReason }) {
    //   // implement your own logic here, e.g. for storing messages
    //   // or recording token usage
    // },
  })

  // Respond with the stream
  return result.toDataStreamResponse()
}
