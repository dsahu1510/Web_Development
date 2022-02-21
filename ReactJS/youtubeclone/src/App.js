import React from 'react';
import Search from 'youtube-api-search';
import VideoList from './components/Videolist';
import VideoPlayer from './components/Videoplayer';
import SearchBar from './components/search';

const api_key = "AIzaSyCz0sQtkH2W9xv20GXRbqh3d9_fZqTYPOs"

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      videos: [],
      firstVideo: null,
      term : ""
    }
  }
  componentDidMount(){
    Search({key:api_key},(videoU =>{
      console.log(videoU);
      this.setState({videos:videoU,firstVideo:videoU[0],term:videoU});
    }))
  }
  
  render(){
    return(
      <div>

        <SearchBar videoN = {this.state.term}></SearchBar>
        {/* <h1>{this.state.videos.length}</h1> */}
        <VideoPlayer videoF = {this.state.firstVideo}></VideoPlayer>
        <VideoList videoSelection = {videoF => {this.setState({firstVideo:videoF})}} videos = {this.state.videos}></VideoList>
        
      </div>
    )
  }
}
export default App;
