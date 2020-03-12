import React, { Component } from 'react'
import PropTypes from 'prop-types'
import App from './components/App.js'
import styles from './styles.css'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div className={styles.test}>
        <App />
      </div>
    )
  }
}
