import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../slices/userSlice";

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = ({ email, password }) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch(console.error);
    reset();
  };

  return (
    <App>
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1200px-Trello_logo.svg.png" />
      <Forma onSubmit={handleSubmit(onSubmit)}>
        <h3>Registration in Trello</h3>

        <input
          placeholder="Ваше Имя"
          type="text"
          {...register("name", {
            required: "Мы должны знать как к Вам обращаться.",
          })}
        />

        <div >{errors?.name?.message}</div>

        <input
          placeholder="Укажите адрес электронной почты"
          type="email"
          {...register("email", { required: "Email обязательно к заполнению" })}
        />

        <div >{errors?.email?.message}</div>

        <input
          placeholder="Придумайте пароль"
          type="password"
          {...register("password", {
            required: "Password обязательно к заполнению",
          })}
        />

        <div >
          {errors?.password?.message}
        </div>

        <Send type="submit" value="Зарегестрироваться" />
      </Forma>
    </App>
  );
}

export default RegisterPage;

const App = styled.div`
  margin-top: 100px;

  img {
    width: 170px;
    height: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
`;
const Forma = styled.form`
  width: 400px;
  height: 420px;
  box-shadow: 0px 0px 2px 0px black;
  margin: 0 auto;
  border-radius: 20px;
  text-align: center;
  h3 {
    margin-bottom: 30px;
    padding-top: 30px;
    font-size: 23px;
    text-align: center;
  }
  input {
    width: 300px;
    height: 40px;
    border: 1px solid green;
    border-radius: 5px;
    font-size: 17px;
  }
  div{
    color: red;
    height: 30px;
    padding-top: 6px;
    font-weight: bold;
  }
`;
const Send = styled.input`
  background-color: green;
  cursor: pointer;
  color: white;
`;
