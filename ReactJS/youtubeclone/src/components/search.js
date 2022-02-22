import React from 'react';

class SearchBar extends React.Component{

    
    constructor(){
        super();
        this.state = {

            term:""
        }
    }

    formSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.onVideoSearch(this.state.term);
    }
    
    render(){
        return(
            <div>
                    <h1>SearchBar</h1>
                    <form onSubmit={this.formSubmit}>
                        
                        <input type = 'text' name='term' placeholder ='Search Here' onChange= {(event) => {this.setState({term:event.target.value})}}
                        ></input>

                        <button onClick={this.btnClick}>Click Me!!</button>

                    </form>

                </div>
            )
    }
}
export default SearchBar;