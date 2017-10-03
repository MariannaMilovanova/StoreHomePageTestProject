import React from 'react';
import SubHeaderMenu from './subHeaderMenu';
import SubHeaderOptions from './subHeaderOptions'
import './subHeader.scss'


const SubHeader = (props) => (
    <div className='sub-header-wrapper'>
        <div className='sub-header-container'>
            <SubHeaderMenu />
            <SubHeaderOptions changeCurrency={props.changeCurrency} changeLanguage={props.changeLanguage}/>
        </div>
    </div>
);

export default SubHeader;
