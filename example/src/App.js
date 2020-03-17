import React, { Component } from 'react'
import { CalculatorBase, Modal } from 'calcunamic-ui'

//true
export default class App extends Component {
  state = {
    showModal: false,
  };

  hideCalculator = () => {
    this.setState({ showModal: false });
  };
  showCalculator = () => {
    this.setState({ showModal: true });
  };

  render () {
    return ( 
      <div>
        <button type="button" onClick={this.showCalculator}>Show Calculator</button>
        <Modal 
          handleClose={this.hideCalculator} 
          show={this.state.showModal}>
          <CalculatorBase />
        </Modal>
      </div>
    )
  }
}
