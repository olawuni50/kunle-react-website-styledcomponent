import styled from "styled-components"
import {Link as LinkR} from "react-router-dom";


export const TeamSection = styled.div`
padding: 100px 0 100px;
display: flex;
flex-direction: column;
justify-content: center;
background: #fff;

`;

export const TeamWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;

@media screen and (max-width: 960px){
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
`;

export const TeamHeading = styled.h1`
color: #101522;
font-size: 30px;
margin-bottom: 4px;
`

export const TeamContainer= styled.div`
background: none;
display:flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 960px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}
`

export const TeamCard = styled(LinkR)`
/* background:#101522;    */
/* box-shadow:  0 3px 10px rgba(0, 0, 0, 0.3); */
margin: 0.5rem 0;
width: 14rem;
display: grid;
grid-template-columns: repeat(3, 1fr);
/* border-radius: 15px 70px 30px; */
text-decoration:none;

&:nth-child(2){
    margin: 24px;
}

&:hover{
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
}

@media screen and (max-width: 960px){
    width: 90%;
    /* grid-column: 1; */

    &:hover{
        transform: scale(1.06);
    }
}
`;

export const TeamCardInfo = styled.div`
background: #fff;
display: flex;
flex-direction: column;
/* box-shadow:  0 3px 10px rgba(0, 0, 0, 0.3); */
margin-bottom: 0;
margin-top: 2.5rem;
width: 17rem;
/* border-radius: 15px 70px 30px; */
height: 400px;
padding: 20px;
align-items: center;
color:#fff;
text-decoration: none;
border: none;

`

export const TeamCardImage=styled.div`
margin: 24px 0;
`

export const Image= styled.img`
/* height: 26rem;
-webkit-clip-path: polygon(0 0, 100% 0, 100% 78%, 0% 100%);
clip-path: polygon(0 0, 100% 0, 100% 78%, 0% 100%);
width: 100%;
border-radius: 15px 70px 30px;
object-fit: cover; */
width: 100%;
height: 15rem;
object-fit:contain;
margin-top: -3rem;
z-index: 999;
border-radius: 50%;



@media screen and (max-width: 650px){
    width:100%;
    display:block
}
`

export const TeamCardName=styled.h1`
margin: 10px 5px;
margin-bottom: 5px;
font-size: 1.5rem;
color:#242424;
border-radius: 50%;
`

export const TeamCardPost = styled.h4`
font-size: 1.1rem;
color: #242424;
`

export const TeamCardCert=styled.h4`
font-size: 1rem;
color: #242424
`

export const TeamCardFeatures= styled.ul`
margin: 10px 15px 32px;
list-style: none;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #a9b3c1;
font-size: 20px;
color:#242424
`

export const TeamCardFeature = styled.li`
margin-bottom: 10px;
color:#242424;
font-style: italic;
`;

export const SocialMedia = styled.section`
max-width: 1000px;
width: 100%
`;

