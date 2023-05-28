import styled from "styled-components";
import MenuFunction from "./Menu";
import hotel from "./assets/Hotel-PNG.png"
import { Link } from "react-router-dom";

export default function AvailableHotels() {
    return (
        <>
            <MenuFunction />
            <h1>Sou a página de hotéis</h1>
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
        </>
    )
}

const Hotel = styled.div`
    width:100%;
    height:90px;
    background-color: gray;
    display:flex;
img {
    height:80px;
}
`


