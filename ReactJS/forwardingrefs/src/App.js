import React from 'react';
import Parent from './parentcomp';

class App extends React.Component{

  render(){
    return(
      <div>
        <h1>Practising forwarding refs</h1>
        <Parent></Parent>
        
      </div>
    )
  }
}

export default App;
