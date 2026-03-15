import React from 'react';
import { Home, User, FileText, MessageSquare, Mail, } from 'lucide-react';
import profilePicture from '../images/firstPrince.jpg';

function Sidebar({ activePage, onPageChange, mobile }) {

    const MenuItems = [
        { icon: Home, label: 'HOME' },
        { icon: User, label: 'ABOUT' },
        { icon: MessageSquare, label: 'PROJECTS' },
        { icon: FileText, label: 'RESUME' },
        { icon: Mail, label: 'CONTACT' },
    ];

    return (
        <div className={`sidebar ${mobile ? 'sidebar-mobile' : ''}`}>
            {/* PROFILE IMAGE- only show in desktop sidebar, not mobile drawer header */}
            {!mobile && (
                <div className='sidebar-profile'>
                    <img src={profilePicture} alt='Profile' />
                </div>
            )}

            {mobile && (
                <div className='mobile-drawer-header'>
                    <div className='sidebar-profile mobile-drawer-profile'>
                        <img src={profilePicture} alt='Profile' />
                    </div>
                    <p className='mobile-drawer-name'>TAU J. MARAKE</p>
                </div>
            )}

            {/* NAVIGATION MENU */}
            <nav className='sidebar-nav'>
                {MenuItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={index}
                            className={`nav-item ${activePage === index ? 'active' : ''}`}
                            onClick={() => onPageChange(index)}
                        >
                            <Icon size={18} />
                            <span className='sidebar-label'>{item.label}</span>
                        </div>
                    );
                })}
            </nav>
            <div className="copyright">
                <p>&copy; {new Date().getFullYear()} Tau J. Marake</p>
            </div>
        </div>
    );
}

export default Sidebar;
