import React from 'react';

class Login extends React.Component{

    constructor(){
        super();
        this.state= {
            username:"",
            password:""
        }
    }
    
    updateState = (event) =>{
        var value = event.target.value;
        var name= event.target.name;
        this.setState({[name]: value})
    }
    authenticate = () =>{
        if(this.state.username == 'devyani' && this.state.password == '12345'){
            localStorage.setItem('isUserLoggedIn',true);
            //this.props.history.push("/dashboard")
        }
        else{
            alert("username/ password mismatched");
        }
    }
    render(){
        
        return(

            <div>
                <form onSubmit={this.authenticate}>
                {/* <h1>Login component called</h1> */}
                <input type='text'name= "username"placeholder="username here"onChange={this.updateState}></input>
                <input type='text'name='password' placeholder='enter password' onChange={this.updateState}></input>
                <button>login</button>
                </form>
            </div>
        )
    }
    
}

export default Login;