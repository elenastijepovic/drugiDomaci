import React from 'react'

function Trailer() {
    return (
        <div className='trailer-container'>
          <video className="trailer-video" src='/video/HomeVideo.mp4' autoPlay loop muted />
         
        </div>
      );
}

export default Trailer
