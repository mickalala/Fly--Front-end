import MenuFunction from "./Menu";
import styled from "styled-components";

export default function TicketDetails() {
    return (
        <>
            <MenuFunction />
            <MainDiv>
                <h1>Passagem para a cidade</h1>
                <p>Cidade de destino:</p>
                <p>Cidade de Origem:</p>
                <p>Companhia aérea:</p>
                <p>Horário de partida:</p>
                <p>Horário previsto de chegada:</p>
                <p>Preço da passagem:</p>

            </MainDiv>
        </>
    )
}

const MainDiv = styled.div`
   margin:40px;
   border-radius:80px;

   height: 600px;
   width:100% auto;
   background-color: #b0c4de;
   padding: 40px;
   h1{
    font-size:40px;
    margin-bottom:30px;
   }
`