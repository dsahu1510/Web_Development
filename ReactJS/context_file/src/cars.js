import React from "react";
import MyContext from "./MyContext";
import BaseClass from "./BaseClass";

class Cars extends React.Component{
    render(){
        
        return(
            <MyContext.Consumer>
            {
                context => (
                <React.Fragment>
                    
                    {Object.keys(context.cars).map(carID => (
                        <BaseClass
                            key={carID}
                            name={context.cars[carID].name}
                            price={context.cars[carID].price}
                            PriceInc={() => context.PriceInc(carID)}
                            PriceDec={() => context.PriceDec(carID)}
                        />
                    ))}
                </React.Fragment>
                )
            }
            </MyContext.Consumer>
        )
    }
}

export default Cars;