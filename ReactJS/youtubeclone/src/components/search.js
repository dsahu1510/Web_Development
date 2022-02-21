import React from 'react';

class SearchBar extends React.Component{

    
    // constructor(){
    //     super();
    //     this.state = {

    //         term:""
    //     }
    // }

    termUpdate = (event)=> {
        console.log("getting an update");
        var value = event.target.value;
        var name = event.target.name;
        this.setState({[name]: value});
    }

    formSubmit = (event) => {
        console.log("form updated");
        event.preventDefault();
        //console.log(this.state);
    }
    btnClick = (event) => {
        console.log("btn clicked");
        console.log(this.state)
    }
    render(){
        return(
            <div>
                
                    <h1>SearchBar</h1>
                    <form onSubmit={this.formSubmit}>
                        
                        <input type = 'text' name='term' onChange={this.termUpdate} placeholder ='Search Here'></input>

                        <button onClick={this.btnClick}>Click Me!!</button>

                    </form>

                
            </div>
        )
    }
}
export default SearchBar;