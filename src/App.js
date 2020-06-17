import React, { useState } from 'react';
// import logo from './logo.svg';
import './style.css';

function App() {
  let [count, setCount]= useState(1);
  let [ismorning, setTimee]= useState(true);
  return (
    <div ClassName="{ismorning ? 'nighttime' : 'daytime'}">
        <h1>Num of commentss {count}</h1>
        <button onClick= "{() => setCount(count + 1) }">Update counterr</button>
        <button onClick= "{() => setTimee(!ismorning) }">Time Changer</button>
        
    </div>
    
  );
}
export default App;
