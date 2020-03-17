import React, { Component } from "react"
import PropTypes from "prop-types"
import styles from './styles.css'

export class Modal extends Component {
    static propTypes = {
        handleClose: PropTypes.func,
        show: PropTypes.bool
    };

    /* modal styles */
    


        
    render() {
        
        
        const { handleClose, show, children } = this.props;

        const modalBase = {
            position: fixed,
            top: 0,
            left: 0,
            width: `100%`,
            height: `100%`,
            background: rgba(0, 0, 0, 0.6),
        }
        const modalMain = {
            position:fixed,
            background: white,
            width: `80%`,
            height: auto,
            top: `50%`,
            left: `50%`,
            transform: translate(`-50%`,`-50%`),
        }
        const display_block = {
            display: block,
        }
      
        const display_none = {
            display: none,
        }
        const showHideClassName = show ? displayBlock : displayNone;
        return (
            <div className={`${modalBase} ${showHideClassName}`}>
                <section className={modalMain}>
                    { children }
                    <button onClick={handleClose}>close</button>
                </section>
            </div>
        );
    }
};