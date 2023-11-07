import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Menu from '../Menu/Menu.js';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Home() {
    const [options, setOptions] = useState(false)
    useEffect(() => {
        setOptions(false)
        axios.get(`${process.env.REACT_APP_API_URL}/cities`)
            .then()
            .catch(err => {
                alert(err.message)
            })

    }, [])
    return (
        <>
            <Menu />
            <Title>Fly, lovely angel, fly</Title>
            <Capitals >
                <City onClick={() => setOptions(true)} options={options} />
                <CityOptions options={options}>
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
                {/* <City onClick={() => setOptions(true)} options={options} />
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
                <City /> */}
            </Capitals>
        </>

    )
}
const Title= styled.h1`
font-size:50px;
color: blue;
margin-right:60px;
`

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

display:${(props) => (props.options) ? 'none' : ""};


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
display:${(props) => (props.options) ? '' : "none"};
button{
    width:80px;
    background-color:transparent;
    border-radius:5px;
    border-color:lavender;
}
`