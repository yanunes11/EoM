import logo from '../images/images.jpeg';
import login from '../images/login.png';
import styles from './Header.module.css';

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

                {/* ROUTES */}
                <ul className={styles.box2}>
                    <li className={styles.route}>EmployeeOfTheMonth</li>
                    <li className={styles.route}>Contents</li>
                    <li className={styles.route}>Votes</li>
                    <li className={styles.route}>CEMWinners</li>
                </ul>

                {/* LOG IN */}
                <div className={styles.box3}>
                    <ul className={styles.loginBox}>
                        <li className={styles.login}>
                            <a
                                href="https://capmation.com"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={login} className={styles.loginImg} alt="logo" />
                            </a>
                        </li>
                        <li className={styles.loginName}>LOG IN</li>
                    </ul>
                </div>
            {/* <div className={styles.container}>

            </div> */}
      </div>
    )
}

export default Header