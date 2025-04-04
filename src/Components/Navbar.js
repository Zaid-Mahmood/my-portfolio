import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../Styles/NavBar.css";

function Navbar() {
    const location = useLocation();
    const [menuBarStatus, setMenuBarStatus] = useState(false);
    const [activeTab, setActiveTab] = useState(location.pathname);
    const offcanvasRef = useRef(null);
    const offcanvasContainerRef = useRef(null); 

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location.pathname]);

    const menuBarFunction = () => {
        setMenuBarStatus(!menuBarStatus);
    };

    const hideOffcanvas = () => {
        if (offcanvasRef.current) {
            const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasRef.current);
            if (bsOffcanvas) {
                bsOffcanvas.hide();
            }
        }
        setMenuBarStatus(false); 
    };

    useEffect(() => {
        if (!menuBarStatus) {
            hideOffcanvas();
        }
    }, [menuBarStatus]);

    return (
        <div className='navbarSection py-3'>
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center'>
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
                    <div  onClick={menuBarFunction} className='smallScreenNav'>
                        <button className="menuBtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><span><i className="bi bi-list fw-bolder fs-2"></i></span></button>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" ref={offcanvasRef}>
                            <div ref={offcanvasContainerRef} className="offcanvas-content"> {/* New container div */}
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title text-white" id="offcanvasRightLabel">MenuBar</h5>
                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => setMenuBarStatus(false)}></button>
                                </div>
                                <div className="offcanvas-body py-0">
                                    <ul className="navbar-nav align-items-start smallScreens">

                                        <li className="nav-item ms-2">
                                            <Link className={`pagesLinks mx-3 ${activeTab === "/" ? 'activate' : ''}`} to="/" onClick={() => {
                                                setActiveTab("/");
                                                setMenuBarStatus(false);
                                            }}>Home</Link>
                                        </li>
                                        <li className="nav-item ms-2">
                                            <Link className={`pagesLinks mx-3 ${activeTab === "/about" ? 'activate' : ''}`} to="/about" onClick={() => {
                                                setActiveTab("/about");
                                                setMenuBarStatus(false);
                                            }}>About</Link>

                                        </li>
                                        <li className="nav-item ms-2">
                                            <Link className={`pagesLinks mx-3 ${activeTab === "Portfolio" ? 'activate' : ''}`} to="/portfolio" onClick={() => {
                                                setActiveTab("Portfolio");
                                                setMenuBarStatus(false);
                                            }}>Portfolio</Link>
                                        </li>
                                        <li className="nav-item ms-2">
                                            <Link className={`pagesLinks mx-3 ${activeTab === "Contact" ? 'activate' : ""}`} to="/contact" onClick={() => {
                                                setActiveTab("Contact");
                                                setMenuBarStatus(false);
                                            }}>Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
