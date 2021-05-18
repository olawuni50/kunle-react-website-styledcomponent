import myImage from "../../Images/svg-1.svg"
import myImage2 from "../../Images/profile.jpg"
import myImage3 from "../../Images/svg-2.svg"
import myImage4 from "../../Images/svg-3.svg"
import img2 from "../../Images/curveNegative.svg"

export const homeObjOne={ 
    id:"home",
    lightBg: false,
    Bg: (`${img2}`),
    primary:true,
    imgStart:" ",
    lightTopLine: true,
    lightTextDesc: true,
    buttonLabel:"Get Start",
    description:"We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals", 
    headLine:'Lead Generation Specialist for Online Businesses',
    lightText:true,
    topLine:"Marketting Agency",
    img: (`${myImage}`),
    start:"",
    alt:"Image"
}

export const homeObjTwo={
    id: "products",
    lightBg: false,
    primary:true,
    imgStart:false,
    lightTopLine: false,
    lightTextDesc: true, 
    buttonLabel:"Get Start",
    description:"We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals", 
    headLine:'Our Products are used all over the world',
    lightText: true,
    topLine:"Products",
    img: (`${myImage2}`),
    start:"true",

    alt:"Image"
}

export const homeObjThree={
    id:"contact",
    lightBg: true,
    primary:true,
    imgStart:" ",
    lightTopLine: false,
    lightTextDesc: false,
    buttonLabel:"Contact Us",
    description:"Our staff are ready to answer your complaint, just Email us", 
    headLine:'We respond to emails within 24hrs',
    lightText:false,
    topLine:"Customer Support",
    img: (`${myImage3}`),
    start:"",
    alt:"Image"
}

export const homeObjFour={
    lightBg: false,
    primary:true,
    imgStart:true,
    lightTopLine: true,
    lightTextDesc: true,
    buttonLabel:"Get Start",
    description:"We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals", 
    headLine:'Lead Generation Specialist for Online Businesses',
    lightText:true,
    topLine:"Marketting Agency",
    img: (`${myImage4}`),
    start:"true",
    alt:"Image"
}