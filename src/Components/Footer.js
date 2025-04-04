import "../Styles/Footer.css";
function Footer() {
    return (
        <div className='footerSection pt-5'>
            <div className='followText text-center'>
                <h2>Follow Me</h2>

                <button>
                    <a href="https://www.linkedin.com/in/zaid-mahmood-web-developer" target="_blank" rel="noopener noreferrer">
                        <i className="icons bi bi-linkedin"></i>
                    </a>
                </button>
                <button>
                    <a href="https://github.com/Zaid-Mahmood" target="_blank" rel="noopener noreferrer">
                        <i className="icons bi bi-github"></i>
                    </a>
                </button>

                <button>
                    <a href="mailto:mahmoodzaid603@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="icons bi bi-envelope"></i>
                    </a>
                </button>
            </div>

        </div>
    )
}

export default Footer
