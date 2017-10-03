import React from 'react';
import { Header, Icon } from 'semantic-ui-react'
import './delivery.scss'

const Delivery  = (props) => (
    <div className='delivery-wrapper'>
        <Header as='h2' icon>
            <Icon name='settings' />
                Under development
            <Header.Subheader className='delivery-subheader'>
              Here will be information about delivery
            </Header.Subheader>
        </Header>
    </div>
);


export default Delivery