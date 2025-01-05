import React from 'react'

const Logo = () => {
  return (
    <div><svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
    {/* <!-- Main text --> */}
    <text x="80" y="50" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="#2D3748">
      BlogsTerra
    </text>
    
    {/* <!-- Abstract tech symbol --> */}
    <g transform="translate(20, 15)">
      {/* <!-- Circuit-like paths --> */}
      <path d="M 0 25 L 20 25 L 30 15 L 40 35 L 50 25" 
            stroke="#4299E1" 
            stroke-width="3" 
            fill="none"/>
      
      {/* <!-- Dots representing connection points --> */}
      <circle cx="0" cy="25" r="4" fill="#4299E1"/>
      <circle cx="50" cy="25" r="4" fill="#4299E1"/>
      
      {/* <!-- Square bracket representing code/tech --> */}
      <path d="M 35 0 L 45 0 L 45 50 L 35 50" 
            stroke="#2B6CB0" 
            stroke-width="3" 
            fill="none"/>
    </g>
    
    {/* <!-- Tagline with increased gap from main text --> */}
    <text x="80" y="75" font-family="Arial, sans-serif" font-size="12" fill="#718096">
      tech • code • create
    </text>
  </svg></div>
  )
}

export default Logo