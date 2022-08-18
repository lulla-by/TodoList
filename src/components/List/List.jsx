import React from "react";
import "./style.css";
function List ({ todos, setTodos }) {


 return(
  <>
  <div>
        <h1>Working...🔥</h1>
        <div className="todos-container">
          {
            todos.map(function (todo, i) {
              if (todo.isdone == false) {
                return <div className="todo" key={todo.id}>
                  <h2>{todo.title}</h2>
                  <p>{todo.body}</p>

                  <button className="btn" onClick={() => {
                    let copy = [...todos]
                    copy.splice(i, 1)
                    setTodos(copy);
                  }}>삭제하기</button>
                  <button className="btn" onClick={() => {
                    let copy = [...todos]
                    copy[i].isdone = true
                   setTodos(copy);
                  }}>확인</button>

                </div>
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
                return <div className="todo" key={todo.id}>
                  <h2>{todo.title}</h2>
                  <p>{todo.body}</p>

                  <button className="btn" onClick={() => {
                    let copy = [...todos]
                    copy.splice(i, 1)
                    setTodos(copy);
                  }}>삭제하기</button>

                  <button className="btn" onClick={() => {
                    let copy = [...todos]
                    copy[i].isdone = false
                    setTodos(copy);
                  }}>취소</button>
                </div>
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