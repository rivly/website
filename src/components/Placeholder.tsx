import logo from '../../brand/logo-blue-no-bg.png'
import './Placeholder.css'

type Props = {
  label?: string
  ratio?: string
}

export default function Placeholder({
  label = 'Screenshot coming soon',
  ratio = '16 / 10',
}: Props) {
  return (
    <div className="ph" style={{ aspectRatio: ratio }} role="img" aria-label={label}>
      <div className="ph__inner">
        <img className="ph__mark" src={logo} alt="" width={36} height={36} />
        <span className="ph__label">{label}</span>
      </div>
    </div>
  )
}
