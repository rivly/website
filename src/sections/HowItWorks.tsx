import './HowItWorks.css'

const STEPS = [
  {
    n: '01',
    title: 'Run Rivly',
    desc: 'One container, talking to your local Docker socket. Nothing else to set up.',
  },
  {
    n: '02',
    title: 'Connect your Swarm',
    desc: 'Point Rivly at a manager node and it discovers every service, task, and node in the cluster.',
  },
  {
    n: '03',
    title: 'Deploy and watch',
    desc: 'Ship stacks from Git, then follow services, logs, and health as they roll out.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="how">
      <div className="container">
        <div className="how__intro">
          <h2>From zero to running in three steps.</h2>
        </div>

        <ol className="how__steps">
          {STEPS.map((s) => (
            <li className="step" key={s.n}>
              <span className="step__n">{s.n}</span>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__desc">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
