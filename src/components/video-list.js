import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = ({videos, updateCurrentVideo}) => {
  const videoItems = videos.map((video, index) => {
    return <VideoListItem key={index} video={video} updateCurrentVideo={updateCurrentVideo}/>
  });

  return (
    <aside className="playlist col-md-4">
      <ul className="list-group">
        {videoItems}
      </ul>
    </aside>
  );
};

export default VideoList;