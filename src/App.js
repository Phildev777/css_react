import React from "react";
import style from 'styled-components';

const Title = style.h1`
font-family:'Rubik Bubbles', cursive;
color:black;
text-shadow: 0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00;
text-align:center;`;
const Ul = style.div`
display:flex;
list-style-type:kannada;
flex-direction:column;
align-items:center;
font-size:24px;
`;
const Document = style.div`
-webkit-box-shadow: 4px -4px 15px 0px #FF1F1F, 12px -11px 7px 0px #FF9376, 20px -5px 7px 0px #FFE264, 20px 6px 7px 0px #F6FF33, 13px 12px 17px 0px #FF9527, 2px 17px 17px 0px #FF0000, -9px 21px 18px 0px #FFF212, -9px 6px 11px 0px #FF0808, -11px -9px 11px 0px #FFFA17, -11px -9px 11px 0px #FFFA17, -16px -14px 6px 5px rgba(0,0,0,0); 
box-shadow: 4px -4px 15px 0px #FF1F1F, 12px -11px 7px 0px #FF9376, 20px -5px 7px 0px #FFE264, 20px 6px 7px 0px #F6FF33, 13px 12px 17px 0px #FF9527, 2px 17px 17px 0px #FF0000, -9px 21px 18px 0px #FFF212, -9px 6px 11px 0px #FF0808, -11px -9px 11px 0px #FFFA17, -11px -9px 11px 0px #FFFA17, -16px -14px 6px 5px rgba(0,0,0,0);
margin-left:50px;
margin-right:50px;
background-image:url('https://cdn.pixabay.com/photo/2022/10/24/09/54/switzerland-7543063_960_720.jpg');`;

function App() {


  return (

    <Document>
      <div>
        <h1><Title>Projet Scss avec Style Components</Title></h1>
        <div>
          <Ul><Title>
            <li>Débuts</li>
            <li>Milieu</li>
            <li>Fin</li>
          </Title></Ul>
          <Title><p>J'ai opté pour le "styles-components" de Scss car c'est celui que j'ai compris le plus rapidement et qui me parle le plus</p></Title>
        </div>
      </div>
    </Document>
  );
}

export default App;
