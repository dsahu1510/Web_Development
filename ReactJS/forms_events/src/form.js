import React from "react";

class Form extends React.Component{

    constructor(){
        super();
        this.state= {
            // username:[],
            // password:[]
            username:"",
            password:""
        }
    }
    updateState = (event) => {
        console.log("updated");
        var value = event.target.value; //value is reserved keyword
        var name = event.target.name; //name is als a reserved keyword no other var can be used.
        this.setState({[name]:value});
    }

    formSubmit = (event) => {
        console.log("form updated");
        event.preventDefault();
        //console.log(this.state);
    }

    btnClick = () => {
        console.log("button clicked");
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <h1>Login Page</h1>
                    <form onSubmit={this.formSubmit}>
                    <input type='text' name ='username' onChange={this.updateState} placeholder="username" ></input> <br></br><br></br>
                    <input type='password' name ='password' onChange={this.updateState} placeholder="password"></input><br></br><br></br>
                    <input type='email' name ='email' onChange={this.updateState} placeholder="email here"></input><br></br><br></br>
                    <button onClick={this.btnClick}>Click me</button>
                    </form>

                    {/* username {this.state.username} <br></br>
                    password {this.state.password}  to show data on UI we use format*/} 
            </div>
        )
    }
}
export default Form;