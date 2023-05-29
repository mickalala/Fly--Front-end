import MenuFunction from "./Menu";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";

export default function HotelDetails() {
    return (
        <>
        <GlobalStyle/>
            <MenuFunction />

            <MainDiv>
                <h1>Hotel belíssimo</h1>
                <Hotelsimages></Hotelsimages>
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

const Hotelsimages = styled.div`
   width: 100% ;
   height:200px;
   border: 3px ;
   background-color:#f08080;
   position:absolute;
`