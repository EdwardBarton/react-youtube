import React from 'react';

const VideoDetail = ({video}) => {
  if(!video) {return <div className="col-md-2 offset-md-5">Loading...</div>;}

  const url = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <main className="col-md-6 offset-md-1">
      <div className="card current-video">
        <div className="embed-responsive embed-responsive-16by9 card-img-top video">
          <iframe className="embed-responsive-item" src={url} title='current-video' />
        </div>
        <div className="card-body video-details">
          <h5 className="card-title">{video.snippet.title}</h5>
          <p className="card-text">{video.snippet.description}</p>
        </div>
      </div>
    </main>
  );
};

export default VideoDetail;