import React from 'react';
import {connect} from 'react-redux';
import {getUsers} from '../actions/user_action';
import {bindActionCreators} from 'redux';
class User extends React.Component{

    componentDidMount(){
        console.log("Component did mount called");
        this.props.getUsers();
    }
    render(){
         return(
             <React.Fragment>

                 <h1>I am in user container</h1>

             </React.Fragment>
         )
    }
}

// function mapDispatchToProps(){

// }
export default connect( null, (dispatch) => {
    return bindActionCreators({getUsers:getUsers},dispatch)
} )(User);