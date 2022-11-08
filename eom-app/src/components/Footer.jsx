import styles from './css/Footer.module.css';
import logo from '../images/logo.jpeg';
import React from 'react';

function Footer() {
    return (
        <div className={styles.footer}>
            <a
                href="https://capmation.com"
                target="_blank"
                rel="noopener noreferrer">
                    <img src={logo} className={styles.appLogo} alt="logo" />
            </a>
        </div>
    );
}

export default Footer