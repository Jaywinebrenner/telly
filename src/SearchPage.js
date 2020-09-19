import React from "react";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow'

function Search() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <h2>Search Page</h2>
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://i.guim.co.uk/img/media/26f400b3f7b1eb2c0cefb0e3c55a0ca69c4009d3/0_0_5184_3456/master/5184.jpg?width=445&quality=85&auto=format&fit=max&s=58eaec864da6b61a033e661f509fe8ed"
        channel="Space is the Place"
        verified
        subs="34,000"
        noOfVideos={16}
        description="If you like space, this is the place"
      />
      <hr />

      <VideoRow
        views="1.2k"
        subs="54"
        description="This video has everything you'd ever want to know contained therin"
        timestamp="34 minutes ago"
        channel="The everything channel"
        title="Let's learn about it all!"
        image="https://upload.wikimedia.org/wikipedia/commons/c/c3/NGC_4414_%28NASA-med%29.jpg"
      />

      <VideoRow
        views="1.2k"
        subs="54"
        description="This video has everything you'd ever want to know contained therin"
        timestamp="34 minutes ago"
        channel="The everything channel"
        title="Let's learn about it all!"
        image="https://upload.wikimedia.org/wikipedia/commons/c/c3/NGC_4414_%28NASA-med%29.jpg"
      />

      <VideoRow
        views="1.2k"
        subs="54"
        description="This video has everything you'd ever want to know contained therin"
        timestamp="34 minutes ago"
        channel="The everything channel"
        title="Let's learn about it all!"
        image="https://upload.wikimedia.org/wikipedia/commons/c/c3/NGC_4414_%28NASA-med%29.jpg"
      />

      <VideoRow
        views="1.2k"
        subs="54"
        description="This video has everything you'd ever want to know contained therin"
        timestamp="34 minutes ago"
        channel="The everything channel"
        title="Let's learn about it all!"
        image="https://upload.wikimedia.org/wikipedia/commons/c/c3/NGC_4414_%28NASA-med%29.jpg"
      />
    </div>
  );
}

export default Search;
