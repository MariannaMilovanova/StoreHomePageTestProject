import React from 'react';
import { Header, Icon } from 'semantic-ui-react'
import './help.scss'


const Help  = (props) => (
    <div className='help-wrapper'>
        <Header as='h2' icon>
            <Icon name='settings' />
                Under development
            <Header.Subheader className='help-subheader'>
              Here will help section
            </Header.Subheader>
        </Header>
    </div>
);


export default Help