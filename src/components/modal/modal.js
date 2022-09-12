import React from "react";
import styled from "styled-components";
import { IoIosArchive, IoMdList } from "react-icons/io";


const Modal = ({ todos, idModal, setTodos, onCloseHandler}) => {
  const deleteTodo = () => {
    const filtered = todos.filter((item) => item.id !== idModal);
    setTodos(filtered);
    onCloseHandler()  
  };



  return (

    <MMM0DAL>
        <ModalContent>
         <div>
          <Title>
          <p><IoIosArchive/></p> 
          <h3>some text</h3>
          </Title>
          <SecondTitle>
            <p><IoMdList/></p>
            <h3>Описание</h3>
            
          </SecondTitle>
          <Main>
          <textarea
          type='text'
          placeholder="Добавить более подробное описание..." 
          /> 
          </Main>
      <button  onClick={deleteTodo}>удалить</button>
      <button  onClick={onCloseHandler}>нет</button>
</div>
      </ModalContent>
    </MMM0DAL>
   
  );
};

export default Modal;

const MMM0DAL = styled.div`
   height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transition: 0.5s;
    button{
      font-size: 30px;
    }
`
const ModalContent = styled.div`
 padding: 20px;
  border-radius: 25px;
    background-color: white;
width: 1000px;
height: 1000px;
text-align: center;
font-size: 50px;
transform: scale(0.5);
transition: 0.4s all;
color: black;

`
const Title = styled.div`
display: flex;
h3{
  margin-top: 50px;
  padding-left: 30px;
  font-size: 40px;
}
`
const SecondTitle = styled.div`
display: flex;
margin-top: -30px;
h3{
  margin-top: 50px;
  padding-left: 30px;
  font-size: 40px;
}
`
const Main = styled.div`
textarea{
  width: 700px;
  height: 400px;  

 font-size: 20px;
  border: none;
  background-color: #F4F4F2;
  :hover{
  cursor: pointer;
    background-color: #E2E3E0;
  }
}

`

