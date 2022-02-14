import React from 'react';
import axios from 'axios';
import State from './State';

class App extends React.Component{

  constructor(){
    console.log("app component in process");
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    console.log("didmount called");
    axios.get("https://jsonplaceholder.typicode.com/users").then(
      Response => {
        console.log(Response.data);
        this.setState({users:Response.data})
      }
    )
    
  }

  render(){
    console.log("render called")
    return(

      <div>
        <h1>this is an app component</h1>
        <State users = {this.state.users}></State>
      </div>
    )
  }
}

export default App;
