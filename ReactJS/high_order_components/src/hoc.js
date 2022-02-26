import React, {Component}from 'react';

const hoc = (Component, data) => {
    
    return class extends React.Component{
        constructor(){
            super();
            this.state = {
                counter: data
            }
        }
        updateCounter = () =>{
            this.setState({counter:this.state.counter+1})
        }
        render(){
            return(
                <React.Fragment>
                    <Component counter={this.state.counter} updateCounter = {this.updateCounter}></Component>
                </React.Fragment>
            )
        }
    }
}
export default hoc;