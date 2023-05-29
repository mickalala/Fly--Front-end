import styled from "styled-components";
import MenuFunction from "./Menu";
import ticket from "./assets/flypink.jpg"
import { Link } from "react-router-dom";

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
            <Body>
                <Filter>

                </Filter>
                <Tickets>
                    <img src={ticket} alt="ticket" />
                    <div>
                        <p>04/10/1999</p>
                        <p> R$ 1.000,00</p>
                    </div>
                    <Link to={"/ticket/:id"}>
                        <button>
                            Detalhes
                        </button>
                    </Link>
                </Tickets>
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

const Tickets = styled.div`
    width:500px;
    height:90px;
    background-color: gray;
    display:flex;
    padding: 10px;
    justify-content: space-around;
    align-items:center;
    justify-content: space-around;
    align-items:center;
    margin:16px;
    border-radius:3px;

img {
    height:80px;
}
`