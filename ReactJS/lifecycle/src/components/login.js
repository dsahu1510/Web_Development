import React from 'react';

class Login extends React.Component{

    constructor(){
        super();
        this.state= {
            username:""
        }
        console.log("constructor called");
    }
    componentDidMount(){
        console.log("did mount called");
    }
    componentDidUpdate(){
        console.log("update called");
    }
    updateState = (event) =>{
        var value = event.target.value;
        this.setState({username: value})
    }
    render(){
        console.log("render called")
        return(

            <div>
                <h1>Login component called</h1>
                <input type='text' onChange={this.updateState}></input>
            </div>
        )
    }
    componentWillUnmount(){
        console.log("unmount called");
    }
}

export default Login;