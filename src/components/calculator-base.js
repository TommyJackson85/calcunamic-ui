import React, { Component } from "react"
import PropTypes from "prop-types"

export default class CalculatorBase extends Component {
    static propTypes = {
        name: PropTypes.string,
        width: PropTypes.string
    };
    render() {

        const { name, width } = this.props;
        return (
            <div style={{width: width}} >
                <h1>{ name }</h1>
            </div>
        );
    }
};