import React, { useState } from 'react';

function Scrollbar({ handlePlatformClick }) {
  // Initialize state to track the active platform
  const [activePlatform, setActivePlatform] = useState('all');

  // Function to handle platform click and update the active platform
  const handleClick = (platform) => {
    setActivePlatform(platform);
    handlePlatformClick(platform);
  };

  // Define styles for the active and inactive platforms
  const platformStyle = (platform) => ({
    cursor: 'pointer',
    padding: '10px',
    backgroundColor: platform === activePlatform ? '#007bff' : 'transparent',
    color: platform === activePlatform ? '#fff' : '#333',
    borderRadius: '4px',
    margin: '5px',
    transition: 'background-color 0.3s ease',
  });

  return (
    <div className="scroll-bar sticky-top">
      <div
        onClick={() => handleClick('all')}
        className="platform"
        style={platformStyle('all')}
      >
        All
      </div>
      <div
        onClick={() => handleClick('hacker_rank')}
        className="platform"
        style={platformStyle('hacker_rank')}
      >
        HackerRank
      </div>
      <div
        onClick={() => handleClick('code_chef')}
        className="platform"
        style={platformStyle('code_chef')}
      >
        Codechef
      </div>
      <div
        onClick={() => handleClick('leet_code')}
        className="platform"
        style={platformStyle('leet_code')}
      >
        Leetcode
      </div>
      <div
        onClick={() => handleClick('hacker_earth')}
        className="platform"
        style={platformStyle('hacker_earth')}
      >
        HackerEarth
      </div>
      <div
        onClick={() => handleClick('codeforces')}
        className="platform"
        style={platformStyle('codeforces')}
      >
        CodeForces
      </div>
      <div
        onClick={() => handleClick('at_coder')}
        className="platform"
        style={platformStyle('at_coder')}
      >
        AtCoder
      </div>
      <div
        onClick={() => handleClick('kick_start')}
        className="platform"
        style={platformStyle('kick_start')}
      >
        KickStart
      </div>
    </div>
  );
}

export default Scrollbar;