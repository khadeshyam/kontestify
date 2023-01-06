import React from 'react'

function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark overflow-hidden">
  <a className="navbar-brand font-weight-bold text-white" href="/">Kontestify</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ms-auto ml-auto">
      <a className="nav-item nav-link active text-white" href="/">Home</a>
      <a className="nav-item nav-link active text-white" href="/contests">Contests</a>
      <a className="nav-item nav-link active text-white" href="/about">About Us</a>
    </div>
  </div>
</nav>
  )
}

export default Navbar
