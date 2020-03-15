import React, { Component } from "react"
import PropTypes from "prop-types"
import styles from './styles.css'

export default class CalculatorBase extends Component {
    static propTypes = {
        name: PropTypes.string,
    };
    
    render() {
        const { name } = this.props;
        return (
            <div>
                <p>{ name }</p>
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
            </div>
        );
    }
};