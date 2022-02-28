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
    var car = Object.assign({}, this.state.cars);
    car[selectedCar].price = car[selectedCar].price + 1;
    this.setState({
      car
    });
  }

  PriceDec = (selectedCar) =>{
    var car = Object.assign({}, this.state.cars);
    car[selectedCar].price = car[selectedCar].price - 1;
    this.setState({
      car
    });
  }
 
  render(){
    return(
      <div className='App'>
      <ProductList>
        car = {this.state.cars}
        PriceInc = {this.PriceInc}
        PriceDec = {this.PriceDec}
      </ProductList>
        
      </div>
    )
  }
}

export default App;
