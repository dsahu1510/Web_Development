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
                 {this.props.users.length}

             </React.Fragment>
         )
    }
}

function mapDispatchToProps(dispatch){
        return bindActionCreators({getUsers:getUsers},dispatch)
}

function mapStateToProps(appS){
        console.log("appS", appS);
     return {users:appS.users}
    }
// export default connect( (appS) => {
//     console.log("appS", appS);
//  return {users:appS.users}
// }, (dispatch) => {
//     return bindActionCreators({getUsers:getUsers},dispatch)
// } )(User);

export default connect(mapStateToProps, mapDispatchToProps )(User);