import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import CEMWinners from './CEMWinners';
import Contents from './Contents';
import EmployeeOfTheMonth from './EmployeeOfTheMonth';
import styles from './css/NavBar.module.css';
import Votes from './Votes';
import React from 'react';

function NavBar() {
    return (
        <>
            <Router>
                <ul className={styles.navbar}>
                    <nav className={styles.navbar}>
                        <NavLink to="/employeeofthemonth" >
                            <li className={styles.route}>EmployeeOfTheMonth</li>
                        </NavLink>
                        <NavLink to="/contents">
                            <li className={styles.route}>Contents</li>
                        </NavLink>
                        <NavLink to="/votes">
                            <li className={styles.route}>Votes</li>
                        </NavLink>
                        <NavLink to="/cemwinners">
                            <li className={styles.route}>CEMWinners</li>
                        </NavLink>
                    </nav>
                </ul>
                <Routes>
                    <Route to="/employeeofthemonth" element={<EmployeeOfTheMonth/>}/>
                    <Route to="/contents" element={<Contents/>}/>
                    <Route to="/votes" element={<Votes/>}/>
                    <Route to="/cemwinners" element={<CEMWinners/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default NavBar