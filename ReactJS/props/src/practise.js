import React from "react";
//import User from "./props";

class Practise extends React.Component{

    render(){

        return(

            <div>
                <h1>
                    {/* ({this.props.uname} + {this.props.code}) */}
                    Practising {this.props.code}
                </h1>
            </div>
        )
    }
}
export default Practise;