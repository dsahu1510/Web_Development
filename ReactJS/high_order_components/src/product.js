import React from 'react';
import hoc from './hoc';

class ProductList extends React.Component{
    
    render(){
        return(
            <div>
                Products count,<h1 onClick={this.props.updateCounter}>{this.props.counter}</h1>
            </div>
        )
    }
}
const ProductHOC = hoc(ProductList,200);
export default ProductHOC;