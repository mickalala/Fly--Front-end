import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Menu from './Menu.js';

export default function Home() {
    return (
        <>
            <Menu />
            <h1>Fly, lovely angel, fly</h1>
            <Capitals >
                <City />
                <CityOptions>
                    <Link to={"/about"}>
                        <button>Sobre</button>
                    </Link>

                    <Link to={"/tickets"}>
                        <button>Passagens</button>
                    </Link>

                    <Link to={"/hotels"}>
                        <button>Hóteis</button>
                    </Link>

                </CityOptions>
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
                <City />
            </Capitals>
        </>

    )
}

const Capitals = styled.div`
height:600px;
width:100%;
background-color: lightpink;

display:flex;
flex-wrap: wrap;
justify-content:center;
align-items:center;
`
const City = styled.div`
height:90px;
width:90px;
background-color:darkcyan;

border-radius:5px;

margin: 30px 30px;
&:hover{
background-color:yellowgreen;
}

`
const CityOptions = styled.div`
height:90px;
width:90px;
background-color:lightcoral;

border-radius:5px;

margin: 30px 30px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
button{
    width:80px;
    background-color:transparent;
    border-radius:5px;
    border-color:lavender;
}
`