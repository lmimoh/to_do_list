import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

const StyledTodo = styled.div`
    display : flex;
    justify-content : space-between;
    font-size : 12pt;
    font-weight : 300;
    margin : 0px 0px 10px 0px;

    .done {
        text-decoration : line-through;
        color : gray;
    }
`

const CheckButton = styled.button`
    width : 30px;
    height : 30px;
    border : 0px;
    border-radius : 30px;
    cursor : pointer;
    color : white;
    background-color : #00BF63;
    margin : 0px 5px 0px 0px;
`

const DeleteButton = styled.button`
    width : 30px;
    height : 30px;
    border : 0px;
    border-radius : 30px;
    cursor : pointer;
    color : white;
    background-color : #FF4848;
`

const Todo = ({todo}) => { 
    const handleDelete = () => {
        fetch(`http://localhost:3001/todos/${todo.id}`, {
            method : 'DELETE',
            mode : 'cors',  
            headers : {
                'Content-Type' : 'application/json'
            }
        })  
    }

    return (
        <StyledTodo>
            <p className={todo.state === false ? "" : "done"}>{todo.task}</p>
            <div>
                {
                    todo.state === false ? <CheckButton><FontAwesomeIcon icon={faCheck}/></CheckButton> : ""
                }
                <DeleteButton onClick={handleDelete}><FontAwesomeIcon icon={faTrash}/></DeleteButton>
            </div>
        </StyledTodo>
    );
}

export default Todo;