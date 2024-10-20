import { useState } from "react";

import { Title } from "./components/Title/Title";

// const setStateExample = (initialValue: number) => {
//   let value = initialValue;

//   const setValue = (newValue: number | ((prevValue: number) => number)) => {
//     value = typeof newValue === "function" ? newValue(value) : newValue;
//   };

//   return [value, setValue];
// };
//

// li(hello) li(world) li(foo)
// li(hello) li(foo)

const TODOS = [
  { id: "1", title: "Hello", isCompleted: false },
  { id: "2", title: "World", isCompleted: true },
  { id: "3", title: "Foo", isCompleted: false },
];

function App() {
  const [count, setCount] = useState(1);
  const [value, setValue] = useState("");

  console.log("render");

  const isOdd = Boolean(count % 2);

  const title = isOdd ? (
    <Title>Hello from grandchildren</Title>
  ) : (
    <Title isGreen>Hello from grandchildren 2</Title>
  );

  return (
    <div>
      {title}
      <div>React to-do-list</div>
      <div>{count}</div>
      <div>{value}</div>
      <ul>
        {TODOS.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.isCompleted ? "line-through" : undefined,
            }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          console.log("onChange");
          setValue(event.target.value.slice(0, 5));
        }}
      />
      <button
        type="button"
        onClick={() => {
          setCount((prevState) => prevState + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
}

export default App;
