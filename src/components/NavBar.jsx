import React from 'react'

export default function NavBar(){
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-transparent sticky-top">
      <div className="container py-2">
        <a className="navbar-brand fw-bold" href="#home">
          <span className="accent">A</span>bhinav
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
          <a className="btn btn-sm btn-outline-light ms-lg-3" href="#contact">
            <i className="bi bi-send me-1"></i>Hire me
          </a>
        </div>
      </div>
    </nav>
  )
}
