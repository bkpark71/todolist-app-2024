import { useRef } from "react";

function App() {
    const upScroll = useRef(null);

    return (
        <div>
            <div
                ref={upScroll}
                style = {{height:"30vh", backgroundColor:"lightgray"}}
            >화면 상단부 !!!</div>
            <div
                style = {{height:"100vh", backgroundColor:"yellowgreen"}}
            >화면 하단부 !!!</div>
            <button onClick={() => {
                if(upScroll.current) {
                    upScroll.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                }
            }}>화면 스크롤</button>
        </div>
    )
}

export default App;
