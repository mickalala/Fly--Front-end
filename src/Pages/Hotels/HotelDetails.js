import MenuFunction from "../Menu/Menu.js";
import styled from "styled-components";

export default function HotelDetails() {
    return (
        <>   
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
   width: 100% auto ;
   height:200px;
   border: 3px ;
   background-color:#f08080;
   position:relative;
`