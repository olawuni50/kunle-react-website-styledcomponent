import React from 'react'
import {TeamSection, TeamWrapper, TeamHeading, TeamContainer, TeamCard,
TeamCardImage, TeamCardInfo, TeamCardName, TeamCardPost, TeamCardCert,
TeamCardFeature, TeamCardFeatures, Image} from "./OurTeamElement"
import {IconContext} from "react-icons/lib"
import imgf from "../../Images/p2.jpg"
import img1 from "../../Images/p3.jpg"
import img2 from "../../Images/p4.jpg"
import {motion} from "framer-motion"



const OurTeam = () => {
    return (
        <>
        <IconContext.Provider value={{color: "#a9b3c1", size: 64}}>
          <TeamSection id="team">
        <TeamWrapper>
            <TeamHeading>Our Team</TeamHeading>
            <motion.div
            initial={{scale:0}}
            animate={{ scale:1}}
            transition={{type: "just", stiffness:260, damping:20}}
                               
            >
            <TeamContainer>
            <TeamCard>
                    <TeamCardInfo>
                        <TeamCardImage>
                            <Image src={imgf} alt="photo"/>
                        </TeamCardImage>
                       
                        <TeamCardName>Alice Logan</TeamCardName>
                        <TeamCardPost>Director</TeamCardPost>
                        <TeamCardCert>BSc, MSc</TeamCardCert>
                        <TeamCardFeatures>
                            <TeamCardFeature>My name is Dora Kent and am passionate about blogging</TeamCardFeature>
                        </TeamCardFeatures>
                    
                    </TeamCardInfo>
                </TeamCard>
                <TeamCard>
                    <TeamCardInfo>
                        <TeamCardImage>
                            <Image src={img1} alt="photo"/>
                        </TeamCardImage>
                       
                        <TeamCardName>Suzan Kent</TeamCardName>
                        <TeamCardPost>Ass. Director</TeamCardPost>
                        <TeamCardCert>BSc, MSc</TeamCardCert>
                        <TeamCardFeatures>
                            <TeamCardFeature>My name is Dora Kent and am passionate about blogging</TeamCardFeature>
                        </TeamCardFeatures>
                    
                    </TeamCardInfo>
                </TeamCard>
                
                <TeamCard>
                    <TeamCardInfo>
                        <TeamCardImage>
                            <Image src={img2} alt="photo"/>
                        </TeamCardImage>
                        
                        <TeamCardName>Terry Boris</TeamCardName>
                        <TeamCardPost>CTO</TeamCardPost>
                        <TeamCardCert>BTech</TeamCardCert>
                        <TeamCardFeatures>
                            <TeamCardFeature>My name is Terry Boris and am passionate about blogging</TeamCardFeature>
                        </TeamCardFeatures>
                    </TeamCardInfo>
                </TeamCard>
            </TeamContainer>
            </motion.div>
        </TeamWrapper>      
        </TeamSection> 
     </IconContext.Provider>
     </>
        
    )
}

export default OurTeam

