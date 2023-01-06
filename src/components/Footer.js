import React from 'react'

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
  return (
    <footer className="footer overflow-hidden">
    <i class="social-icon fa-brands fa-twitter"></i>
    <i class="social-icon fa-brands fa-facebook"></i>
    <i class="social-icon fa-brands fa-instagram"></i>
    <i class="social-icon fa-brands fa-linkedin"></i>
    <p>&copy; {year}  Kontestify, Inc. All rights reserved</p>
  </footer>
  )
}

export default Footer