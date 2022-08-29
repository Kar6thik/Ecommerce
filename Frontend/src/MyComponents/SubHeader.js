import React from 'react'

import MyImage1 from './Photos/1.png'
import MyImage2 from './Photos/2.webp'
import MyImage3 from './Photos/3.webp'
import MyImage4 from './Photos/4.webp'
import MyImage5 from './Photos/5.webp'
import MyImage6 from './Photos/6.webp'
import MyImage7 from './Photos/7.webp'
import MyImage8 from './Photos/8.webp'
import MyImage9 from './Photos/9.webp'
import { Link } from 'react-router-dom'


export const SubHeader = () => {

const myStyle={
    width:"100px" ,height:"100px"
}

    return (
        <div className="container text-center my-2">
            <div className="row">
                <div className="col-lg-1.5 col-md-1.5 col">
                    <Link to="">
                    <img src={MyImage1} style={myStyle} alt="first" /></Link>
                    <span>Mobiles</span>
                </div>
                <div className="col-lg-1.5 col-md-1.5 col">
                <Link to="">
                    <img src={MyImage2} style={myStyle} alt="first" /></Link>
                    <span>Fashion</span>
                </div>
                <div className="col-lg-1.5 col-md-1.5 col">
                <Link to="">
                    <img src={MyImage3} style={myStyle} alt="first" /></Link>
                    <span>Electronics</span>
                </div>
                <div className="col-lg-1.5 col-md-1.5 col">
                <Link to="">
                    <img src={MyImage4} style={myStyle} alt="first" /></Link>
                    <span>Beauty</span>
                </div>
                <div className="col-lg-1.5 col-md-1.5 col">
                <Link to="">
                    <img src={MyImage5} style={myStyle} alt="first" /></Link>
                    <span>Home</span>
                </div>
                <div className="col-lg-1.5 col-md-1.5 col">
                <Link to="">
                    <img src={MyImage6} style={myStyle} alt="first" /></Link>
                    <span>Appliences</span>
                </div>
                <div className="col-lg-1.5 col-md-1.5 col">
                <Link to="">
                    <img src={MyImage7} style={myStyle} alt="first" /></Link>
                    <span>Furniture</span>
                </div>
                <div className="col-lg-1.5 col-md-1.5 col">
                <Link to="">
                    <img src={MyImage8} style={myStyle} alt="first" /></Link>
                    <span>Tourism</span>
                </div>
                <div className="col-lg-1.5 col-md-1.5 col">
                <Link to="">
                    <img src={MyImage9} style={myStyle} alt="first" /></Link>
                    <span>Grocerry</span>
                </div>
            </div>
        </div>
    )
}
