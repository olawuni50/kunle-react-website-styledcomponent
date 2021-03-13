import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import GlobalStyle from './components/NavBars/globalStyles'
import NavBars from './components/NavBars/NavBars'
import Footer from './components/Footer/Footer'
import Home from "./pages/HomePage/Home"
import Products from "./pages/Products/Products"
import Services from "./pages/Services/Services"
import SignUp from "./pages/SignUp/SignUp"
import ScrollToTop from './components/ScrollToTop'




function App() { 
    return (
        <Router>
            <GlobalStyle/>
            
            <NavBars/>            
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/products" exact component={Products}/>
                <Route path="/services" exact component={Services}/>
                <Route path="/sign-up" exact component={SignUp}/>
            </Switch>
            <Footer/>
        </Router>
    ) 
}

export default App
