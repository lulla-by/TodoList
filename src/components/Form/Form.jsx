import React from "react";
import "./style.css";

function Form(props) {

  

  return (
    <>
     <div className="form">
        <div className="input-group">
          <label>제목</label> <input className="input-box"
            type="text"
            value={props.title}
            onChange={props.onChangeHandlerTitle}
          />
          <label>내용</label> <input className="input-box"
            type="text"
            value={props.body}
            onChange={props.onChangeHandlerBody}
          />
          
          <button className="btn"
            onClick={props.onSubmitHandler}
          >
            추가하기
          </button>
        </div>
      </div>
    </>

  )
}


export default Form;