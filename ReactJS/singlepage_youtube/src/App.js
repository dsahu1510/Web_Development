import React from 'react';
import Search from 'youtube-api-search';
import Navbar from './components/navbar';


const api_key = "AIzaSyCz0sQtkH2W9xv20GXRbqh3d9_fZqTYPOs"

class App extends React.Component{

  
  render(){
    return(
      <div>
        <Navbar></Navbar>
      </div>
    )
  }
}
export default App;