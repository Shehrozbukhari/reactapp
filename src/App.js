import React, { useState } from 'react';
// import logo from './logo.svg';
import './style.css';

function App() {
  let [count, setCount]= useState(1);
  let [timechangee, setTimee]= useState(false);
  return (
    <div ClassName={`daytime ${timechangee ? 'nighttime' : ''}`}>
        <h1>Num of comments {count}</h1>
        <button onClick= "{() => setCount(count + 1) }">Update counter</button>
        <button onClick= "{() => setTimee(!timechangee) }">Time Changer</button>
        
    </div>
    
  );
}
export default App;
