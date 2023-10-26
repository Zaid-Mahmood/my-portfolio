import "../Styles/Portfolio.css";
import { useState } from 'react';
function Portfolio() {
  const firstRow =
    <div className='row'>
      <div className='col-md-4 py-2'>
        <div className="card">
          <img src={process.env.PUBLIC_URL + "/assets/bmiImage.png"} className="card-img-top images" alt="card-img" />
          <div className="card-body">
            <h5 className="card-title text-decoration-underline">BMI Calculator</h5>
            <p className="card-text">Body mass index (BMI) is a measure of body fat based on height and
              weight that applies to adult men and women.</p>
            <a className="linkIcon" href="https://github.com/Zaid-Mahmood/body-mass-index-calculator" target="_blank" rel="noreferrer"><i className="text-center bi bi-box-arrow-up-left"></i></a>
            <button onClick={() => newTab("https://github.com/Zaid-Mahmood/body-mass-index-calculator")} className="gitLink">Github Link</button>
          </div>
        </div>
      </div>

      <div className='col-md-4 py-2'>
        <div className="card">
          <img src={process.env.PUBLIC_URL + "/assets/e-commerce.png"} className="card-img-top images img-fluid" alt="card-img" />
          <div className="card-body">
            <h5 className="card-title text-decoration-underline">E-commerce Store</h5>
            <p className="card-text">Website for trading of goods and services on the internet.</p>
            <a className="linkIcon" href="https://github.com/Zaid-Mahmood/E-commerce" target="_blank" rel="noreferrer" ><i className="bi bi-box-arrow-up-left"></i></a>
            <button onClick={() => newTab("https://github.com/Zaid-Mahmood/E-commerce")} className="gitLink">Github Link</button>
          </div>
        </div>
      </div>

      <div className='col-md-4 py-2'>
        <div className="card">
          <img src={process.env.PUBLIC_URL + "/assets/multi-step-form.png"} className="card-img-top images" alt="card-img" />
          <div className="card-body">
            <h5 className="card-title text-decoration-underline">Multi-Step-Form</h5>
            <p className="card-text">Demo website for shopping which mainly depends on user plans selection
              and show the individual and overall prices accordingly.</p>
            <a className="linkIcon" href="https://github.com/Zaid-Mahmood/multi-step-form" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-left"></i></a>
            <button className="gitLink" onClick={() => newTab("https://github.com/Zaid-Mahmood/multi-step-form")}>Github Link</button>
          </div>
        </div>
      </div>
    </div>
  const [addProjects, setAddProjects] = useState(false);
  const seeBtn = () => {
    setAddProjects(!addProjects)
  }
  const newTab = (url) => {
    window.open(url, "_blank", 'noopener, noreferrer')
  }
  return (
    <div className='porfolioSection container text-center'>
      <div className=''>
        <h3>My Work</h3>
      </div>

      {addProjects ?
        <>
          {firstRow}

          <div className="row py-4">
            <div className='col-md-4'>
              <div className="card">
                <img src={process.env.PUBLIC_URL + "/assets/recoil-form.png"} className="card-img-top images" alt="card-img" />
                <div className="card-body">
                  <h5 className="card-title text-decoration-underline">Users Data in Table</h5>
                  <p className="card-text">Website demo to showcase the users data from one component to another
                    component in table using Recoil.</p>
                  <a href="https://github.com/Zaid-Mahmood/RecoilForm" target="_blank" rel="noreferrer" className="linkIcon"><i className="bi bi-box-arrow-up-left"></i></a>
                  <button className="gitLink" onClick={() => newTab("https://github.com/Zaid-Mahmood/RecoilForm")}>Github Link</button>
                </div>
              </div>
            </div>

            <div className='col-md-4 py-2'>
              <div className="card">
                <img src={process.env.PUBLIC_URL + "/assets/student-loan-calculator.png"} className="card-img-top images" alt="card-img" />
                <div className="card-body">
                  <h5 className="card-title text-decoration-underline">Student Loan Calculator</h5>
                  <p className="card-text">Student loan calculator shows what your and your spouse monthly loan payments will look like and how your loans will amortize over time.</p>
                  <a href="https://github.com/Zaid-Mahmood/Student-Loan-Calculator" className="linkIcon" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-left"></i></a>
                  <button className="gitLink" onClick={() => newTab("https://github.com/Zaid-Mahmood/Student-Loan-Calculator")}>Github Link</button>
                </div>
              </div>
            </div>

            <div className='col-md-4 py-2'>
              <div className="card">
                <img src={process.env.PUBLIC_URL + "/assets/zoocasa.png"} className="card-img-top images" alt="card-img" />
                <div className="card-body">
                  <h5 className="card-title text-decoration-underline">Zoocasa Landing Page</h5>
                  <p className="card-text">Builds the pixel perfect design of zoocasa.com landing page.</p>
                  <a href="https://github.com/Zaid-Mahmood/zoocasa-landing-page" className="linkIcon" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-left"></i></a>
                  <button className="gitLink" onClick={() => newTab("https://github.com/Zaid-Mahmood/zoocasa-landing-page")}>Github Link</button>
                </div>
              </div>
            </div>
          </div>


          <div className="row py-4">

            <div className='col-md-4'>
              <div className="card">
                <img src={process.env.PUBLIC_URL + "/assets/alphalette.png"} className="card-img-top images" alt="card-img" />
                <div className="card-body">
                  <h5 className="card-title text-decoration-underline">Alphaleteathletics Landing Page</h5>
                  <p className="card-text">Builds the pixel perfect design of alphaleteathletics.com landing page.</p>
                  <a className="linkIcon" href="https://github.com/Zaid-Mahmood/alphalette-landing-page" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-left"></i></a>
                  <button onClick={() => newTab("https://github.com/Zaid-Mahmood/alphalette-landing-page")} className="gitLink">Github Link</button>
                </div>
              </div>
            </div>

            <div className='col-md-4 py-2'>
              <div className="card">
                <img src={process.env.PUBLIC_URL + "/assets/react-register-form.png"} className="card-img-top images" alt="card-img" />
                <div className="card-body">
                  <h5 className="card-title text-decoration-underline">Registration Form</h5>
                  <p className="card-text">Made Registration Form so that admin can handle users data like add, read, edit and delete it.</p>
                  <a href="https://github.com/Zaid-Mahmood/react-registration-form" className="linkIcon" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-left"></i></a>
                  <button onClick={() => newTab("https://github.com/Zaid-Mahmood/react-registration-form")} className="gitLink">Github Link</button>
                </div>
              </div>
            </div>

            <div className='col-md-4 py-2'>
              <div className="card">
                <img src={process.env.PUBLIC_URL + "/assets/todo-app.png"} className="card-img-top images" alt="card-img" />
                <div className="card-body">
                  <h5 className="card-title text-decoration-underline">Todo App</h5>
                  <p className="card-text">Helps user to add its daily tasks, edit his tasks, update tasks and delete the task. Moreover, the user can also search the tasks from the lists of tasks.</p>
                  <a href="https://github.com/Zaid-Mahmood/todo-app" className="linkIcon" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-left"></i></a>
                  <button onClick={() => newTab("https://github.com/Zaid-Mahmood/todo-app")} className="gitLink">Github Link</button>
                </div>
              </div>
            </div>
          </div>
        </>
        :
        <>
            {firstRow}

          <div className="text-center">
            <button className="mt-3 seeMoreBtn text-decoration-none" onClick={() => seeBtn()}>See more</button>
          </div>
        </>
      }

    </div>
  )
}

export default Portfolio
