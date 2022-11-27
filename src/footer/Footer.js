import React from "react"
import './footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div id="horizontal-list">
                <a href="www.coolwebdev.com">{'Home'}</a>
                <a href="www.coolwebdev.com">{'About'}</a>
                <a href="www.coolwebdev.com">{'FAQ'}</a>
                <a href="www.coolwebdev.com">{'Github'}</a>
                <a href="mailto:agrawalChetan78@gmail.com">{'Contact'}</a>
            </div>
            <div className='footer-copyrights'>
                <p>{'Website & Name © 2022  '}<span className="coolwebdev"><a href='www.coolwebdev.com'>{'coolwebdev.com'}</a></span></p>
                <p>{'Powered by Netlify & Github'}</p>
            </div>
        </div>
        
    )
}

export default Footer