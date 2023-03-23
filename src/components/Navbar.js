import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark overflow-hidden">
  <Link className="navbar-brand font-weight-bold text-white" to="/">Kontestify</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ms-auto ml-auto">
      <Link className="nav-item nav-link active text-white" to="/">Home</Link>
      <Link className="nav-item nav-link active text-white" to="/contests">Contests</Link>
      <Link className="nav-item nav-link active text-white" to="/about">About Us</Link>
    </div>
  </div>
</nav>
  )
}

export default Navbar
