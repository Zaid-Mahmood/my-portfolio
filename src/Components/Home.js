import React from 'react';
import "../Styles/Home.css";
import Typedjs from './Typed';
import resume from "../CV/Resume.pdf";
import Footer from './Footer';
function Home() {

  return (
    <div className='position-relative' style={{height : "100vh"}}>
      <div className='homeWidth'>
        <div className='container'>
          <div className='row'>


            <div className='largeSizeIntroSection'>

              <div className='col-md-6 introSection'>
                <h3 className='myDescription'>Hi, I am <span className='firstName'>Zaid Mahmood </span> <br /> From Pakistan</h3>
                <div className='typedHeight pb-4'>
                  <Typedjs />
                </div>
                <button className='resumePdf'><a className='resumeAnchor' href={resume} download="Resume.pdf">Download CV</a></button>
              </div>

              <div className="col-md-6" style={{ marginTop: "15%", marginBottom: "10%" }} >
                <div className='d-flex align-items-center justify-content-end homePhotoSize'>
                  <div className="position-relative">
                    <div
                      style={{
                        border: "2px solid white",
                        transform: "rotate(20deg)",
                        height: "50vh",
                        width: "20vw",
                        zIndex: 2,
                        right: 0
                      }}
                      className="border-2 rounded-5 text-center"
                    ></div>

                    <div
                      style={{
                        border: "2px solid rgb(214, 72, 96)",
                        transform: "rotate(-20deg)",
                        height: "50vh",
                        width: "20vw",
                        left: "15px",
                      }}
                      className="border-2 rounded-5  text-center position-absolute top-0"
                    ></div>

                    <video className="position-absolute" loop muted onCanPlayThrough={(e) => e.target.play()} style={{
                      transform: "rotate(0deg)",
                      width: "55%",
                      height: "55%",
                      left: "25%",
                      top: "25%",
                      objectFit: "contain",
                      zIndex: 0
                    }}>
                      <source src={process.env.PUBLIC_URL + "assets/profileVideo2.mp4"} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='smallSizeIntroSection container-fluid'>
        <div className='col-md-1'></div>

        <div className='col-md-5' style={{ maxWidth: "45%" }}>
          <h3 className='myDescription'>Hi, I am <span className='firstName'>Zaid Mahmood </span> From Pakistan</h3>
          <div className='typedHeight'>
            <Typedjs />
          </div>
          <button className='resumePdf mt-5'><a className='resumeAnchor' href={resume} download="Resume.pdf">Download CV</a></button>
        </div>

        <div className='col-md-5'>
          <div className="position-relative">
            <div
              style={{
                border: "2px solid white",
                transform: "rotate(20deg)",
                height: "30vh",
                width: "25vw",
                zIndex: 2,
              }}
              className="border-2 rounded-5 text-center"
            ></div>

            <div
              style={{
                border: "2px solid rgb(214, 72, 96)",
                transform: "rotate(-20deg)",
                height: "30vh",
                width: "25vw",
                left: "1px",
              }}
              className="border-2 rounded-5  text-center position-absolute top-0"
            ></div>

            <video className="position-absolute" loop muted onCanPlayThrough={(e) => e.target.play()} style={{
              transform: "rotate(0deg)",
              width: "45%",
              height: "45%",
              left: "30%",
              top: "30%",
              objectFit: "contain",
              zIndex: 0
            }}>
              <source src={process.env.PUBLIC_URL + "assets/profileVideo2.mp4"} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className='col-md-1'></div>
      </div>
      <div className='position-absolute  start-50 bottom-0 translate-middle'>
      <Footer/>
      </div>
    </div>
  )
}

export default Home
