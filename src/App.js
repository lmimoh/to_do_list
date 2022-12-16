import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Component/Header";
import Input from "./Component/Input";
import TodoList from "./Component/TodoList";

const StyledApp = styled.main`
  width : 350px;
  height : 650px;
  padding : 30px 30px 0px 30px;
  margin : 10vh 0vh 0vh 0vh;
  display : inline-flex;
  flex-direction : column;
  background-color : white;
  border-radius : 20px;
  box-shadow : 10px 10px 10px gray;
`

function App() {
  const [toDoList, setToDoList] = useState(undefined);
  const [change, setChagne] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then(res => res.json())
      .then(res => setToDoList(res))
      .catch(e => console.log(e));
  }, [change])

  return (
    <StyledApp>
      <Header left={toDoList !== undefined ? toDoList.filter(el => el.state === false).length : 0}/>
      <Input change={change} setChagne={setChagne}/>
      <TodoList todo={toDoList} change={change} setChagne={setChagne}/>
    </StyledApp>
  )
}

export default App;