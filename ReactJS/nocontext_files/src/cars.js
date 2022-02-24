import React from "react";
import BaseClass from "./baseClass";

class Cars extends React.Component{
    render(){
        return(
            <div>
                {Object.keys(this.props.cars).map(carNO =>(
                    <BaseClass>
                    keys = {carNO}
                    name = {this.props.cars[carNO].name}
                    price = {this.props.cars[carNO].price}
                    PriceInc = {() => {
                        this.props.PriceInc(carNO)
                    }}
                    PriceDec = {() => {
                        this.props.PriceDec(carNO)
                    }}
                    </BaseClass>
                ))}

            </div>
        )
    }
}
export default Cars;