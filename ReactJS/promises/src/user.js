import React from 'react';
import axios from 'axios';

class User extends React.Component{

    componentDidMount(){

        console.log("component called")
        axios.get("https://jsonplaceholder.typicode.com/users").then(
            Response => {
                console.log(Response.data);
            },
            error =>{
                console.log(error);
            }
            
        )

    }
    render(){
        return(
            <div>
                <h1>user Component</h1>
            </div>
            
        )
    }
}
export default User;