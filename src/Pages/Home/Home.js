import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Menu from '../Menu/Menu.js';
import { useEffect } from 'react';
import axios from 'axios';
import cities from '../../cities.js';
import City from './Cities/CitiesSquares.js';

export default function Home() {

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
            <Capitals  >

                {cities.map((cityName) =>
                    <City cityName={cityName} />)}
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