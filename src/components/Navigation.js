/*eslint no-unused-vars: "off"*/
import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// const work = 'Work', aboutMe = 'About Me', contact = 'Contact';

const Navigation = () => {
    return (
    <div>
        <Nav className="topNavigation">
        {/* <div className="topNavigation__items"><Link to="/contact/" className="Nav-link">{contact}</Link></div> */}
        {/* <div className="topNavigation__items"><Link to="/admin/" className="Nav-link">Admin</Link></div> */}
        {/* <div className="topNavigation__items"><Link to="/blog/" className="Nav-link">Blog</Link></div> */}
        <div className="topNavigation__items"> <Link to="/" className="Nav-link">Home</Link></div>
        </Nav>
    </div>
    );
};

export default Navigation;