import React from "react";


function Todo({ todos, setTodos, todo, i }) {

  const a = <button className="btn" onClick={() => {
    let copy = [...todos]
    copy[i].isdone = true
    setTodos(copy);
  }}>확인</button>

  const b = <button className="btn" onClick={() => {
    let copy = [...todos]
    copy[i].isdone = false
    setTodos(copy);
  }}>취소</button>


  return (
    <>
      <div className="todo" key={todo.id}>
        <h2>{todo.title}</h2>
        <p>{todo.body}</p>

        <button className="btn" onClick={() => {
          let copy = [...todos]
          copy.splice(i, 1)
          setTodos(copy);
        }}>삭제하기</button>

        {
          todo.isdone == false ? <>{a}</> : <>{b}</>
        }
      </div>
    </>
  )
}



export default Todo;