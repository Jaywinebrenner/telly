import React from 'react'

function VideoRow({views, subs, description, timestamp, channel, title, image }) {




  return (
    <div className="videoRow">
      <img src={image}/>
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p>{channel} | {subs} Subscribers| {views} views | {timestamp}</p>
        <p c>{description}</p>
      </div>

      
    </div>
  )
}

export default VideoRow