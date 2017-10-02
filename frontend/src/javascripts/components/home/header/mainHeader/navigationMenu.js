import React, { Component } from 'react';
import { navigationMenu } from '../../../../configuration/homePageMenu'

export default class NavigationMenu extends Component {
    constructor(props) {
        super(props);
        this.state ={
            chosenTag: navigationMenu[1]
        }
    }
    handleClick=(event)=>{
        this.setState({chosenTag: event.target.innerText.toLowerCase()})
    }
    render() {
        return (
            <ul className='main-header-menu-list'>
                {navigationMenu.map((item, i) => {
                    return (
                    <li key={i} className={this.state.chosenTag === item?
                            `main-header-menu-item chosen`: item == 'sale'? `main-header-menu-item sale`: `main-header-menu-item` } 
                                                    ><div onClick={this.handleClick}>{item}</div></li>
                )})}
            </ul>
        )
    }
}