import axios from "axios";
import React from "react";

class User extends React.Component{

        componentDidMount(){
        console.log("did mount called");
        axios.get("http://localhost:8785/users")
        .then (Response =>
            {console.log(Response.data);
            },
            error =>{console.error(error);
            }
            
        )
    }
    render(){

        return(

            
            <div>Table in process
            </div>
        )

    }   
    
}
export default User;