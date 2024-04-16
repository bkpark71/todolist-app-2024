import {useRef, useState, useEffect} from 'react';

function App() {
  const inputRef = useRef(null);
  useEffect(()=> {
    inputRef.current.focus()
  } , []);
  return (
    <div>
        <h1>UseRef - Dom control test</h1>
        <input type="text" ref={inputRef}/> <br/>
        <input type="text" /> <br/>
        <input type="text" /> <br/>
        <button onClick={()=>{inputRef.current.focus()}}>클릭</button>
    </div>
  );
}

export default App;
