import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../hooks/use-auth";
import { removeUser, checkedToggle } from "../slices/userSlice";
import { ImUserTie } from "react-icons/im";
import InputWithBut from "../mainLogic.js/InputWithBut";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { checked } = useSelector((state) => state.user);

  const { isAuth, email } = useAuth();

  const clickHandler = () => {
    dispatch(removeUser());
  };

  const addTaskHandler = () => {
    dispatch(checkedToggle());
  };

  return isAuth ? (
    <Father>
      <Container>
        <nav>
          <button onClick={clickHandler}>Logout</button>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1200px-Trello_logo.svg.png" />
          <User>
            <p>
              <ImUserTie />
            </p>
            <p>{email}</p>
          </User>
        </nav>
      </Container>
      <Nav>
        <NavContent>
          <img src="https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png" />

          <NavHeader>
            <div>
              Рабочее пространство <br /> Trello
            </div>
            <p>Бесплатно</p>
          </NavHeader>
        </NavContent>
        <hr />
      </Nav>
      <FatherOfMain>
        <Main>
          {checked ? (
            <InputWithBut />
          ) : (
            <button onClick={addTaskHandler}>+Добавить список</button>
          )}
        </Main>
        <Main>
          {checked ? (
            <InputWithBut />
          ) : (
            <button onClick={addTaskHandler}>+Добавить список</button>
          )}
        </Main>
        <Main>
          {checked ? (
            <InputWithBut />
          ) : (
            <button onClick={addTaskHandler}>+Добавить список</button>
          )}
        </Main>
      </FatherOfMain>
    </Father>
  ) : (
    <Navigate to="/" />
  );
};
export default HomePage;

const Container = styled.div`
  background-color: purple;
  height: 50px;
  padding-top: 10px;
  img {
    height: 40px;
    margin-left: 150px;
  }
  hr {
    opacity: 0.2;
  }
  nav {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: bold;
  }
  button {
    height: 40px;
    width: 100px;
    margin-left: 70px;
    color: black;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    padding-right: 20px;
    p:first-child {
      padding-right: 10px;
      padding-top: 3px;
      margin-top: 10px;
    }
    p:last-child {
      margin-top: 10px;
    }
  }
`;
const Nav = styled.div`
  width: 350px;
  height: 100vh;
  background-color: hsla(307, 84.4%, 15.1%, 0.9);
  color: white;
  position: fixed;
  img {
    width: 60px;
    height: 50px;
    padding-top: 40px;
    padding-left: 20px;
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
`;

const NavHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 20px;
  margin-right: 40px;
  div {
    font-weight: bold;
  }
`;
const Main = styled.main`
  display: flex;
  button {
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    width: 250px;
    height: 33px;
    color: white;
    background: rgba(50, 50, 50, 0.7);
    border: none;
  }
`;
const Father = styled.div`
  background-image: url(https://wallpaperaccess.com/full/2377084.png);
  width: 100%;
  height: 721px;
`;

const User = styled.div`
  background-color: white;
  width: auto;
  height: 40px;
  text-align: center;
  border-radius: 10px;
  padding-left: 10px;
  margin-right: 20px;
`;
const FatherOfMain = styled.div`
  padding-left: 350px;
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
