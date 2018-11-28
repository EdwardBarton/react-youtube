import React, {Component} from 'react';
import SearchBar from './search-bar';
import VideoDetail from './video-detail';
import VideoList from './video-list';
const axios = require('axios');
const ytAPI = 'AIzaSyDHgux6pyvNhGIGufPIEF5E-qePUfMdKqo';

class App extends Component {
  constructor() {
    super();

    this.state = {
      videos: [],
      current_video: null
    };
  }

  videoSearch = query => {
    const url = 'https://www.googleapis.com/youtube/v3/search';
    const params = {
      part: 'snippet',
      key: ytAPI,
      q: query,
      type: 'video'
    };

    axios.get(url, {params})
      .then(resp => {
        this.setState({
          videos: resp.data.items,
          current_video: resp.data.items[0]
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  updateCurrentVideo = video => {
    this.setState({current_video: video});
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <SearchBar onSearchQueryChange={this.videoSearch} />
        </div>
        <div className="row">
          <VideoDetail video={this.state.current_video} />
          <VideoList videos={this.state.videos} updateCurrentVideo={this.updateCurrentVideo} />
        </div>
      </div>
    );
  }
}

export default App;