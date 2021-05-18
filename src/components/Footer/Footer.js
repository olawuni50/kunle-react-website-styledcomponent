import React from 'react';
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa"
import { Button } from '../NavBars/globalStyles';
import {FooterContainer, FooterSubHeading, FooterSubscription, FooterSubText, Form, FormInput,
FooterLinkTitle, FooterLinksItems, FooterLink,FooterLinksContainer, FooterLinksWrapper,
SocialIcon, SocialIconLink, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights,
SocialIcons} from "./Footer.element";
import {animateScroll as scroll} from "react-scroll";

export const Footer = () => {
    const toggleHome=()=>{
        scroll.scrollToTop()
    }
    return ( 
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership
                    to receive the latest news and trends
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time.
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email"/>
                        <Button fontBig primary>Subscribe</Button>
                  
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="products">Products</FooterLink>
                        <FooterLink to="services">Services</FooterLink>
                     <FooterLink to="contact">Contact Us</FooterLink>
                        <FooterLink to="team">Our Teams</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to="/">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Office in USA</FooterLinkTitle>
                        <FooterLink to="/sign-up">23b Silicon Valley, Califonia</FooterLink>
                        <FooterLink to="/">Mon-Sat: 8:00am - 5:00pm</FooterLink>
                        </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Our Services</FooterLinkTitle>
                        <FooterLink>Website Development</FooterLink>
                        <FooterLink>MObile App Development</FooterLink>
                        <FooterLink>Trainings</FooterLink>
                        <FooterLink>Business Branding</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/" onClick={toggleHome}>
                        <SocialIcon/>
                        UltraTech
                    </SocialLogo>
                    
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                             <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                             <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                             <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                             <FaTwitter/>
                        </SocialIconLink>
                        
                    </SocialIcons>
                    <WebsiteRights>All Right Reserved UltraTech 2021</WebsiteRights>
                </SocialMediaWrap>
            </SocialMedia>
            
        </FooterContainer>
     
    )
}

export default Footer