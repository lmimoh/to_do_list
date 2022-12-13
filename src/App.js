import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Component/Header";
import Input from "./Component/Input";
import TodoList from "./Component/TodoList";
import data from "./data/data";

const StyledApp = styled.main`
  width : 400px;
  height : 650px;
  padding : 30px 30px 0px 30px;
  margin : 10vh 0vh 0vh 0vh;
  display : inline-flex;
  flex-direction : column;
  background-color : white;
  border-radius : 20px;
`

function App() {
  const [toDoList, setToDoList] = useState(undefined);

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then(res => res.json())
      .then(res => setToDoList(res))
  }, [])

  return (
    <StyledApp>
      <Header left={toDoList !== undefined ? toDoList.length : 0}/>
      <Input />
      <TodoList todo={toDoList}/>
    </StyledApp>
  )
}

export default App;