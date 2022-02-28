import React from "react";
import MyContext from "./MyContext";
import BaseClass from "./BaseClass";

const Cars = () => (
    <MyContext.Consumer>
        {
            context => (
            <div>
                {Object.keys(context.cars).map(carID => (
                    <BaseClass
                        key={carID}
                        name={context.cars[carID].name}
                        price={context.cars[carID].price}
                        PriceInc={() => context.PriceInc(carID)}
                        PriceDec={() => context.PriceDec(carID)}
                    />
                ))}
            </div>
        )}
    </MyContext.Consumer>
)
export default Cars;