import React from 'react'
import {ServiceContainer, ServiceWrapper, ServiceHead, ServiceText,
ServiceCard, ServiceTitle, ServiceCard1, ServiceAll, Icon} from "./ServicesElement"

import {RiFunctionFill, RiChatQuoteFill} from "react-icons/ri"
import {BiCustomize} from "react-icons/bi";
import {AiOutlineAntDesign} from "react-icons/ai"
import {HiOutlineDocumentAdd} from "react-icons/hi";

const Services = () => {
    return (
        <>
        <ServiceContainer id="services">
        <ServiceTitle>Our Services</ServiceTitle>
            <ServiceWrapper>
               <ServiceCard initial={{x: -250}}
                animate={{x:0}} transition={{delay:5, duration:5, 
                type:"spring", stiffness:200}}>
                   <Icon>
                   <RiFunctionFill/>
                   </Icon> 
                   <ServiceAll>
                    <ServiceHead>Fully Functional</ServiceHead>
                    <ServiceText>Our design is compatible with all browsers, and fully functional</ServiceText></ServiceAll>
                </ServiceCard>
                <ServiceCard initial={{x: 250}}
                animate={{x:0}} transition={{delay:3, duration:5, 
                type:"spring", stiffness:120}}>
                     <Icon>
                    <RiChatQuoteFill/>
                    </Icon> 
                    <ServiceAll>
                    <ServiceHead>Live Chat</ServiceHead>
                    <ServiceText>We are live 24/7, you can chat with any of our agents 24hrs</ServiceText></ServiceAll>
                </ServiceCard>
                <ServiceCard>
                     <Icon>
                    <BiCustomize/>
                    </Icon> 
                    <ServiceAll>
                    <ServiceHead>Easy Customization</ServiceHead>
                    <ServiceText>Our templates and themes are easy to customize to your 
                        preferred taste</ServiceText></ServiceAll>
                </ServiceCard>
                <ServiceCard>
                    <Icon>
                        <AiOutlineAntDesign/>
                    </Icon> 
                    <ServiceAll>
                    <ServiceHead>Responsive Design</ServiceHead>
                    <ServiceText>Our templates and themes are mobile responsive, works 
                        on devices</ServiceText></ServiceAll>
                </ServiceCard>
                <ServiceCard>
                 <Icon>
                        <HiOutlineDocumentAdd/>
                    </Icon>
                    <ServiceAll>
                    <ServiceHead>Help Documentation</ServiceHead>
                    <ServiceText>All our works are well documented and understandable</ServiceText></ServiceAll>
                </ServiceCard>
            </ServiceWrapper>
            </ServiceContainer>  
        </>
    )
}

export default Services
