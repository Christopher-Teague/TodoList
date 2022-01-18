import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';



function App() {

  ///// const for new list item and list \\\\\
  const [newTodo, setNewTodo] = useState("");
  const [list, setList] = useState([]);

  ///// const for todoItem object \\\\\
  const todoItem = {
    text: newTodo,
    complete: false
  }

  ///// function when clicking form button \\\\\
  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    ///// checks that there is an input when button is clicked \\\\\
    if (newTodo.length === 0) {
      return;
    }
    ///// sets list with existing entries and adds new item \\\\\
    setList([...list, todoItem])
    setNewTodo("");
  }

  ///// filters list to items that do not match passed index \\\\\
  const handleListDelete = (idxToDelete) => {
    const filteredList = list.filter((todo, idx) => {
      ///// returns new list of items without item at idxToDelete \\\\\ 
      return idx !== idxToDelete;
    });

    setList(filteredList);
  };

  ///// switches the "complete" key to the opposite when checked \\\\\
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

  // console.log("current list: " + list);

  return (
    <div className="container mt-3" style={{ textAlign: "center" }}>
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

      <hr />

      <div>

        {list.map((todo, idx) => {

          return (
            ///// passes all props to TodoList component \\\\\            
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
