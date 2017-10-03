import React from 'react';
import { Header, Icon } from 'semantic-ui-react'
import './faq.scss'

const FAQ  = (props) => (
   <div className='faq-wrapper'>
        <Header as='h2' icon>
            <Icon name='settings' />
                Under development
            <Header.Subheader className='faq-subheader'>
              Here will be frequently asked questions section
            </Header.Subheader>
        </Header>
    </div>
);


export default FAQ