import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../../assets/plane.png"

export default function MenuFunction() {
    return (
        <Menu >
            <Link to={"/"}>
                <img src={logo} alt='logo.jpg' />
            </Link>
            <input placeholder='ciudadee' />
        </Menu >
    )
}

const Menu = styled.div`
            height:100px;
            width:100%;
            background-color: palegreen;
            display:flex;
            justify-content:space-between;
            align-items:center;
            
            img{
                margin-top:40px;
                height:100px;
            }
            `