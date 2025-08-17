import React from 'react'

export default function Hero(){
  return (
    <section id="home" className="py-5">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <div className="glass p-4 p-md-5 shadow-soft">
              <div className="tag mb-3">
                <i className="bi bi-code-slash"></i>
                Open to Internships
              </div>
              <h1 className="display-5 fw-bold lh-1 mb-3">Hi, I'm <span className="accent">Abhinav</span> — Developer & Problem Solver</h1>
              <p className="lead text-secondary">I build clean, fast web apps with React and craft intelligent solutions with Python & ML. Check out my projects below.</p>
              <div className="d-flex gap-2 flex-wrap">
                <a className="btn btn-light" href="#projects"><i className="bi bi-rocket-takeoff me-2"></i>See Projects</a>
                <a className="btn btn-outline-light" href="#contact"><i className="bi bi-envelope me-2"></i>Contact</a>
                <a className="btn btn-outline-light" href="/resume.pdf" target="_blank" rel="noreferrer"><i className="bi bi-file-earmark-arrow-down me-2"></i>Resume</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="glass p-4 p-md-5 h-100 d-flex align-items-center justify-content-center shadow-soft">
              <div className="text-center">
                <div className="mb-3">
                  <i className="bi bi-person-circle" style={{fontSize: '5rem'}}></i>
                </div>
                <div className="d-flex gap-2 justify-content-center flex-wrap">
                  <span className="tag"><i className="bi bi-award"></i> C++ / Java</span>
                  <span className="tag"><i className="bi bi-cpu"></i> ML / Python</span>
                  <span className="tag"><i className="bi bi-window"></i> React</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
