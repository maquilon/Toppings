import React from 'react';

const Footer = () => {
    let currentDate = new Date().getFullYear();

    return (
        <div className="navbar-inverse navbar-fixed-bottom">
            <div className="container">

                <p style={{ color: '#ffffff', font: 'Open Sans, Helvetica Neue', fontSize: '12px', padding: '10px 10px 10px 0px' }}> { currentDate } - All rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;