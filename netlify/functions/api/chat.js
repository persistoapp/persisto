export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": context.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 4000,
        system: body.system,
        messages: body.messages
      })
    });
    const data = await response.json();
    if (!response.ok) {
      return new Response(JSON.stringify({ error: data.error?.message || "Errore API" }), {
        status: response.status,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
