import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react";
import { faThemeco } from "@fortawesome/free-brands-svg-icons";

const StyledInput = styled.section`
    display : flex;
    justify-content : space-between;
    margin : 0px 0px 20px 0px;
    input {
        width : 300px;
        height : 30px;
        border : 1px solid gray;
        border-radius : 20px;
        text-align : left;
        padding : 0px 0px 0px 15px;
    }
`

const StyledButton = styled.button`
    width : 30px;
    height : 30px;
    border : 0px;
    border-radius : 30px;
    cursor : pointer;
    color : white;
    background-color : #86A8FF;
`

const Input = ({change}) => {
    const [todo, setTodo] = useState("");

    const handleSubmit = (e) => {
        console.log(todo);
        fetch("http://localhost:3001/todos", {
            method : 'POST',
            mode : 'cors',  
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                "task" : todo,
                "state" : false
            })
        })
    }

    return (
        <StyledInput>
            <input
                type="text"
                value={todo}
                onChange= {(e) => {
                    setTodo(e.target.value);
                }}
                placeholder="Write your Task!"/>
            <StyledButton onClick={handleSubmit}><FontAwesomeIcon icon={faPen}/></StyledButton>
        </StyledInput>
    );
}

export default Input;