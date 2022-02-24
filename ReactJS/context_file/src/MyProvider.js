import React from 'react';
import MyContext from './MyContext';

class MyProvider extends React.Component{

    constructor(){
        super();
        this.state = {
            cars: {
                carNo101: {name: 'BMW', price: 200},
                carNo102: {name: 'honda', price: 105},
                carNo103: {name: 'Kia', price: 107}
            }
        }
    }
    render(){
        return(
            <div>
               <MyContext.Provider
               value={{
                   cars:this.state.cars,
                   PriceInc: carSelected =>{
                       const cars= Object.assign({},this.state.cars);
                       cars[carSelected].price = cars[carSelected].price + 1;
                       this.setState({
                           cars
                        });
                    },
                   PriceDec : carSelected =>{
                        const cars= Object.assign({},this.state.cars);
                        cars[carSelected].price = cars[carSelected].price - 1;
                        this.setState({
                            cars
                        });
                    }
                }}
               ></MyContext.Provider>
               {this.props.children}
            </div>
        )
    }
}
export default MyProvider;