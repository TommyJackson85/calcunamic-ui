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
            <div className={styles.box}>
                <h1>{ name }</h1>
            </div>
        );
    }
};