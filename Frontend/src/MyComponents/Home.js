import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { SubHeader } from "./SubHeader";
import "./Home.css";
import MyCarousel1 from './Photos/am1.jpg'
import MyCarousel2 from './Photos/am2.jpg'
import MyCarousel3 from './Photos/am3.jpg'
import { Products } from "./Products";


function Home() {
  const textStyle = {
    justifyContent: "center",
  };

  let cardStyle = {
    width: "18rem",
  };
  return (
    <>
      <SubHeader />
      
      <div className="container-fluid mx-0">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={MyCarousel1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={MyCarousel2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={MyCarousel3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <Products/>

      <div className="container my-5">
        <div className="row my-2">
          <div className="col">
            <img
              src="https://source.unsplash.com/500x300/?technology,IT industry"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Python</h5>
              <p className="card-text"></p>
              <Link to="/python" className="btn btn-primary" style={textStyle}>
                Start Learning
              </Link>
            </div>
          </div>
          <div className="col">
            <img
              src="https://source.unsplash.com/500x300/?technology,IT industry"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Java</h5>
              <p className="card-text"></p>
              <Link to="java" className="btn btn-primary ">
                Start Learning
              </Link>{" "}
            </div>
          </div>
          <div className="col">
            <img
              src="https://source.unsplash.com/500x300/?technology,IT industry"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">React Js</h5>
              <p className="card-text"></p>
              <Link to="reactjs" className="btn btn-primary  ">
                Start Learning
              </Link>
            </div>
          </div>
          <div className="col">
            <img
              src="https://source.unsplash.com/500x300/?technology,IT industry"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">HTML</h5>
              <p className="card-text"></p>
              <Link to="html" className="btn btn-primary  ">
                Start Learning
              </Link>
            </div>
          </div>
        </div>

        <div className="row my-2">
          <div className="col">
            <img
              src="https://source.unsplash.com/500x300/?technology,IT industry"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Python</h5>
              <p className="card-text"></p>
              <Link to="/python" className="btn btn-primary ">
                Start Learning
              </Link>
            </div>
          </div>
          <div className="col">
            <img
              src="https://source.unsplash.com/500x300/?technology,IT industry"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Java</h5>
              <p className="card-text"></p>
              <Link to="java" className="btn btn-primary  ">
                Start Learning
              </Link>
            </div>
          </div>
          <div className="col">
            <img
              src="https://source.unsplash.com/500x300/?technology,IT industry"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">React Js</h5>
              <p className="card-text"></p>
              <Link to="reactjs" className="btn btn-primary  ">
                Start Learning
              </Link>
            </div>
          </div>
          <div className="col">
            <img
              src="https://source.unsplash.com/500x300/?technology,IT industry"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">HTML</h5>
              <p className="card-text"></p>
              <Link to="html" className="btn btn-primary  ">
                Start Learning
              </Link>
            </div>
          </div>
        </div>
        <div className="row my-2">
          <div className="col">
            <img
              src="https://source.unsplash.com/500x300/?technology,IT industry"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Python</h5>
              <p className="card-text"></p>
              <Link to="/python" className="btn btn-primary ">
                Start Learning
              </Link>
            </div>
          </div>
          <div className="col">
            <img
              src="https://source.unsplash.com/500x300/?technology,IT industry"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Java</h5>
              <p className="card-text"></p>
              <Link to="java" className="btn btn-primary  ">
                Start Learning
              </Link>
            </div>
          </div>
          <div className="col">
            <img
              src="https://source.unsplash.com/500x300/?technology,IT industry"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">React Js</h5>
              <p className="card-text"></p>
              <Link to="reactjs" className="btn btn-primary  ">
                Start Learning
              </Link>
            </div>
          </div>
          <div className="col">
            <img
              src="https://source.unsplash.com/500x300/?technology,IT industry"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">HTML</h5>
              <p className="card-text"></p>
              <Link to="html" className="btn btn-primary  ">
                Start Learning
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
