import React from 'react';

const TodoList = (props) => {

    ///// bold styling from App.css \\\\\
    const todoClasses = ["bold"];

    ///// is item property complete is true - sets style \\\\\
    if (props.todo.complete) {
        todoClasses.push("line-through italic");
    }

    return (
        <div className="mt-3">
            <span className={todoClasses.join(" ")}>{props.todo.text}</span>
            <input onChange={(event) => {
                props.handleCheckComplete(props.idx);
            }}
                checked={props.todo.complete} type="checkbox" className="ms-3" />
            <button className="ms-3 btn btn-danger btn-sm" onClick={(event) => {
                props.handleListDelete(props.idx);
            }}>Delete</button>
        </div>
    )
}

export default TodoList;