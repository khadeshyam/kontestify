import React from 'react'

function Home() {
  return (
    <div className="jumbotron text-center">
    <h1 className="display-4">Welcome to Kontestify</h1>
    <p className="lead">
        Kontestify is a coding contest fetching site which gets all the ongoing and upcoming contests from all your favourite coding platforms like  
        Codechef Codeforces AtCoder Leetcode etc...
    </p>
    <hr className="my-4" />
    <p>
      So what are you waiting for Register for upcoming contests Now
    </p>
    <p className="lead">
      <a className="btn btn-primary btn-lg" href="/contests" role="button">
        Register
      </a>
    </p>
  </div>
  
  )
}

export default Home