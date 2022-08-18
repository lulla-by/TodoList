import React from "react";
import "./style.css";
import Todo from "../todo/Todo";


function List({ todos, setTodos }) {

  return (
    <>
      <div>
        <h1>Working...🔥</h1>
        <div className="todos-container" >
          {
            todos.map(function (todo, i) {
              if (todo.isdone == false) {
                return <Todo todos={todos} setTodos={setTodos} todo={todo} i={i} />
              }
            }
            )
          }
        </div>
      </div>

      <div>
        <h1>Done...🎉</h1>
        <div className="todos-container">
          {
            todos.map(function (todo, i) {
              if (todo.isdone == true) {
                return <Todo todos={todos} setTodos={setTodos} todo={todo} i={i} />
              }
            }
            )
          }
        </div>
      </div>
    </>
  )
}
export default List;