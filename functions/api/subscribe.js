// Cloudflare Pages Function — POST /api/subscribe
// Saves a waitlist email into the KV namespace bound as `WAITLIST`.

export async function onRequestPost(context) {
  const { request, env } = context

  let email = ''
  try {
    const contentType = request.headers.get('content-type') || ''
    if (contentType.includes('application/json')) {
      const body = await request.json()
      email = String(body?.email || '').trim()
    } else {
      const form = await request.formData()
      email = String(form.get('email') || '').trim()
    }
  } catch {
    return json({ error: 'Invalid request.' }, 400)
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'Please enter a valid email.' }, 400)
  }

  if (!env.WAITLIST) {
    return json({ error: 'Waitlist storage is not configured.' }, 500)
  }

  // Key = email (lowercased) so the same address can't be stored twice.
  await env.WAITLIST.put(
    email.toLowerCase(),
    JSON.stringify({ email, at: new Date().toISOString() }),
  )

  return json({ ok: true }, 200)
}

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' },
  })
}
