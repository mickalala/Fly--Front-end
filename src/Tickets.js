import styled from "styled-components";
import MenuFunction from "./Menu";
import ticket from "./assets/flypink.jpg"

export default function AvailableTickets() {
    //airplane img
    //name?
    ////price
    //date let go
    //arrive date 
    return (
        <>
            <MenuFunction />
            <h1>Sou a página de passagens</h1>
            <Tickets>
                <img src={ticket} alt="ticket" />
                <div>
                    <p>04/10/1999</p>
                    <p> R$ 1.000,00</p>
                </div>
                <button>
                    Detalhes
                </button>
            </Tickets>
        </>
    )
}

const Tickets = styled.div`
    width:100%;
height:90px;
background-color: gray;
display:flex;
img {
    height:80px;
}
`