import Placeholder from '../components/Placeholder'
import './Features.css'

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="features__intro">
          <h2>Built around Docker Swarm.</h2>
          <p>
            Most dashboards bolt Swarm on as an afterthought. Rivly treats your
            cluster as the main view, not a tab.
          </p>
        </div>

        <div className="spotlight spotlight--media-left">
          <div className="spotlight__copy">
            <h3>Every service, node, and task in one place.</h3>
            <p>
              Rivly maps each service to the nodes running it, with live replica
              counts and health. Catch a failing task or an unbalanced node
              without dropping to docker service ps.
            </p>
          </div>
          <div className="spotlight__media">
            <Placeholder label="Cluster view" ratio="4 / 3" />
          </div>
        </div>

        <div className="spotlight">
          <div className="spotlight__copy">
            <h3>Deploy your stacks from Git.</h3>
            <p>
              Point Rivly at a repository and it deploys your compose stacks and
              keeps them in sync. Your definitions stay versioned in Git, not
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
