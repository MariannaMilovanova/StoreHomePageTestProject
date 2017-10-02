import React, { Component } from 'react';
import Select from 'react-select';
import { Input, Dropdown, Checkbox } from 'semantic-ui-react';
import { languages } from '../../../configuration/languages'
import { currency } from '../../../configuration/currency'

export default class SubHeaderOptions extends Component {
    constructor(props) {
        super(props);
        this.state ={
            valueLang: 'en',
            valueCurr: 'usd'
        }
    }
    handleLanguageChange = (event, data) => {
        this.setState({valueLang: data.value})
    }
    handleCurrencyChange = (event, data) => {
        this.setState({valueCurr: data.value})
    }
    render() {
        return (
            <div className='sub-header-options-wrapper'>
                <div className='sub-header-options-languages'>
                    <Dropdown 
                        value={this.state.valueCurr}
                        onChange={this.handleCurrencyChange}
                        options={currency}/>
                </div>
               <div className='sub-header-options-currency'>
                    <Dropdown 
                        value={this.state.valueLang}
                        onChange={this.handleLanguageChange}
                        options={languages}/>
                </div>
            </div>
        )
    }
}