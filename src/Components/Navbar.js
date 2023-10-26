import React, { useState , useEffect } from 'react';
import "../Styles/NavBar.css";
import { Link, useLocation } from 'react-router-dom';
function Navbar() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.pathname);
    useEffect(() => {
        setActiveTab(location.pathname);
      }, [location.pathname]);
    

    return (
        <div className='navbarSection py-3'>
            <div className='container-fluid'>
            <div className='d-flex justify-content-around align-items-center'>
                <div className='leftSection'>
                    <Link className='nameLink' to="/">
                        <span>
                            Z
                        </span>
                        aid &nbsp;
                        <span>
                            M
                        </span>
                        ahmood
                    </Link>
                </div>

                <div className="rightSection text-end align-content-center">
                    <ul className="menus list-unstyled m-0">
                        <Link className={`pagesLinks mx-3 ${activeTab === "/" ? 'activate' : ''}`} to="/"
                            onClick={() => setActiveTab("/")}>Home</Link>
                        <Link className={`pagesLinks mx-3 ${activeTab === "/about" ? 'activate' : ''}`} to="/about"
                            onClick={() => setActiveTab("/about")}>About</Link>
                        <Link className={`pagesLinks mx-3 ${activeTab === "/portfolio" ? 'activate' : ''}`} to="/portfolio" onClick={() => setActiveTab("/portfolio")}>Portfolio</Link>

                        <Link className={`pagesLinks mx-3 ${activeTab === "/contact" ? 'activate' : ""}`} to="/contact" onClick={() => setActiveTab("/contact")}>Contact</Link>
                    </ul>
                </div>


                {/* off canvas */}
                <div className='smallScreenNav'>
                    <button class="menuBtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><span><i class="bi bi-list fw-bolder fs-2"></i></span></button>

                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title text-white" id="offcanvasRightLabel">MenuBar</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body py-0">
                            <ul class="navbar-nav align-items-start smallScreens">

                                <li class="nav-item ms-2">
                                    <Link className={`pagesLinks mx-3 ${activeTab  === "/" ? 'activate' : ''}`} to="/" onClick={() =>setActiveTab("/")}>Home</Link>
                                </li>
                                <li class="nav-item ms-2">
                                    <Link className={`pagesLinks mx-3 ${activeTab === "/about" ? 'activate' : ''}`} to="/about" onClick={() => setActiveTab("/about")}>About</Link>

                                </li>
                                <li class="nav-item ms-2">
                                    <Link className={`pagesLinks mx-3 ${activeTab === "Portfolio" ? 'activate' : ''}`} to="/portfolio" onClick={() => setActiveTab("Portfolio")}>Portfolio</Link>
                                </li>
                                <li class="nav-item ms-2">
                                    <Link className={`pagesLinks mx-3 ${activeTab === "Contact" ? 'activate' : ""}`} to="/contact" onClick={() => setActiveTab("Contact")}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}

export default Navbar
