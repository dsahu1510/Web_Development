import React from 'react';

class BaseClass extends React.Component{
    render(){
        return(
            <div>
                <p>Name : {this.props.cars.name}</p>
                <p>Price: {this.props.cars.price}</p>
                <button onClick={this.props.PriceInc}></button>
                <button onClick={this.props.PriceDec}></button>
            </div>
        )
    }
}
export default BaseClass;