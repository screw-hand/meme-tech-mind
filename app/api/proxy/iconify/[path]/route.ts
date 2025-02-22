export async function GET(
  request: Request,
  { params }: { params: { path: string } }
) {
  try {
    const response = await fetch(`https://api.iconify.design/${params.path}`)

    const headers = new Headers({
      "Content-Type": "application/json",
    })

    // 可选缓存策略（推荐）
    headers.set(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=1800"
    )

    return new Response(await response.text(), {
      status: response.status,
      headers,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: "API Gateway Failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
