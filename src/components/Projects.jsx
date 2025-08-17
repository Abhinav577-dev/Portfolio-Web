import React from 'react'

const PROJECTS = [
  {
    title: 'Driver Dizziness Detection',
    desc: 'Real-time monitoring to detect driver drowsiness using computer vision & alerting system.',
    tags: ['Python', 'OpenCV', 'ML'],
    link: '#'
  },
  {
    title: 'Medical Report Explainer (MERN)',
    desc: 'Uploads lab reports, extracts key values, and explains them in simple language.',
    tags: ['MongoDB', 'Express', 'React', 'Node'],
    link: '#'
  },
  {
    title: 'No Traffic Signal Interchange',
    desc: 'Algorithmic traffic flow optimization prototype for junctions without signals.',
    tags: ['Algorithms', 'Simulation'],
    link: '#'
  }
]

export default function Projects(){
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <p className="section-title mb-2">Projects</p>
        <h2 className="h3 fw-bold mb-4">Things I’ve built</h2>
        <div className="row g-4">
          {PROJECTS.map((p, idx) => (
            <div className="col-md-6 col-lg-4" key={idx}>
              <div className="glass p-4 h-100 shadow-soft">
                <h3 className="h5">{p.title}</h3>
                <p className="text-secondary mb-3">{p.desc}</p>
                <div className="d-flex gap-2 flex-wrap mb-3">
                  {p.tags.map((t, i) => <span className="tag" key={i}>#{t}</span>)}
                </div>
                <a className="link-like accent fw-semibold" href={p.link} target="_blank" rel="noreferrer">
                  View project <i className="bi bi-arrow-up-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
