import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

function App() {
  let [count, setCount]= useState(1);
  return (
    <div>
        <h1>Num of comments {count}</h1>
        <button onClick= {() => setCount(count + 1) }>Update counter</button>
    </div>
    
  );
}
export default App;
