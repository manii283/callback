import React, {useState, useCallback} from 'react';
import './App.css';
import ChildA from './ChildA';

function App() {

  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);
  const Learing = useCallback( ()=> {
    //opration
  }, []);
  return (
    <div className="App">
      <h1>useCallback</h1>
       <ChildA Learing={Learing} count={count} />
       <h1>{add}</h1>
       <button onClick={() => setAdd(add + 1)}>Add</button>
       <h1>{count}</h1>
       <button onClick={() => setCount(count + 10)}>Count</button>
    </div>
  );
}

export default App;
