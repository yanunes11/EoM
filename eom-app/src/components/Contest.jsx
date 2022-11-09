import styles from './css/Contest.module.css';
import React from 'react';
import Table from './layouts/Table';

function Contest(props) {
    const {data, sampleDataFields} = props;
    return (
        <Table className={styles.container} data={data} sampleDataFields={sampleDataFields}/>
    );
}

export default Contest