
import React, {Suspense} from "react";
// import LazyLoading from "./code_splitting";
const Lazycomponent = React.lazy(() => import('./code_splitting'));

function App() {
  return (
    <div className="App">
      <h1>app Component</h1>
      <Suspense fallback = {<h1>Loading, please wait.......</h1>}>
      <Lazycomponent></Lazycomponent>
      </Suspense>
    </div>
  );
}

export default App;
