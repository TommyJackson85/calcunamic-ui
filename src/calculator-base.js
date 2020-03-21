import React, { Component } from "react"
import PropTypes from "prop-types"
import BudgetMarker from "./budget-marker.js"

export class CalculatorBase extends Component {
    static propTypes = {
        name: PropTypes.string,
        item_cost: PropTypes.number,
        item_amount: PropTypes.number,
    };
    
    render() {
        const { name, item_cost, item_amount } = this.props;
        return (
            <div>
                <BudgetMarker total_cost={item_cost * item_amount} />
                <p>{ name }</p>
                <p>Item cost: { item_cost }</p>
                <p>Amount: { item_amount }</p>
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