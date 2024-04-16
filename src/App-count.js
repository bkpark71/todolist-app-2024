import {useRef, useState} from 'react';

function App() {
  const [countState, setCountState] = useState(0);
  const onChangeState = () => {
    setCountState((prevCnt) => prevCnt + 1);
    console.log("state : " , countState);
  }
  const onChangeLocal = () => {
    countLocal ++;
    console.log("local : " , countLocal);
  }
  let countLocal = 0;
  const countRef = useRef(0);
  const onChangeRef = () => {
    countRef.current ++;
    console.log("ref : " , countRef.current);
  }
  console.log("rendered !!!");
  console.log("after render , state : " , countState);
  console.log("after render , local : " , countLocal);
  console.log("after render , ref : " , countRef.current);
  return (
    <div>
        <h1>UseRef test</h1>
        <p>{countState}</p>
        <button onClick={onChangeState}>state count up</button>
        <p>{countLocal}</p>
        <button onClick={onChangeLocal}>local count up</button>
        <p>{countRef.current}</p>
        <button onClick={onChangeRef}>Reference count up</button>
    </div>
  );
}

export default App;
