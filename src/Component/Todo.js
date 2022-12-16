import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons"

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

const StyledButton = styled.button`
    width : 30px;
    height : 30px;
    border : 0px;
    border-radius : 30px;
    cursor : pointer;
    color : white;
    background-color : ${({color}) => color};
    margin : 0px 5px 0px 0px;
`

const Todo = ({todo, change, setChagne}) => { 
    const handleDelete = () => {
        fetch(`http://localhost:3001/todos/${todo.id}`, {
            method : 'DELETE',
            mode : 'cors',  
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => {
            setChagne(!change);
        })
    }

    const handleCheck = (todo) => {
        fetch(`http://localhost:3001/todos/${todo.id}`, {
            method : 'PATCH',
            mode : 'cors',  
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({ 
                "state" : !todo.state
            })
        }).then(res => {
            setChagne(!change);
        })
    }

    return (
        <StyledTodo>
            <p className={todo.state === false   ? "" : "done"}>{todo.task}</p>
            <div>
                {/* <StyledButton color="#0867A0" onClick={(el) => handleCheck(todo)}><FontAwesomeIcon icon={faPen}/></StyledButton> */}
                <StyledButton color={todo.state === false ? "#00BF63" : "#CDAFCA"} onClick={(el) => handleCheck(todo)}><FontAwesomeIcon icon={faCheck}/></StyledButton>
                <StyledButton color="#FF4848" onClick={handleDelete}><FontAwesomeIcon icon={faTrash}/></StyledButton>
            </div>
        </StyledTodo>
    );
}

export default Todo;