import { useState } from "react";
import Form from "../components/Form/Form";
import List from "../components/List/List";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";

function TodoList() {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트공부하기",
      body: "리액트 기초를 공부해봅시다",
      isdone: false
    },
  ]);

  const onChangeHandlerTitle = (e) => {
    setTitle(e.target.value);
  }
  const onChangeHandlerBody = (e) => {
    setBody(e.target.value);
  }
  const onSubmitHandler = () => {
    setTodos((prevState) => {
      console.log("이전 state: ", prevState)
      return ([...todos, { id: todos.length + 1, title: title, body: body, isdone: false }])
    })
  }

  return (

    <div className="container">
      <Layout>
        <Header />
        <Form body={body} title={title} onSubmitHandler={onSubmitHandler} onChangeHandlerBody={onChangeHandlerBody} onChangeHandlerTitle={onChangeHandlerTitle} />
        <List todos={todos} setTodos={setTodos} />

      </Layout>


    </div>





  )
}


export default TodoList;