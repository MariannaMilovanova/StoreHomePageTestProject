import React from 'react';
import SubHeaderMenu from './subHeaderMenu';
import SubHeaderOptions from './subHeaderOptions'
import './subHeader.scss'


const SubHeader = (props) => (
    <div className='sub-header-wrapper'>
        <div className='sub-header-container'>
            <SubHeaderMenu />
            <SubHeaderOptions />
        </div>
    </div>
);

export default SubHeader;
