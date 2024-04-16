import React, { useRef, useState } from "react";

const App = () => {
  const [state, setState] = useState(0);
  const ref = useRef(0);

  const onClickState = () => {
    console.log("state : " + state);
    setState((prev) => prev + 1);
  };

  const onClickRef = () => {
    console.log("ref : " + ref.current);
    ref.current += 1;
  };
  return (
    <div>
      State : {state} <button onClick={onClickState}>State 올리기</button>
      <br />
      Ref : {ref.current}
      <button onClick={onClickRef}>Ref 올리기</button>
    </div>
  );
};

export default App;