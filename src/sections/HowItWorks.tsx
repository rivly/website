import './HowItWorks.css'

const STEPS = [
  {
    n: '01',
    title: 'Run Rivly',
    desc: "One container, pointed at your Docker socket. That's the whole install.",
  },
  {
    n: '02',
    title: 'Connect your host or Swarm',
    desc: 'Point it at a single host or a Swarm manager, and Rivly maps every container, service, and node it finds.',
  },
  {
    n: '03',
    title: 'Deploy and watch',
    desc: 'Deploy stacks straight from Git, then watch services, logs, and health roll out live.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="how">
      <div className="container">
        <div className="how__intro">
          <h2>From one container to your whole cluster.</h2>
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
