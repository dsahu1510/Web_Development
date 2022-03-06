import React from 'react';
import Search from 'youtube-api-search';
import VideoList from './videolist';
import VideoPlayer from './videoplayer';
import SearchBar from './search';

const api_key = "AIzaSyCz0sQtkH2W9xv20GXRbqh3d9_fZqTYPOs"

class Dashboard extends React.Component{

  constructor(){
    super();
    this.state = {
      videos: [],
      firstVideo: null,
      
    }
  }
  componentDidMount(){
    this.videoSearch('reactjs');  
  }
  
  videoSearch = (term) =>{
  Search({key:api_key,term:term},(videoU)=>{
    console.log(videoU);
    this.setState({videos:videoU,firstVideo:videoU[0]});
  })
  }
  render(){
    if(!localStorage.getItem('isUserLoggedIn')){
      this.props.history.push('/login');
    }
    return(
      <div>

        {/* <SearchBar OnVideoSearch = {(term) => {this.videoSearch(term)}}></SearchBar> */}
        <SearchBar OnVideoSearch = {this.videoSearch}></SearchBar> 
        {/* <h1>{this.state.videos.length}</h1> */}
         <VideoPlayer videoF = {this.state.firstVideo}></VideoPlayer>
        <VideoList videoSelection = {videoF => {this.setState({firstVideo:videoF})}} videos = {this.state.videos}></VideoList>
        
      </div>
    )
  }
}
export default Dashboard;