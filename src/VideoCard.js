import React from 'react'
import Avatar from "@material-ui/core/Avatar";


function VideoCard({image, title, channel, timestamp, views, channelImage}) {
  return (
    <div className="videoCard">

      <img className="videoCard__thumbnail" src={image} alt="video image" />

      <div className="videoCard__info">
        <Avatar className="videoCard__info"
                alt={channel}
                src={channel}
          />
          <div classNameo="video__text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p> {views} + {timestamp}</p>
          </div>

      </div>

    </div>
  )
}

export default VideoCard
