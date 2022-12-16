import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledHeader = styled.header`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    margin : 0px 0px 20px 0px;

    #user_info {
        display : flex;
        flex-direction : column;
        justify-content : center;
        align-items : flex-start;

        p:nth-child(1) {
            font-weight : 400;
        }

        p:nth-child(2) {
            font-weight : 300;
            color : #FF4848;
            font-size : 11pt;
        }
    }

    #user_profile {
        margin : 0px 0px 0px 0px;

        img {
            width : 60px;
            height : 60px; 
            border-radius : 50px;
        }
    }
`

const Header = ({left}) => {
    const [user, setUser] = useState('');
    useEffect(() => {
        fetch("http://localhost:3001/user")
            .then(res => res.json())
            .then(res => setUser(res[0]))
    }, [])
    return (
        <StyledHeader>
            {
                user !== undefined ?
                <>
                    <div id="user_info">
                        <p>Hello, {user.id}!</p>
                        <p>Left {left} task</p>
                    </div>
                    <div id="user_profile">
                        <img src={user.profile} alt="userProfileImg"></img>
                    </div>
                </>: null
            }
        </StyledHeader>
    );
}

export default Header;