import styles from './NavBar.module.css';

function NavBar() {
    return (
        <ul className={styles.navbar}>
            <li className={styles.route}>EmployeeOfTheMonth</li>
            <li className={styles.route}>Contents</li>
            <li className={styles.route}>Votes</li>
            <li className={styles.route}>CEMWinners</li>
        </ul>
    );
}

export default NavBar