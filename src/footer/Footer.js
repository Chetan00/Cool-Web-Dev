import React from "react"
import './footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div id="horizontal-list">
                <a href="#">{'Home'}</a>
                <a href="#">{'About'}</a>
                <a href="#">{'FAQ'}</a>
                <a href="#">{'Github'}</a>
                <a href="mailto:agrawalChetan78@gmail.com">{'Contact'}</a>
            </div>
            <div className='footer-copyrights'>
                <h4><p>{'Website & Name © 2022  '}<span className="coolwebdev"><a href='www.coolwebdev.com'>{'coolwebdev.com'}</a></span></p>
                <p>{'Powered by Netlify & Github'}</p></h4>
            </div>
        </div>
        
    )
}

export default Footer