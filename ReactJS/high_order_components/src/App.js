import React from 'react';
import ProductList from './product';
import UserList from './user';

class App extends React.Component{

  render(){
    return(
      <div>
        <ProductList></ProductList>
        <UserList></UserList>
      </div>
    )
  }
}

export default App;
