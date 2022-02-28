import React from 'react';

const BaseClass = props => (
    <React.Fragment>
        <p>Name: {props.name}</p>
        <p>Price: {props.price}</p>
        <button onClick={props.PriceInc} >PriceInc</button>
        <button onClick={props.PriceDec}>PriceDec</button>
    </React.Fragment>
);
export default BaseClass;
