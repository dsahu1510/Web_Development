import React from 'react';
import BuggyCounter from './buggyCounter';
import ErrorBoundary from './errorbndry';

class App extends React.Component{
  render(){
    return(
      <div>
        
      <ErrorBoundary>
      <BuggyCounter></BuggyCounter>
      </ErrorBoundary>
      </div>
    )
  }
}
export default App;