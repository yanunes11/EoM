import { NavLink } from 'react-router-dom';
import styles from '../css/NavBar.module.css';
import React from 'react';
import logo from '../../images/logo.jpeg';


// import CEMWinners from './CEMWinners';
// import Contest from './Contest';
// import EmployeeOfTheMonth from './EmployeeOfTheMonth';
// import Votes from './Votes';
function NavBar() {
    return (
        <nav className={styles.navbar}>
            <NavLink to="/">
                <a
                    href="https://capmation.com"
                    target="_blank"
                    rel="noopener noreferrer">
                        <img src={logo} className={styles.appLogo} alt="logo" />
                </a>
            </NavLink>
            <ul className={styles.list}>
                <li><NavLink className={styles.item} to="/employeeofthemonth">EmployeeOfTheMonth</NavLink></li>
                <li><NavLink className={styles.item} to="/contest">Contest</NavLink></li>
                <li><NavLink className={styles.item} to="/votes">Votes</NavLink></li>
                <li><NavLink className={styles.item} to="/cemwinners">CEMWinners</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar