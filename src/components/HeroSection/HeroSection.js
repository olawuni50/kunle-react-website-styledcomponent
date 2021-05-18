import React, {useRef, useEffect, useState} from 'react'
import { Button } from '../NavBars/globalStyles';
import {HeroContainer, HeroWrapper, HeroSlide, HeroSlider,HeroImage,
HeroContent, ArrowForward, ArrowRight, SliderButton, NextArrow, PrevArrow, 
} from "./HeroSectionElement";
import {motion} from "framer-motion";

const HeroSection = ({slides}) => {
    const [hover, setHover]=useState(false);
    const [current, setCurrent] = useState(0)
    const length = slides.length;
    const timeout =useRef(null)

   useEffect(()=>{
       const nextSlide = ()=>{
           setCurrent(current => current===length - 1 ? 0 : current + 1)
       }
       timeout.current=setTimeout(nextSlide,3500)

       return function(){
           if(timeout.current){
               clearTimeout(timeout.current)
           }
       }

   },[current, length])

    const nextSlide=()=>{
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent(current === length-1? 0:current + 1)
        // console.log(current)
    }

    const prevSlide=()=>{
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0 ? length - 1 : current - 1)
        // console.log(current)
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null
    }

    const onHover=()=>{
        setHover(!hover)
    }
    return (
        <>
          <HeroContainer>
              <HeroWrapper>
                  {slides.map((slide, index)=>{
                      return(
                          <HeroSlide key={index}>
                              {index === current &&(
                                  <HeroSlider>
                                      <HeroImage src={slide.image} alt={slide.alt}/>
                                      <HeroContent>
                                       <motion.h1
                                       initial={{scale:0}}
                                       animate={{ scale:1}}
                                       transition={{type: "just", stiffness:260, damping:20}}
                                                          
                                       >{slide.title}</motion.h1>
                                          <motion.p
                                          initial={{scale:0}}
                                          animate={{ scale:1}}
                                          transition={{type:"just", stiffness:260, damping:20}}
                                          >{slide.text}</motion.p>
                                          <Button to={slide.path}   fontBig="true" onMouseLeave={onHover} onMouseEnter={onHover}>
                                              {slide.label} {hover ? <ArrowForward/>:<ArrowRight/>}
                                          </Button>
                                      </HeroContent>
                                  </HeroSlider>
                              )}
                          </HeroSlide>
                      )
                  })}
                  <SliderButton>
                  <PrevArrow onClick={prevSlide}/>
                  <NextArrow onClick={nextSlide}/>
              </SliderButton>

              </HeroWrapper>
              </HeroContainer>  
        </>
    )
}

export default HeroSection
