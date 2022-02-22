import React from 'react';

class SearchBar extends React.Component{

    
    constructor(){
        super();
        this.state = {

            term:""
        }
    }
    logout = () =>{
        localStorage.removeItem("isUserLoggedIn");
        this.props.history.push("/login");
    }

    formSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.OnVideoSearch(this.state.term);
    }
    
    render(){
        return(
            <div>
                <h1>SearchBar</h1>
                <form onSubmit={this.formSubmit}>
                        
                <input type = 'text' placeholder ='Search Here' onChange= {(event) => {this.setState({term:event.target.value})}}
                ></input>

                <button>Click Me!!</button>
                <button onClick={this.logout}>Logout</button>
                </form>
            </div>
        )
    }
}
export default SearchBar;