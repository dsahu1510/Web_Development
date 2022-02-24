import React from 'react';
import ProductList from './ProductList';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      cars: {
        car001: {name : 'Honda', price: 100},
        car002: {name: 'Ferrari', price: 200},
        car003: {name: 'BMW', price: 150}
      }
    }
  }
  PriceInc = (selectedCar) =>{
    var cars = Object.assign({}, this.state.cars);
    cars[selectedCar].price = cars[selectedCar].price + 1;
    this.setState({
      cars
    });
  }

  PriceDec = (selectedCar) =>{
    var cars = Object.assign({}, this.state.cars);
    cars[selectedCar].price = cars[selectedCar].price - 1;
    this.setState({
      cars
    });
  }
 
  render(){
    return(
      <div className='App'>
      <ProductList>
        cars = {this.state.cars}
        PriceInc = {this.PriceInc}
        PriceDec = {this.PriceDec}
      </ProductList>
        
      </div>
    )
  }
}

export default App;
