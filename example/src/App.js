import React, { Component } from 'react'
import { CalculatorBase, Modal } from 'calcunamic-ui'

//true

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
      showModal: false,
      item_cost: 33,
      total_cost: 33,
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  hideCalculator = () => {
    this.setState({ showModal: false });
  };
  showCalculator = () => {
    this.setState({ showModal: true });
  };

  handleSelectChange(e) {
    this.setState({
      selected: e.target.value,
      total_cost: this.state.item_cost * e.target.value,
    });
  }
  
  render () {
    return ( 
      <div>
        <form onSubmit={this.handleSubmit}>
         <br />
          <legend>Book: Harry Potter Vol 1</legend>
          <p>Cost: { this.state.item_cost }</p>
          <p>
            <label>Select amount of copies</label>
            <select value={this.state.selected} onChange={this.handleSelectChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            { this.state.selected }
          </p>
          <p>Total cost: {this.state.total_cost}</p>
          <p>Unsure if this is correct amount?</p>
          <button type="button" onClick={this.showCalculator}>Asses within Budget</button>
        </form>
        <Modal 
          handleClose={this.hideCalculator} 
          show={this.state.showModal}>
          <section>
            <CalculatorBase 
              name="Access your budget below"
              item_cost={this.state.item_cost}
              item_amount={this.state.selected} />
          </section>
        </Modal>
      </div>
    )
  }
}
