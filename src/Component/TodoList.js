import styled from "styled-components";
import { useState } from "react";
import Todo from "./Todo";

const StyledList = styled.section`
    :before {
        content: "";
        display: block;
        width: 60px;
        border-bottom: 1px solid #bcbcbc;
        margin: 0px auto 20px;
    }
`

const TodoList = ({todo}) => {
    return (
        <StyledList>
            { todo !== undefined ?
                todo.map((el) => {
                    return <Todo key={el.id} todo={el}/>
                }) : null
            }
        </StyledList>
    );
}

export default TodoList;