import React from 'react'

export default function About(){
  return (
    <section id="about" className="py-5">
      <div className="container">
        <p className="section-title mb-2">About</p>
        <h2 className="h3 fw-bold mb-3">A bit about me</h2>
        <div className="glass p-4 p-md-5">
          <p className="text-secondary mb-2">
            I’m Abhinav, a Computer Science student who loves building efficient, user-friendly applications.
            I enjoy tackling algorithms, full‑stack web dev, and ML prototypes. When I’m not coding,
            I read, learn new tools, and iterate on side projects.
          </p>
          <p className="text-secondary mb-0">
            Currently looking for internships and hackathon collaborations. If you’ve got an interesting problem,
            I’d love to help solve it.
          </p>
        </div>
      </div>
    </section>
  )
}
