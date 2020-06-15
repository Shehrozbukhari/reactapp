import React, {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';

function App() {
  let [count, setCount]= useState(1)
  return (
        <h1>Num of comments {count}</h1>
        <button onlcick="() => {
        useState(count+1)
        }"></button>
    
  );
}

export default App;
