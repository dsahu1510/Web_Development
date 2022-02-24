import React from 'react';

class BaseClass extends React.Component{

    render(){
        return(
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.price}</p>
                <button onClick={this.props.PriceInc}></button>
                <button onClick={this.props.PriceDec}></button>
            </div>
        )
    }
}
export default BaseClass;