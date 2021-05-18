import React from 'react'
import { Button, Container } from '../NavBars/globalStyles'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, 
Subtitle, ImgWrapper, Img, Btn} from "./InfoSection.element";




const InfoSection = ({id, Bg, primary, lightBg, imgStart, lightTopLine, lightTextDesc, 
buttonLabel, description,headLine, lightText, topLine, img, alt, start}) => {
    return (
        <>
        
          <InfoSec lightBg={lightBg} id={id}>
              <Container>
              <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <Btn>
                                <Button big fontBig primary={primary}>
                                    {buttonLabel}
                                </Button>
                            </Btn>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                    <ImgWrapper start={start}>
                    <Img src={img} alt={alt}/>    
                    </ImgWrapper>    
                    </InfoColumn> 
                </InfoRow>
                
              </Container>
              
              </InfoSec>  
             
        </>
    )
}

export default InfoSection  
