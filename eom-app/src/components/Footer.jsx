import styles from './Footer.module.css';
import logo from '../images/images.jpeg';

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