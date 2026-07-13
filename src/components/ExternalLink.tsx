import type { AnchorHTMLAttributes } from 'react'

export default function ExternalLink(
  props: AnchorHTMLAttributes<HTMLAnchorElement>,
) {
  return <a {...props} target="_blank" rel="noreferrer" />
}
