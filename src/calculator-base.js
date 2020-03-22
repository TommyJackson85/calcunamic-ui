import React, { Component } from "react"
import PropTypes from "prop-types"
import { BudgetMarker } from "./budget-marker.js"
import styles from "./calculator-base.css"

export class CalculatorBase extends Component {
    static propTypes = {
        name: PropTypes.string,
        item_cost: PropTypes.number,
        item_amount: PropTypes.number,
    };
    render() {
        const { name, item_cost, item_amount } = this.props;
        const calcutions_array = [item_cost, '*', item_amount]
        return (
            <div>
                <p>{ name }</p>
                <p>Current Total Cost: $ {item_cost * item_amount}</p>
                <BudgetMarker total_cost={item_cost * item_amount} />
                <div className={styles.calculator_box}>
                <p>Make Side Calculations</p>
                    <div className={ styles.screen }>
                            <p>{ calcutions_array.join(" ") }</p>
                            <p>Answer</p>
                    </div>
                    <button>Item Cost: $ { item_cost }</button>
                    <button>Item Amount: { item_amount }</button>
                    <button>Reset</button>
                    <hr />
                    <button>Clear</button>
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
            </div>
        );
    }
};