import React, { useState } from "react";
import Modal from "../modal/modal";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { checkedToggle } from "../slices/userSlice";
import { IoIosCloseCircle } from "react-icons/io";
import { ImPlus, ImPencil } from "react-icons/im";

function InputWithBut() {

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [idModal, setIdModal] = useState(null);
  const checked = useSelector((state) => state.checked);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    if (todo !== "") {
      setTodos([...todos].concat(newTodo));
    }
    setTodo("");
  }

  function deleteTodo(id) {
    dispatch(checkedToggle());
    setIdModal(id);
  }
  function openModal(id) {
    setModalActive(true);
    setIdModal(id);
  }
  function onCloseHandler() {
    setModalActive(false);
  }

  return (
    <div>
        <Form onSubmit={handleSubmit}>
          <div>
            {todos.map((todo) => (
              <div key={todo.id}>
                <Text>
                  {todo.text}
                  <p onClick={openModal}>
                    <ImPencil />
                  </p>
                </Text>
              </div>
            ))}
            <input
              type="text"
              placeholder="Ввести заголовок списка"
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
            />
            <br />

            <button type="submit">
              <ImPlus style={{ fontSize: 10, paddingRight: 2 }} />
              Добавить задачу
            </button>
            <span>
            <IoIosCloseCircle onClick={() => deleteTodo(todo.id)}/>
            </span>
          </div>
        </Form>
      

      {modalActive && (
        <Modal
          idModal={idModal}
          todos={todos}
          setTodos={setTodos}
          onCloseHandler={onCloseHandler}
        />
      )}
    </div>
  );
}
export default InputWithBut;

const Form = styled.form`
  height: auto;
  min-width: 300px;
  border-radius: 5px;
  font-size: 17px;
  display: flex;
  grid-template-columns: repeat(4, 1fr);
  padding-bottom: 7px;
  text-align: center;
  
  input {
    width: 270px;
    height: 30px;
    margin-top: 5px;
    border: solid #0e78cf;
    border-radius: 10px;
    text-align: center;
    
  }
  button {
    background-color: #0079bf;
    color: white;
    margin-right: 5px;
    font-size: 14px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    width: 200px;
  }
  span{
    color: white;
    font-size: 20px;
    cursor: pointer;
  }
`;
const Text = styled.div`
  background: rgba(70, 70, 70, 0.7);
  border: 1px solid gray;
  width: 270px;
  border-radius: 5px;
  margin-left: 14px;
  padding-top: 10px;
  color: white;
  
  p {
    display: flex;
    flex-direction: row-reverse;
    margin-top: -19px;
    padding-right: 15px;
    cursor: pointer;
  }
`;


