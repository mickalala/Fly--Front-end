import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Menu from '../Menu/Menu.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import cities from '../../cities.js';

export default function Home() {
    const [options, setOptions] = useState(false)
    // useEffect(() => {
    //     setOptions(false)
    //     axios.get(`${process.env.REACT_APP_API_URL}/cities`)
    //         .then()
    //         .catch(err => {
    //             alert(err.message)
    //         })

    // }, [])
    return (
        <>
            <Menu />
            <Title>Fly, lovely angel, fly</Title>
            <Capitals onClick={() => setOptions(!options)} >
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
                {cities.map((c) =>
                    <City onClick={() => setOptions(true)} options={options} />)}
            </Capitals>
        </>

    )
}
const Title = styled.h1`
font-size:50px;
color: #800000;
margin-right:60px;
margin-top:17px;
`

const Capitals = styled.div`
height:600px;
width:100%;
background-color: #8fbc8f;

display:flex;
flex-wrap: wrap;
justify-content:center;
align-items:center;

`
const City = styled.div`
height:90px;
width:90px;
background-color:#87ceeb;

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