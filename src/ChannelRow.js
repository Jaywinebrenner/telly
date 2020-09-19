import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import VerifiedIcon from '@material-ui/icons/CheckCircleOutline';

function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) {



  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" src={image} />
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <VerifiedIcon />}
        </h4>
        <p className="videoRow__headline">
          <span>{subs}</span> Subscribers | {noOfVideos}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow
