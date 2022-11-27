
import { useReducer } from "react";
import ReactDOM from "react-dom/client";

const reducer = (state, action) => {
  switch (action.type) {
    case "A-Z":
      state.sort((a,b) => {
        let x = a.name
        let y = b.name
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      })

    default:
      return state;
  }
};

const sorting = (state, sortBy, operand) => {
  state.sort((a,b) => {
    let x = a.sortBy
    let y = b.name
    //console.log(a)
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  })
}

export default function Todos({products}) {
  const [todos, dispatch] = useReducer(reducer, products);

  return (
    <>
      {todos.map((todo) => (
      <button key={todo.id} className="text-white px-1" onClick={() => dispatch({ type: "A-Z"})}>
        {todo.id}
      </button>
      ))}
    </>
  );
}