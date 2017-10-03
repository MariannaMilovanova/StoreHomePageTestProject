import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { languages } from '../../../../configuration/languages'
import { currency } from '../../../../configuration/currency'
import tick from '../../../../../images/sub_header_tick.png'

export default class SubHeaderOptions extends Component {
    constructor(props) {
        super(props);
        this.state ={
            valueLang: 'en',
            valueCurr: 'usd'
        }
    }
    handleLanguageChange = (event, data) => {
        this.setState({valueLang: data.value});
        this.props.changeLanguage(data.value);
    }
    handleCurrencyChange = (event, data) => {
        this.setState({valueCurr: data.value});
        this.props.changeCurrency(data.value);
    }
    render() {
        return (
            <div className='sub-header-options-wrapper'>
                <div className='sub-header-options-currency'>
                    <Dropdown 
                        value={this.state.valueCurr}
                        onChange={this.handleCurrencyChange}
                        options={currency}/>
                    <img className='sub-header-tick' src={tick} />
                </div>
               <div className='sub-header-options-languages'>
                    <Dropdown 
                        value={this.state.valueLang}
                        onChange={this.handleLanguageChange}
                        options={languages}/>
                    <img className='sub-header-tick' src={tick} />
                </div>
            </div>
        )
    }
}