import styles from './css/Contest.module.css';
import React from 'react';
import Table from './layouts/Table';

function Contest(props) {
    const {data} = props;
    return (
        <Table className={styles.container} data={data}/>
    );
}

export default Contest