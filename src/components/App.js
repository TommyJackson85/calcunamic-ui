import React, { Component } from 'react'
import CalculatorBase from './calculator-base.js'

export default class App extends Component {
    render() {
        return (
            <div>
                <CalculatorBase name="New Calculator" width="width: 30px;" />
                <div>ends</div>
            </div>
        )
    }
}