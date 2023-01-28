import { useRef } from "react";
import { useState } from "react";
import "./App.css";
import TodoItem from "./TodoItem";
import { RxListBullet } from "react-icons/rx";
import { useEffect } from "react";

let count = 1;
const placeholderText = "Enter a new task...";
const LOCAL_STORAGE_KEY = "todoApp";

function App() {
  const [list, setList] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedList) {
      setList(storedList);
    }
  }, []);

  useEffect(() => {
    if (list.length !== 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
    } else {
      localStorage.clear();
    }
  }, [list]);

  function handleAdd() {
    let text = inputRef.current.value;

    if (text == "" || text == " ") return;

    const todo = {
      title: text,
      done: false,
      id: count++,
    };

    const newList = [...list, todo];
    setList(newList);
    inputRef.current.value = null;
  }

  function handleDone(id, done) {
    const newList = [...list];

    for (let i = 0; i < newList.length; i++) {
      const item = newList[i];
      if (item.id == id) {
        item.done = !done;
      }
    }

    setList(newList);
  }

  function handleDelete(id) {
    const newList = [...list];

    for (let i = 0; i < newList.length; i++) {
      const item = newList[i];
      if (item.id === id) {
        newList.splice(i, 1);
      }
    }
    setList(newList);
  }

  return (
    <div className="App">
      <header>
        <h1>
          Todo App <RxListBullet fontSize={"1.4em"} />
        </h1>
      </header>
      <section className="form">
        <input type="text" ref={inputRef} placeholder={placeholderText} />
        <button className="addBtn" onClick={handleAdd}>
          <span className="plus">+</span>
          <span className="addTask">Add task</span>
        </button>
      </section>

      {list.map((item) => {
        return (
          <TodoItem
            todo={item}
            handleDone={handleDone}
            handleDelete={handleDelete}
            key={item.id}
          />
        );
      })}
    </div>
  );
}

export default App;
