import axios from 'axios';

const KEY = 'AIzaSyA4Y2e1F_ddTooBt67jE717crmiAAPAbww';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: '5',
    type: 'video',
    key: KEY
  }
})
