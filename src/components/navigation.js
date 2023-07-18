import React from 'react';

// Define a functional component called Navigation
const Navigation = () => {
    // The component renders the following JSX content
    return (
        // Navigation bar container with class 'navbar'
        <nav className='navbar'>
            {/* Unordered list to hold navigation items with class 'nav-list' */}
            <ul className='nav-list'>
                {/* Individual navigation item for 'Home' */}
                <li className='nav-item'><a href='#'>Home</a></li>
                {/* Individual navigation item for 'About' */}
                <li className='nav-item'><a href='#'>About</a></li>
                {/* Individual navigation item for 'Contact' */}
                <li className='nav-item'><a href='#'>Contact</a></li>
            </ul>
        </nav>
    );
};

// Export the Navigation component to make it available for other parts of the application
export default Navigation;
