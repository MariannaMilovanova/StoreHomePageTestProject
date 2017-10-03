import React, { Component } from 'react';
import { navigationMenu } from '../../../configuration/homePageMenu'

export default class FooterMenu extends Component {
    handleClick=(event, item)=> {
        this.props.navigationMenuChange(item)
    }
    render() {
        return (
            <ul className='footer-menu-list'>
                {navigationMenu.map((item, i) => {
                    return (
                    <li key={i} className='footer-menu-item'
                        onClick={(event)=>this.handleClick(event, item)}><div>{item}</div></li>
                )})}
            </ul>
        )
    }
}