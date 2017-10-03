import React from 'react';
import FooterMenu from './footerMenu'
import logo from '../../../../images/logo.png'
import './footer.scss'

const Footer = (props) => (
    <div className='footer-wrapper'>
        <div className='footer-container'>
            <div className='logo'>
                <img src={logo}/>
            </div>
            <FooterMenu navigationMenuChange={props.navigationMenuChange}/>
            <div className='copyright'>&copy;2010 - 2016 All rights reserved</div>
        </div>
    </div>
);

export default Footer