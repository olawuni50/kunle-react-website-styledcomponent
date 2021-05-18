import styled from "styled-components"
import {motion} from "framer-motion"

export const ServiceContainer = styled.div`
background: #fff;
height: 800px;
margin: auto;
justify-content: center;
width:80%;

@media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    height: auto;    
  }

  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    height: auto;
  }
`

export const ServiceWrapper = styled.div`
display: grid;
max-width: 1100px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  height: 200px;
  /* padding: 80px; */
  margin: auto;
  
  

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height:auto;
    grid-template-columns: 1fr;
    grid-template-rows:1fr;
  }

  @media screen and (max-width: 768px){
    margin: 0 30px;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height:auto;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }

`

export const ServiceTitle = styled.h1`
color: #333;
font-size: 2rem;
padding: 20px;
display:flex;
justify-content: center;
align-items: center;
margin: auto;

@media screen and (max-width: 960px){
  font-size:1.5rem
}
`

export const ServiceCard = styled(motion.div)`
background-color: #fff;
    border-radius: 10px;
     display:flex;
     justify-content:space-between;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
    padding: 10px;
    margin:10px;
    width: auto;
    color: #fff;

    @media screen and (max-width: 960px){
      padding: 20px;
      margin-top: 4px;
      
    }
`

export const ServiceAll = styled.div`
padding-left: 2px;
padding-bottom: 2px;
`
export const ServiceCard1 =styled(motion.div)`
background-color: #fff;
    border-radius: 10px;
   display:grid;
   grid-template-columns: 20% 80%;
   grid-column-gap: 10px;
   grid-column:1/span 2;
   /* grid-row: 1/ span 2; */
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
    padding: 50px;
    margin-right: 20px;
    margin-top: 20px;
    width: 100%;
    color: #fff;

    @media screen and (max-width: 960px){
      padding: 20px;
      margin-top: 4px;
      
    
    }
`
export const ServiceCard2 = styled.div`
background-color: #fff;
    border-radius: 10px;
   display:grid;
   grid-column:1/ span 2;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
    padding: 30px;
    margin:30px;
    width: 100%;
    color: #fff;

    @media screen and (max-width: 960){
      padding: 20px;
      width: 20%;
    }
`

export const ServiceHead = styled.h1`
color: #333;
padding-top: 0;
margin: 5px 0;
display: flex;
font-size: 2rem;

@media screen and (max-width: 960px){
  font-size: 1.5rem;
  font-weight: bold;
}
`

export const ServiceText = styled.h3`
 color: #333;
 justify-content: center;
 align-items: center;
 font-size: 1.2rem;
 padding-left: 0;

 @media screen and(max-width: 960px){
   font-size: 0.5rem;
 }
`

export const Icon = styled.div`
font-size: 2rem;
margin-top:2px;
margin-bottom: 2px;
padding-right:20px;
/* padding-bottom: 2px; */
color: #4b59f7;
border-radius:50%;
border-color:black;
`