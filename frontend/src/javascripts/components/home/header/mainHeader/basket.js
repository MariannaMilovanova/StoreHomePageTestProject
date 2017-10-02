import React, { Component } from 'react';

export default class Basket extends Component {
    constructor(props) {
        super(props);
        this.state ={
            counter:''
        }
    }
    handleLanguageChange = (event, data) => {
        this.setState({valueLang: data.value})
    }
    render() {
        return (
            <div className='basket-wrapper'>
                <div className='basket-label'>
                    YOUR BAG
                </div>
               <div className='basket-counter'>
                    2
                </div>
            </div>
        )
    }
}