import Placeholder from '../components/Placeholder'
import './Features.css'

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

        <div className="spotlight spotlight--media-left">
          <div className="spotlight__copy">
            <h3>Every container, service, and node.</h3>
            <p>
              On a single host, Rivly lists every container with its logs and
              health. On a Swarm, it maps services to the nodes running them and
              tracks each task. Same clean view, either way.
            </p>
          </div>
          <div className="spotlight__media">
            <Placeholder label="Overview" ratio="4 / 3" />
          </div>
        </div>

        <div className="spotlight">
          <div className="spotlight__copy">
            <h3>Deploy your stacks from Git.</h3>
            <p>
              Point Rivly at a Git repository and it deploys your stacks, then
              keeps them in sync. Your definitions live in version control, not
              locked inside a database.
            </p>
          </div>
          <div className="spotlight__media">
            <Placeholder label="Stacks & GitOps" ratio="4 / 3" />
          </div>
        </div>
      </div>
    </section>
  )
}
