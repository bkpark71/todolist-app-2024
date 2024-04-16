import { useReducer, useState } from "react";
const ACTION_TYPES = {
    up : "up",
    down : "down" ,
    increment : "increment",
    decrement : "decrement"
}

function reducer(state, action) {
    if(action.type =="increment") {
        return {
            age : state.age + 1
        }
    }else if(action.type =="decrement") {
        if ( state.age == 0 ) 
            return {
                age : 0
            }
        return {
            age : state.age - 1
        }
    }
    throw Error("unknown error ");
}
function moneyReducer(state, action) {
    const money = parseInt(action.payload);
    if(action.type =="up") { // 입금
        return {
            balance : state.balance + money
        }
    }else if(action.type =="down") { // 출금
        if ( state.balance >= money ) 
            return {
                balance : state.balance - money
            }
        return  { balance : state.balance }
    }
    throw Error("unknown error ");
}

function App(){
    // const [age, setAge] = useState(0);
    const [state, dispatch] = useReducer(reducer, {age : 0});
    const [money, setMoney] = useState(1000);
    const [stateMoney, dispatchMoney] = useReducer(moneyReducer, {user:"홍길동",balance:0})
    return (
        <div>
            <div>
                <p>{state.age}</p>
                {/* <button onClick={()=>{setAge((cur) => cur + 10)}}>나이 증가</button> */}
                <button onClick={() => dispatch({type : ACTION_TYPES.increment})}>한살씩 나이 증가</button>
                <button onClick={() => dispatch({type : ACTION_TYPES.decrement})}>한살씩 나이 감소</button>
            </div>
            <div>
                <input type="number" value={money} 
                    onChange={(event)=>setMoney(event.target.value)}
                    min="100" max="10000" step="100" />
                <p>{stateMoney.balance}</p>
                <button onClick={()=> dispatchMoney({type:ACTION_TYPES.up, payload: money})}>예금입금</button>
                <button onClick={()=> dispatchMoney({type:ACTION_TYPES.down, payload: money})}>예금출금</button>
            </div>
           
            {/* <button onClick={()=>{setBalance((cur) => cur + 10000)}}>예금 입금</button>
            <button onClick={()=>{setBalance((cur) => cur - 100000)}}>예금 출금</button> */}
        </div>
    );
}

export default App;