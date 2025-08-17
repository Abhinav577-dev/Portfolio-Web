import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <p className="section-title mb-2">Contact</p>
        <h2 className="h3 fw-bold mb-4">Let’s work together</h2>
        <div className="glass p-4 p-md-5">
          <div className="row g-3">
            <div className="col-md-6">
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-envelope fs-4"></i>
                <a className="link-light" href="mailto:your.email@example.com">your.email@example.com</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-github fs-4"></i>
                <a className="link-light" href="https://github.com/yourusername" target="_blank" rel="noreferrer">github.com/yourusername</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-linkedin fs-4"></i>
                <a className="link-light" href="https://www.linkedin.com/in/yourhandle" target="_blank" rel="noreferrer">linkedin.com/in/yourhandle</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
