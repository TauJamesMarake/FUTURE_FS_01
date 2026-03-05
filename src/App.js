import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import SocialIcons from './components/SocialIcons';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import profilePicture from './images/profile_picture.jpg';
import './App.css';

function App() {
    const [activePage, setActivePage] = useState(0);
    const [slideDirection, setSlideDirection] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handlePageChange = (newPage) => {
        setSlideDirection(newPage > activePage ? 'left' : 'right');
        setActivePage(newPage);
        setMobileMenuOpen(false); // close drawer on nav
    };

    return (
        <div className='app-container'>
            {/* SIDEBAR: visible on desktop, hidden on mobile */}
            <Sidebar activePage={activePage} onPageChange={handlePageChange} />

            {/* MOBILE TOP NAVBAR */}
            <div className='mobile-navbar'>
                <div className='mobile-navbar-profile'>
                    <img src={require('./images/firstPrince.jpg')} alt='Profile' />
                </div>
                <span className='mobile-navbar-name'>TAU J. MARAKE</span>
                <button
                    className='mobile-burger'
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label='Toggle menu'
                >
                    <span className={`burger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`burger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`burger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                </button>
            </div>

            {/* MOBILE DRAWER OVERLAY */}
            {mobileMenuOpen && (
                <div className='mobile-overlay' onClick={() => setMobileMenuOpen(false)} />
            )}

            {/* MOBILE DRAWER */}
            <div className={`mobile-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`}>
                <Sidebar activePage={activePage} onPageChange={handlePageChange} mobile />
            </div>

            {/* BACKGROUND LAYER */}
            {/* profile pic slides down smoothly as pages change */}
            <div className='background-layer'>
                <img
                    src={profilePicture}
                    alt=''
                    className='background-layer-img'
                    style={{ transform: `translateY(${activePage * -10}%)` }}
                />
            </div>

            {/* MAIN CONTENT */}
            <div className='content-wrapper'>
                <div className={`pages-container slide-${slideDirection}`}>
                    {activePage === 0 && <Home onNavigate={handlePageChange} />}
                    {activePage === 1 && <About />}
                    {activePage === 2 && <Projects />}
                    {activePage === 3 && <Resume />}
                    {activePage === 4 && <Contact />}
                </div>
            </div>

            {/* SOCIAL ICONS */}
            <SocialIcons />
        </div>
    );
}

export default App;