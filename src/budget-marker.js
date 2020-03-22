import React, { Component } from "react"
import PropTypes from "prop-types"

import styles from "./budget-marker.css"

export class BudgetMarker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            budget: 100,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({ budget: e.target.value})
    }
    static propTypes = {
        total_cost: PropTypes.number
    };
    render() {
        const { total_cost } = this.props;
        const expenditures_left = this.state.budget - total_cost;
        return (
            <div>
                <form>
                    <label>
                        Your Budget: $
                        <input type="text" placeholder="Your maximum budget in euros" value={this.state.budget} onChange={this.handleChange} />   
                        <p>Your left over expenditures: <em className={( expenditures_left <= 0 ? styles.warning_text : styles.positive_text )}>$ {expenditures_left}</em></p>
                    </label>
                </form>
            </div>
        );
    }
};