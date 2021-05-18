import styled, {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding:0;
    font-family: "Trebuchet MS";
}`;

export const Container = styled.div`
z-index:1;
width: 100%;
max-width: auto;
margin-right: auto;
margin-left:auto;
padding-right: 50px;
padding-left: 50px;

@media screen and (max-width: 991px){
    padding-right: 30px;
    padding-left: 30px;
}
`
export const Button = styled.button`
border-radius: 50px;
background: ${({primary}) => (primary ? "#4B59F7": "#101522")};
white-space: nowrap;
padding: ${({big}) =>(big ? "14px 48px": "12px 30px")};
color: #fff;
font-size: ${({fontBig})=>(fontBig ? "20px":"16px")};
outline: none;
max-width: 160px;
justify-content:center;
align-items:center;
display:flex;
border: none;
text-decoration:none;
cursor: pointer;
transition: all 0.2s ease-in-out;


&:hover{
    transition: all 0.3s ease-ease-out;
    background: #fff;
    background: ${({primary}) =>(primary? "#0467FB" : "#4B59F7")};
}

@media screen and (max-width: 960px){ 
    width: 100%; 
}
`
export default GlobalStyle;