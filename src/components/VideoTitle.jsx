import React from 'react'

const VideoTitle = ({ title, overview}) => {
  return (
      <div className="VideoTitle">
        <h1>{title}</h1>
        <p>{overview}</p>
        <div className='VideoTitle-buttons'>
          <button style={{backgroundColor:"white", color:"black"}} >Play</button>
          <button>More info</button>
        </div>
      </div>
  )
}

export default VideoTitle
