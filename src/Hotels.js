import styled from "styled-components";
import MenuFunction from "./Menu";
import hotel from "./assets/Hotel-PNG.png"

import { Link } from "react-router-dom";

export default function AvailableHotels() {

    return (
        <>
            <MenuFunction />
            <h1>Sou a página de hotéis</h1>
            <Body>
                <Filter>

                </Filter>
                <Hotel>
                    <img src={hotel} alt="ticket" />
                    <div>
                        <p>Hotel belíssimo</p>
                        <p> R$ 1.000,00</p>
                    </div>
                    <Link to={"/hotel/:id"}>
                        <button>
                            Detalhes
                        </button>
                    </Link>
                </Hotel>
                <Hotel>
                    <img src={hotel} alt="ticket" />
                    <div>
                        <p>Hotel belíssimo</p>
                        <p> R$ 1.000,00</p>
                    </div>
                    <Link to={"/hotel/:id"}>
                        <button>
                            Detalhes
                        </button>
                    </Link>
                </Hotel>
            </Body>
        </>
    )
}
const Body = styled.div`
   display:flex;
   padding: 20px;
`
const Filter = styled.div`
   height:400px;
   width: 200px;
   background-color: #d8bfd8;

`

const Hotel = styled.div`
    width:500px;
    height:90px;
    background-color: gray;
    display:flex;
    padding:10px;
    justify-content: space-around;
    align-items:center;
    margin:16px;
    border-radius:3px;
img {
    height:80px;
}
`



