import React from 'react';
import Child from './childcomp';

class Parent extends React.Component{
    constructor(){
        super();
        this.inputRefs = React.createRef()
    }

    clickHandler = () => {
        this.inputRefs.current.focus()
    }

    render(){
        return(
            <div>
                <h1>Registration form</h1>
                <Child ref = {this.inputRefs}></Child>
                <button onClick={this.clickHandler}>submit</button>
            </div>
        )
    }
}
export default Parent;