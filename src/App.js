import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';



function App() {

  const [newTodo, setNewTodo] = useState("");
  const [list, setList] = useState([]);

  const todoItem = {
    text: newTodo,
    complete: false
  }

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    if (newTodo.length === 0) {
      return;
    }

    setList([...list, todoItem])
    setNewTodo("");
  }

  const handleListDelete = (idxToDelete) => {
    const filteredList = list.filter((todo, idx) => {
///// returns new list of items without item at idxToDelete \\\\\ 
      return idx !== idxToDelete;
    });

    setList(filteredList);
  };

  const handleCheckComplete = (idx) => {
    const updatedList = list.map((todo, i) => {
      if (idx === i) {
        todo.complete = !todo.complete;
        // const updatedList ={...list, complete: !list.complete};
        // return updatedList;
      }
      return todo;
    });
    setList(updatedList);
  }

  console.log("current list: " + list);

  return (
    <div className="container mt-3" style={{ textAlign: "center"}}>
      <div>
        <form onSubmit={(event) => {
          handleNewTodoSubmit(event);
        }}>
          <input type="text" value={newTodo} onChange={(event) => {
            setNewTodo(event.target.value);
          }} />
          <button>Add Task</button>
        </form>
      </div>
      
      <hr/>

      <div>

        {list.map((todo, idx) => {


          return (
            
            <TodoList key={idx} todo={todo}
              handleCheckComplete={handleCheckComplete}
              idx={idx}
              handleListDelete={handleListDelete}
            />
            
          );
        })}
      </div>
    </div>
  );
}

export default App;
