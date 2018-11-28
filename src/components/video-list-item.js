import React from 'react';

const VideoListItem = ({ video, updateCurrentVideo }) => {
  const handleClick = () => {
    updateCurrentVideo(video);
  }

  return (
    <button
      className="list-group-item list-group-item-action"
      onClick={handleClick}>
      <img src={video.snippet.thumbnails.default.url} alt="Pic" />
      <p>{video.snippet.title}</p>
    </button>
  );
};

export default VideoListItem;
