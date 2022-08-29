import React from 'react'
import MyImage1 from "./Photos/mycart.svg";

export const Tweet = () => {
    const myStyle={backgroundColor:"yellow",color:"black", borderRadius:"5px" ,width:"200px"}
    const ContactEmp={
        minHeight:"600px"
      }
    const ImgWidth={
        width:"400px",
        marginTop:"150px",
        marginLeft:"100px"
    }  
    
    return (
        <div>
            <div style={ContactEmp} className='row'>
                <div className='col'>
                    <img style={ImgWidth} src={MyImage1} />
                </div>
                <div className='col my-auto' >
                    <h3>Your Amazon Cart is empty</h3>
                    <p>Shop today’s deals</p>
                    <button style={myStyle}>Sign in to your Account</button> <button style={myStyle}>Sign up Now</button>
                </div>
            </div>
        </div>
    )
}
