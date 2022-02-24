// context makes data globally available for all the components.
// without passing the props in each level.

import React from 'react';
import Cars from './cars';

class ProductList extends React.Component{
    render(){
        return(
            <div className='Plist component'>
                <Cars>
                    cars = {this.props.cars}
                    PriceInc = {this.props.PriceInc}
                    PriceDec = {this.props.PriceDec}
                </Cars>
            </div>
        )
    }
}
export default ProductList;