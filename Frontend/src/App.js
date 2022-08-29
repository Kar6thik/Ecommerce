import './App.css';
import React from 'react';
import Home from './MyComponents/Home';
import Contact  from './MyComponents/Contact';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { About } from "./MyComponents/About";
import { Java } from './HomeFiles/Java';
import { Html } from './HomeFiles/Html';
import {ReactJs} from './HomeFiles/ReactJs';
import {Python} from './HomeFiles/Python';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import { Tweet } from './MyComponents/Tweet';
import {MultipleImages} from './MyComponents/MultipleImages';
import {MoreProducts} from './MyComponents/MoreProducts'

function App() {

  return ( 
    <> 
    <Router>
      <Header/> 
      <Routes>  
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/python" element={<Python/>}/>
          <Route exact path="/html" element={<Html/>}/>
          <Route exact path="/reactjs" element={<ReactJs/>}/>
          <Route exact path="/java" element={<Java/>}/>
          <Route exact path="/products" element={<MultipleImages/>}/>
          <Route exact path="/tweets" element={<Tweet/>}/>
          <Route exact path="/more" element={<MoreProducts/>}/>
        </Routes> 
      <Footer />
    </Router>
    </>
  );
}

export default App;
