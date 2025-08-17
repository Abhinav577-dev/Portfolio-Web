import React from 'react'

const SKILLS = [
  { name: 'React', level: 'Advanced' },
  { name: 'Java', level: 'Intermediate' },
  { name: 'C++', level: 'Intermediate' },
  { name: 'Python (ML)', level: 'Intermediate' },
  { name: 'MongoDB', level: 'Intermediate' },
  { name: 'Git & GitHub', level: 'Advanced' },
]

export default function Skills(){
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <p className="section-title mb-2">Skills</p>
        <h2 className="h3 fw-bold mb-4">What I use</h2>
        <div className="row g-3">
          {SKILLS.map((s, i) => (
            <div className="col-6 col-md-4 col-lg-3" key={i}>
              <div className="glass p-3 text-center h-100">
                <div className="fw-semibold">{s.name}</div>
                <div className="text-secondary small">{s.level}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
