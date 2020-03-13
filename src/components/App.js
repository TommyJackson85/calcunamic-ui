import React, { Component } from 'react'
import CalculatorBase from './calculator-base.js'
import styles from './styles.css'

export default class App extends Component {
    render() {
        const { text } = this.props
        return (
            <CalculatorBase name={text} style="width: 30px;">
                {this.props.children}
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>/</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>*</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
            <button>.</button>
            <button>0</button>
            <button>=</button>
            <button>-</button>
            </CalculatorBase>
        )
    }
}