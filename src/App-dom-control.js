import {useRef, useState} from 'react';

function App() {
  const upRef = useRef(null);

  const scrollUP = () => {
    if(upRef.current) {
      upRef.current.scrollIntoView();
        // {behavior : "smooth"});
      // )
    };
  
  }
 
  return (
    <div>
      {/* <input type="text" ref={inputTag} /><br/>
      <input type="text"  /><br/>
      <input type="text" /><br/>
      <button onClick={()=>inputTag.current.focus()}>신규사용자</button>
      </div>  */}
      <div
        ref = {upRef}
        style = {{height:"30vh", backgroundColor:"lightgray"}}>
        up-Page !!!
      </div>
      <div
        style = {{height:"100vh", backgroundColor:"lightyellow"}}>
        down-Page !!! \버튼을 눌러서 스크롤해보세요.
      </div>

    <button onClick={scrollUP}>페이지 스크롤</button>
    </div>
  );
}

export default App;
