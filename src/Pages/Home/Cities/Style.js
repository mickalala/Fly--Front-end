import styled from "styled-components"

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
export { City, CityOptions }