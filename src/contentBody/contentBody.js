import React from "react";
import './contentBody.css'

const ContentBody = ({ contentHeader, className, contentSubText }) => {
    return (
        <div className={'content-head-sub-container'}>
            <a href='www.coolwebdev.com'>
                <h2 className='body-text'>{contentHeader}</h2>
                <p className='body-text'>{contentSubText}</p>
            </a>
        </div>
    )
}

export default ContentBody