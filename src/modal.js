import React, { Component } from "react"
import PropTypes from "prop-types"
import styles from './modal.css'

export class Modal extends Component {
    static propTypes = {
        handleClose: PropTypes.func,
        show: PropTypes.bool
    };

    /* modal styles */
    render() {
        
        console.log("modal styles");
        console.log(styles);

        const { handleClose, show, children } = this.props;
        const showHideClassName = show ? styles.display_block : styles.display_none;
        return (
            <div className={`${styles.modal} ${showHideClassName}`}>
                <section className={styles.modal_main}>
                    { children }
                    <button onClick={handleClose}>close</button>
                </section>
            </div>
        );
    }
};