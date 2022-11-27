import React from "react";
import './contentHeader.css'

const ContentHeader = ({ contentHeader, className }) => {
    return (
            <span className={className}>{contentHeader}</span>
    )
}

export default ContentHeader