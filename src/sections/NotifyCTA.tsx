import { useState, type FormEvent } from 'react'
import { LuArrowRight } from 'react-icons/lu'
import './NotifyCTA.css'

const NOTIFY_ENDPOINT = '/api/subscribe'

type Status = 'idle' | 'loading' | 'done' | 'error'

export default function NotifyCTA() {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const email = String(fd.get('email') || '')
    const company = String(fd.get('company') || '')
    setStatus('loading')
    try {
      const res = await fetch(NOTIFY_ENDPOINT, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, company }),
      })
      setStatus(res.ok ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="notify" className="notify">
      <div className="container notify__inner">
        <h2 className="notify__title">Be running Rivly on day one.</h2>
        <p className="notify__lead">
          Rivly is in early development. Leave your email and we&rsquo;ll send
          one message the day it ships. No spam, no newsletter.
        </p>

        {status === 'done' ? (
          <p className="notify__done">Thanks. You&rsquo;re on the list.</p>
        ) : (
          <form className="notify__form" onSubmit={onSubmit}>
            <input
              className="notify__hp"
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <input
              className="notify__input"
              type="email"
              name="email"
              required
              placeholder="you@company.com"
              aria-label="Email address"
            />
            <button
              className="btn btn-primary"
              type="submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Joining' : 'Notify me'}
              <LuArrowRight size={15} />
            </button>
          </form>
        )}

        {status !== 'done' && (
          <p className="notify__legal">
            We use your address for that one message, nothing else. Read the{' '}
            <a href="/privacy">privacy policy</a>.
          </p>
        )}

        {status === 'error' && (
          <p className="notify__error">
            Something went wrong. Please try again in a moment.
          </p>
        )}
      </div>
    </section>
  )
}
