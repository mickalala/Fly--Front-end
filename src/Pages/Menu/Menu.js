import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../../assets/plane.png"
import { useState } from 'react';
import cities from '../../cities.js';

export default function MenuFunction() {

    const [research, setResearch] = useState("")

    const comparedResearch = research.toLowerCase()
    const citiesFiltered = cities.filter(c => c.toLowerCase().includes(comparedResearch))

    return (
        <Menu >
            <Link to={"/"}>
                <img src={logo} alt='logo.jpg' />
            </Link>

            <Research>
                <input placeholder='Cidadee' type='text'
                    value={research}
                    onChange={e => setResearch(e.target.value)} />

                {(research !== "") && (citiesFiltered.map(c => <div key={c}>{c}</div>))}

            </Research>
        </Menu >
    )
}

const Menu = styled.div`
            height:100px;
            width:100%;
            background-color: #3d2b1f;
            display:flex;
            justify-content:space-between;
            align-items:center;
            position:relative;
            padding:17px;
            img{
                margin-top:40px;
                height:100px;
            }
         
          
            `
const Research = styled.div`
 position:absolute; 
 right:30px;
 top:32px;
 input{
    font-family:'Pacifico', cursive;
      }
  div{
      background-color:wheat;
      border-radius:3px;
      font-size:20px;
      z-index:1;
      color: black;
      border:1px solid black;  
      padding:3px;
     
}
`            