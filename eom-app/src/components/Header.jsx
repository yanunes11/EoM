import logo from '../images/logo.jpeg';
import login from '../images/login.png';
import styles from './css/Header.module.css';
import NavBar from './NavBar';
import React from 'react';

function Header() {
    return (
        <div className={styles.header}>
            {/* LOGO */}
            <div  className={styles.box1}>
                <div className={styles.appLogo}>
                    <a
                        href="https://capmation.com"
                        target="_blank"
                        rel="noopener noreferrer">
                            <img src={logo} className={styles.appLogo} alt="logo" />
                    </a>
                </div>
            </div>

            {/* NavBar */}
            <NavBar/>

            {/* LOG IN */}
            <div className={styles.box3}>
                <ul className={styles.loginBox}>
                    <li className={styles.login}>
                        <a
                            href="https://capmation.com"
                            target="_blank"
                            rel="noopener noreferrer">
                                <img src={login} className={styles.loginImg} alt="login" />
                        </a>
                    </li>
                    <li className={styles.loginName}>LOG IN</li>
                </ul>
            </div>
        </div>
    )
}

export default Header