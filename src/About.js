import styled from "styled-components"
import Menu from "./Menu"
import ams from "./assets/Am.jpg"
import cloud from "./assets/transparent.png"
import { Link } from "react-router-dom"


export default function AboutCity() {

    //img
    //text
    //link to tickets
    //link to hotels
    return (
        <>
            <Menu />
            <h1>Sou a página de Sobre</h1>
            <ThinkCity>
                <img src={ams} alt="Amsterddam" />
                <h1> Amsterdam</h1>
                <p>Amsterdam is the Netherlands’ capital, known for its artistic heritage,
                    elaborate canal system and narrow houses with gabled facades,
                    legacies of the city’s 17th-century Golden Age. Its Museum District houses
                    the Van Gogh Museum, works by Rembrandt and Vermeer at the Rijksmuseum,
                    and modern art at the Stedelijk. Cycling is key to the city’s character,
                    and there are numerous bike paths.</p>
            </ThinkCity>
            <GoAway>
                <Link to={"/tickets"}>
                    <button> Passagens</button>
                </Link>
                <Link to={"/hotels"}>
                    <button> hotéis</button>
                </Link>
            </GoAway>
        </>
    )
}


const ThinkCity = styled.div`
height:100%;
width:100%;
display:flex;
flex-direction:column;
align-items: center;
background-color: paleturquoise;
img{
    height:300px;

}
`

const GoAway = styled.div`
display:flex;
justify-content:space-between;
button{
    font-size:20px;
height:350px;
width:300px;
border: transparent;
background-color:transparent;
    background-image:url(${cloud});
}
`