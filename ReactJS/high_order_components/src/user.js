import React from 'react';
import hoc from './hoc';

class UserList extends React.Component{

    render(){
        return(
            <div>
                Users count,<h1 onClick={this.props.updateCounter}>{this.props.counter}</h1>
            </div>
        )
    }
}
const UserHoc = hoc(UserList, 100);
export default UserHoc;