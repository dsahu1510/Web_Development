import React from 'react';
//import MyContext from './MyContext';
import MyProvider from './MyProvider';
import ProductList from './productList';

class App extends React.Component{

  render(){
    return(
      <div>
        <MyProvider>
        <ProductList></ProductList>
        </MyProvider>
        
      </div>
    )
  }
}
export default App;
