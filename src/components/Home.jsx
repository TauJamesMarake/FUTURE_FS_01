import React from 'react';
import profilePicture from '../images/profile_picture.jpg';
import { FlutterIcon, JavaScriptIcon, CSharpIcon, ReactIcon, } from '../models/icons.js';

function Home({ onNavigate }) {
    return (
        <div className="page home-page">
            {/* LEFT SIDE */}
            <div className="home-content">
                <h2>TAU <span className='middle-name'>J. </span>MARAKE</h2>

                {/* TAGLINES */}
                <div className="home-tagline-title bio">
                    <h1>Full Stack Developer</h1>
                    <div className="subtitle">
                        <span className='icon'>
                            <img src={FlutterIcon} alt='flutter' /> Flutter
                        </span>
                        <span className='icon'>
                            <img src={CSharpIcon} alt="csharp" /> C#
                        </span>
                        <span className='icon'>
                            <img src={JavaScriptIcon} alt="JavaScript" /> JavaScript
                        </span>
                        <span className='icon'>
                            <img src={ReactIcon} alt="react" /> React.js
                        </span>
                    </div>
                </div>
                <br />

                {/* DESCRIPTION */}
                <p className="home-description">
                    I design and develop scalable systems and digital experiences that blend functionality, creativity, and intent, helping businesses get more customers and manage operations online. I specialise in building functional modern web and mobile appplications.<br /><br />
                    There's more - <em>explore the craft behind the code.</em>
                </p>

                {/* CTA ABOUT ME BUTTON */}
                <button className="home-btn" onClick={() => onNavigate(1)}>
                    <span>EXPLORE THE WORKS</span>
                </button>
            </div>

            {/* RIGHT SIDE - profile picture */}
            <div className="home-image">
                <div className="home-image-circle">
                    <img
                        src={profilePicture}
                        alt="Tau - Software / Web Developer"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;