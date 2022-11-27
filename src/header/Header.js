import React from "react";
import './header.css'
import Logo from '../logo/Logo'
import ContentHeader from '../contentHeader/ContentHeader'
import ContentBody from '../contentBody/contentBody'

const Header = () => {
    return (
        <div className="App-header">
            <Logo />
            <h2 className='heading'>{'Hey there! 👋'}</h2>
            <p className='header-subtext'>{'Cool Web Dev is your one stop to learn complete web development end to end. It will provide you step by step guide on how to become a cool web dev.'}</p>
            <ContentHeader contentHeader='Frontend Development' className='content-head-tag' />
            <div className="content-body-container">
                <ContentBody contentHeader='Internet' contentSubText='How does the Internet work. What is HTTP and Browser and how does it work.'/>
                <ContentBody contentHeader='HTML' contentSubText='Learn the Basics, Semantic HTML, Forms & Validations and SEO basics.'/>
                <ContentBody contentHeader='CSS' contentSubText='Learn the Basics, Making layouts and Responsive Design and Media Queries'/>
                <ContentBody contentHeader='JavaScript' contentSubText='Learn basic constructs, DOM Manipulation, Fetch API, ES6+ and all other JS concepts.' />
                <ContentBody contentHeader='Package Managers' contentSubText='npm is the default package manager for the JavaScript runtime environment.' />
                <ContentBody contentHeader='Framework' contentSubText='Web frameworks are designed to write web applications. Eg: React, Angular, Vue.' />
                <ContentBody contentHeader='Modern CSS' contentSubText='It includes methods such as Styled Components, CSS Modules, Styled JSX, Emotion, etc.' />
                <ContentBody contentHeader='Testing Your Apps' contentSubText='Before delivering your app, Test your app meets the design requirements or not.' />
                <ContentBody contentHeader='SSR' contentSubText='Server-side rendering refers to the process that the service side completes.' />
                <ContentBody contentHeader='GraphQL' contentSubText='A query language for APIs and a runtime for fulfilling those queries with your existing data.' />
                <ContentBody contentHeader='Mobile Applications' contentSubText='Javascript developers can build Mobile Apps using React Native, Flutter etc.' />
                <ContentBody contentHeader='Desktop Applications' contentSubText='Javascript developers can build Mobile Apps using Electron NodeGUI etc.' />
            </div>
            <ContentHeader contentHeader='Skill Based' className='content-head-tag' />
            <div className="content-body-container">
                <ContentBody contentHeader='React Js' contentSubText='How does the Internet work. What is HTTP and Browser and how does it work.'/>
                <ContentBody contentHeader='Node Js' contentSubText='Learn the Basics, Semantic HTML, Forms & Validations and SEO basics.'/>
                <ContentBody contentHeader='Next Js' contentSubText='Learn the Basics, Semantic HTML, Forms & Validations and SEO basics.'/>
                <ContentBody contentHeader='Express Js' contentSubText='Learn the Basics, Semantic HTML, Forms & Validations and SEO basics.'/>
                <ContentBody contentHeader='Vue' contentSubText='Learn the Basics, Semantic HTML, Forms & Validations and SEO basics.'/>
            </div>
        </div>
        
    )
}

export default Header