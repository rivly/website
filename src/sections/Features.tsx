import Placeholder from '../components/Placeholder'
import './Features.css'

const SPOTLIGHTS = [
  {
    title: 'Every container, service, and node.',
    desc: 'On a single host, Rivly lists every container with its logs and health. On a Swarm, it maps services to the nodes running them and tracks each task. Same clean view, either way.',
    label: 'Overview',
    mediaLeft: true,
  },
  {
    title: 'Deploy your stacks from Git.',
    desc: 'Point Rivly at a Git repository and it deploys your stacks, then keeps them in sync. Your definitions live in version control, not locked inside a database.',
    label: 'Stacks & GitOps',
    mediaLeft: false,
  },
]

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="features__intro">
          <h2>Single host or full Swarm.</h2>
          <p>
            Rivly manages plain Docker and Docker Swarm the same way. Run one
            host with a few compose files, or a cluster with dozens of nodes,
            all from the same dashboard.
          </p>
        </div>

        {SPOTLIGHTS.map((s) => (
          <div
            key={s.label}
            className={
              s.mediaLeft ? 'spotlight spotlight--media-left' : 'spotlight'
            }
          >
            <div className="spotlight__copy">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
            <div className="spotlight__media">
              <Placeholder label={s.label} ratio="4 / 3" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
