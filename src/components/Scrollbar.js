import React from 'react'

function Scrollbar({handlePlatformClick}) {
  return (
    <div className="scroll-bar sticky-top">
        <div onClick={()=>handlePlatformClick("all")} className="platform">All</div>
        <div onClick={()=>handlePlatformClick("hacker_rank")} className="platform">HackerRank</div>
        <div onClick={()=>handlePlatformClick("code_chef")} className="platform">Codechef</div>
        <div onClick={()=>handlePlatformClick("leet_code")} className="platform">Leetcode</div>
        <div onClick={()=>handlePlatformClick("hacker_earth")} className="platform">HackerEarth</div>
        <div onClick={()=>handlePlatformClick("codeforces")} className="platform">CodeForces</div>
        <div onClick={()=>handlePlatformClick("at_coder")} className="platform">AtCoder</div>
        <div onClick={()=>handlePlatformClick("kick_start")} className="platform">KickStart</div>
    </div>
  )
}

export default Scrollbar