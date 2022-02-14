import React from "react";

class State extends React.Component{

    render(){

        return(

            <div>
                <h1>Users count, {this.props.users.length}</h1>
            </div>
        )
    }
}
export default State;