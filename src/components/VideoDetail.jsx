import React from 'react';

const VideoDetail = (props) => {

  if (!props.video){
    return (
      <div>Loading...</div>
    )
  }

  const youtubeVideo = `https://www.youtube.com/embed/${props.video.id.videoId}`

  return (
    <div className="video-detail">
      <div className="ui embed">
        <iframe src={youtubeVideo} title="YouTube video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{props.video.snippet.title}</h4>
        <p className="ui description">{props.video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail;