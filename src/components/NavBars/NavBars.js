import React, {useState, useEffect} from 'react'
import {FaTimes} from "react-icons/fa";
import {IconContext} from "react-icons/lib"
import {FiAlignRight} from "react-icons/fi";
import { Button } from './globalStyles';
import {animateScroll as scroll} from "react-scroll"
import { Nav, NavBarContainer, NavLogo, NavIcon, MobileIcon, 
    NavMenu, NavLinks,NavItem, NavText, NavH1, NavP} from './NavBars.elements';
import {BiPhoneCall} from "react-icons/bi"
import {HiOutlineMail} from "react-icons/hi"


const NavBars = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", changeNav)
    }, [])

    const toggleHome = ()=>{
        scroll.scrollToTop()
       }


    const handleClick =()=> setClick(!click)
    const closeMobileMenu =()=> setClick(false)
    const showButton =()=>{
        if(window.innerWidth <=960){
            setButton(false)
        }else{
            setButton (true) 
        }
    }

    useEffect(()=>{
        showButton() 
    }, [])
    window.addEventListener("resize", showButton)
    return (
        <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}> 
            <NavBarContainer>
                <NavLogo initial={{y: -250}} 
                animate={{y:-1}}
                transition={{delay:0.3, type:"spring", stiffness: 120}}
                 to="/"onClick={closeMobileMenu}
                onClick={toggleHome}>
                    <NavIcon/>
                    UltraTech
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes/> : <FiAlignRight/>}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks onClick={toggleHome} smooth={true} duration={500} spy={true} exact="true"
                    offset={-80}>
                            Home
                        </NavLinks>
                    </NavItem>  
                    <NavItem>
                        <NavLinks to="services" smooth={true} duration={500} spy={true} exact="true"
                    offset={-80}>
                            Services
                        </NavLinks>
                    </NavItem>                            
                    <NavItem>
                        <NavLinks to="products" smooth={true} duration={500} spy={true} exact="true"
                    offset={-80}>
                            Product
                        </NavLinks>
                   </NavItem>
                  
                                     
                    <NavItem>
                        <NavLinks to="team" smooth={true} duration={500} spy={true} exact="true"
                    offset={-80}>
                            Our Team
                        </NavLinks>
                   </NavItem>

                   <NavItem>
                        <NavLinks to="contact" smooth={true} duration={500} spy={true} exact="true"
                    offset={-80}>
                            Contact Us
                        </NavLinks>
                   </NavItem>
                   <NavText>
                    
                    <NavH1><HiOutlineMail/>Olawuni50@gmail.com</NavH1>
                    <NavP><BiPhoneCall/>+2348118320256, +2348161882454</NavP>
                </NavText>

                   {/* <NavItemBtn>
                       {button ? (<NavBtnLink to="/signin">
                           <Button primary="true" 
                           fontBig="true">SIGN IN</Button>
                       </NavBtnLink>
                       ): (
                           <NavBtnLink to="sign-up">
                               <Button primary="true"
                               fontBig="true">
                                   SIGN UP 
                               </Button>
                           </NavBtnLink>
                       )}
                   </NavItemBtn> */}
                            
                    </NavMenu>
            </NavBarContainer>
        </Nav>
        </IconContext.Provider>
            
    )
}

export default NavBars
