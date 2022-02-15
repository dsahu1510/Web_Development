import React from 'react';
import Login from './login';
import Logout from './logout';

class App extends React.Component{

  constructor(){
    super();
     this.state = {
        isUserLoggedIn : false
     }
  }

  render(){
    
       if(this.state.isUserLoggedIn){
        return(
          <div>
                <Login></Login>
          </div>
        )
       }
       else
       {
        return(
          <div>
                <Logout></Logout>
          </div>
        )
       }

   
  }
}

export default App;
