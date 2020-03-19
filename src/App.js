import React, { Component } from 'react'
//import CalculatorBase from './calculator-base.js'
//export CalculatorBase, MastHead

export default class App extends Component {
    render() {
        return (
        <div>
            <form>
                <label>
                    Names:
                    <input type="number" name="number" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <CalculatorBase />
        </div>
        )
    }
}