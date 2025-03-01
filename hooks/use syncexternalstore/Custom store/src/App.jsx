import React,{useState, useEffect} from 'react'
import { useSyncExternalStore } from 'react';
const store = (() => {
  let state ={ count:0};
  const listeners = new Set();
return{
  getState:() => state,
  setState:(newState) =>{
    state ={...state,...newState};
    listeners.forEach((listener) => listener()); 
   },
   subscribe:(listener) =>{
    listeners.add(listener);
    return() => listeners.delete(listener);
   },
};
}  

)();

function App() {
  const count = useSyncExternalStore(
    store.subscribe,
    () => store.getState().count
  );
  const increment = () => {
    store.setState({ count: count+1});
  };
  return(
    <div>
      <h1> Count: {count}</h1>
      <button onClick={increment}></button>
    </div>
  );
}

export default App;
