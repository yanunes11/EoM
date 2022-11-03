import logo from '../images/images.jpeg';
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
                <div  className={styles.box2}>
                    <div className={styles.route}>EmployeeOfTheMonth</div>
                    <div className={styles.route}>Contents</div>
                    <div className={styles.route}>Votes</div>
                    <div className={styles.route}>CEMWinners</div>
                </div>

                {/* LOG IN */}
                <div  className={styles.box3}>
                    LOG IN
                </div>
            {/* <div className={styles.container}>

            </div> */}
      </div>
    )
}

export default Header