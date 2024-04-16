import {useReducer, useState} from 'react';
const initialState = {
  count : 0,
  todolist : []
}

const ACTION_TYPES = {
  add : "add",
  delete : "delete",
  completed : "completed"
}

function reducer(state,action) {
  switch (action.type) {
    case ACTION_TYPES.add :
      break;
    case ACTION_TYPES.delete : 
      break ;
    case ACTION_TYPES.completed :
      break ;
    default : 
      throw Error("unknown action type");
  }
}
function App() {
  const [todo, setTodo] = useState("");
  const stateCnst = useState(0);
  console.log(stateCnst);
  const onChange = (event) => {
    setTodo(event.target.value);
  }
  const [todolist, setTodolist] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(a.count);
  const addTodo = (event) => {
    event.preventDefault();
    setTodo("");
    setTodolist(cur => [...cur, todo]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>todolist-app</h1>
      </header>
      <form onSubmit={addTodo}>
        <input type="text" value={todo} onChange={onChange} placeholder="할 일을 입력하세요" />
        <button type="submit">Add</button>
        <hr />
      </form>
      <ul>
        {todolist.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
    </div>
  );
}

export default App;