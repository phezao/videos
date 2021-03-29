import React from 'react';
import './VideoItem.css';


const VideoItem = (props) => {
  return (
    <div  className="video-item item" onClick={() => props.onVideoSelect(props.videoInfo)}>
      <img src={props.videoInfo.snippet.thumbnails.medium.url} alt="" className="ui image"/>
      <div className="content">
        <div className="header">{props.videoInfo.snippet.title}</div>
      </div>
    </div>
  )
}

export default VideoItem;