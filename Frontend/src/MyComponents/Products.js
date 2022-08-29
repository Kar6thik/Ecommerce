import React from "react";
import { Link } from "react-router-dom";
import MyImage1 from "./Photos/bd1.jpg";
import MyImage2 from "./Photos/bd2.jpg";
import MyImage3 from "./Photos/bd3.jpg";
import MyImage4 from "./Photos/bd4.jpg";
import MyImage5 from "./Photos/bd7.jpg";
import MyImage6 from "./Photos/bd6.jpg";
import MyImage7 from "./Photos/kd1.jpg";
import MyImage8 from "./Photos/kd2.jpg";
import MyImage9 from "./Photos/kd3.jpg";
import MyImage10 from "./Photos/kd5.jpg";
import MyImage11 from "./Photos/kd6.jpg";
import MyImage12 from "./Photos/kd7.jpg";
import MyImage13 from "./Photos/hd1.jpg";
import MyImage14 from "./Photos/hd2.jpg";
import MyImage15 from "./Photos/hd3.jpg";
import MyImage16 from "./Photos/hd4.jpg";
import MyImage17 from "./Photos/hd5.jpg";
import MyImage18 from "./Photos/hd6.jpg";
export const Products = () => {
    const myStyle={
      width:"200px" ,height:"200px"
  }
  return (
    <>
    <div className="container text-center my-3">
      <h3 style={{textAlign:"left"}}>Blockbuster Deals to start shopping</h3>
      <div className="row">
        <div className="col-lg-1.5 col-md-1.5 col">
          <Link to="">
            <img src={MyImage1} alt="first" />
          </Link>
          <span>Samsung Mobiles</span>
        </div>
        <div className="col-lg-1.5 col-md-1.5 col">
          <Link to="">
            <img src={MyImage2} alt="first" />
          </Link>
          <span>Smart Watches</span>
        </div>
        <div className="col-lg-1.5 col-md-1.5 col">
          <Link to="">
            <img src={MyImage3} alt="first" />
          </Link>
          <span>Earphone and Earbuds</span>
        </div>
        <div className="col-lg-1.5 col-md-1.5 col">
          <Link to="">
            <img src={MyImage4} alt="first" />
          </Link>
          <span>Samsung Mobiles</span>
        </div>
        <div className="col-lg-1.5 col-md-1.5 col">
          <Link to="">
            <img src={MyImage5} alt="first" />
          </Link>
          <span>Jeans & Trousers</span>
        </div>
        <div className="col-lg-1.5 col-md-1.5 col">
          <Link to="">
            <img src={MyImage6} alt="first" />
          </Link>
          <span>Apparals</span>
        </div>
      </div>
    </div>
    <div className="container text-center my-3">
      <h3 style={{textAlign:"left"}}>Blockbuster Deals to start shopping</h3>
      <div className="row">
        <div className="col-lg-1.5 col-md-2 col">
          <Link to="">
            <img src={MyImage7} alt="first" />
          </Link>
          <span>Samsung Mobiles</span>
        </div>
        <div className="col-lg-1.5 col-md-2 col">
          <Link to="">
            <img src={MyImage8} alt="first" />
          </Link>
          <span>Smart Watches</span>
        </div>
        <div className="col-lg-1.5 col-md-2 col">
          <Link to="">
            <img src={MyImage9} alt="first" />
          </Link>
          <span>Earphone and Earbuds</span>
        </div>
        <div className="col-lg-1.5 col-md-2 col">
          <Link to="">
            <img src={MyImage10} alt="first" />
          </Link>
          <span>Samsung Mobiles</span>
        </div>
        <div className="col-lg-1.5 col-md-2 col">
          <Link to="">
            <img src={MyImage11} alt="first" />
          </Link>
          <span>Jeans & Trousers</span>
        </div>
        <div className="col-lg-1.5 col-md-2 col">
          <Link to="">
            <img src={MyImage12} alt="first" />
          </Link>
          <span>Jeans & Trousers</span>
        </div>
      </div>
    </div>
    <div className="container text-center my-3">
      <h3 style={{textAlign:"left"}}>Up to 75% off | Unique and latest home décor products</h3>
      <div className="row">
        <div className="col-lg-1.5 col-md-2 col">
          <Link to="">
            <img src={MyImage13} alt="first" />
          </Link>
          <span>Samsung Mobiles</span>
        </div>
        <div className="col-lg-1.5 col-md-2 col">
          <Link to="">
            <img src={MyImage14} alt="first" />
          </Link>
          <span>Smart Watches</span>
        </div>
        <div className="col-lg-1.5 col-md-2 col">
          <Link to="">
            <img src={MyImage15} alt="first" />
          </Link>
          <span>Earphone and Earbuds</span>
        </div>
        <div className="col-lg-1.5 col-md-2 col">
          <Link to="">
            <img src={MyImage16} alt="first" />
          </Link>
          <span>Samsung Mobiles</span>
        </div>
        <div className="col-lg-1.5 col-md-2 col">
          <Link to="">
            <img src={MyImage17} alt="first" />
          </Link>
          <span>Jeans & Trousers</span>
        </div>
        <div className="col-lg-1.5 col-md-2 col">
          <Link to="">
            <img src={MyImage18} alt="first" />
          </Link>
          <span>Jeans & Trousers</span>
        </div>
      </div>
    </div>
    </>
  );
};
