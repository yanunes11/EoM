import styles from './css/Contest.module.css';
import React from 'react';

function Contest(props) {
    const {data} = props;
    return (
        <div className={styles.contest}>
            {JSON.stringify(data)}
        </div>
    );
}

export default Contest