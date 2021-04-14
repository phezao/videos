import React, { useState, useEffect } from 'react';
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onSubmit('rocket league')
  }, [])


  const onSubmit = async term => {
   const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    console.log(response.data.items);

    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])

  }

  const onVideoSelect = (video) => {
    console.log(video);
    setSelectedVideo(video)
  }

  return (
    <div className="ui container" style={{marginTop: '30px'}}>
        <SearchBar onSubmit={onSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={videos} onVideoSelect={onVideoSelect} />
            </div>
          </div>
        </div>
        <p>Found {videos.length} videos</p>
      </div>
    )
}


export default App;