import React from 'react';
import "../Styles/Home.css";
import Typedjs from './Typed';
import resume from "../CV/Resume.pdf";
function Home() {

  return (

    <div className='container'>
      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-1'></div>

          <div className='smallSizeIntroSection'>
            <div className='col-md-5'>
              <h3 className='myDescription'>Hi, I am <span className='firstName'>Zaid Mahmood </span> From Pakistan</h3>
              <div className='typedHeight'>
                <Typedjs />
              </div>
              <button className='resumePdf mt-2'><a className='resumeAnchor' href={resume} download="Resume.pdf">Download CV</a></button>
            </div>

            <div className='col-md-6'>
              <div>
                <img className='homePhoto float-end' src={process.env.PUBLIC_URL + "/assets/homePhoto.png"} alt="home" />
              </div>
            </div>
          </div>

          <div className='largeSizeIntroSection'>
            <div className='col-md-5 introSection'>
              <h3 className='myDescription'>Hi, I am <span className='firstName'>Zaid Mahmood </span> <br /> From Pakistan</h3>
              <div className='typedHeight pb-4'>
                <Typedjs />
              </div>
              <button className='resumePdf'><a className='resumeAnchor' href={resume} download="Resume.pdf">Download CV</a></button>
            </div>

            <div className='col-md-6 imgSection'>
              <div>
                <img className='homePhoto float-end' src={process.env.PUBLIC_URL + "/assets/homePhoto.png"} alt="home" />
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  )
}

export default Home
