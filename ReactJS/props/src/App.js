import React from 'react';
import User from './props';
import Contact from './contact';
import Practise from './practise';

class App extends React.Component{

  username = 'Devyani';
  contact_me = 7389955355;
  codes_in = 'ReactJS';

  render(){
    return(
      <div>

          <User uname= {this.username}/>
          <Contact mobile= {this.contact_me}/>
          <Practise code = {this.codes_in}/>
      </div>
    )
  }
}



// function App(username, contact_me){

//   username = 'devyani';
//   contact_me = 123456;

//   return(
//     <div>
//       <User uname = {username}/>
//       <Contact mobile = {contact_me}/>
//     </div>
//   )
// }
export default App;