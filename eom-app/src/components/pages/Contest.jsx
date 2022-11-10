import styles from '../css/Contest.module.css';
import React from 'react';
import Table from '../layouts/Table';

function Contest(props) {
    const {data, sampleDataFields} = props;

    function NewContest() {
        alert(`You clicked me!`);
    }
    return (
        <div>
            <span className={styles.title}>Content List</span>
            <button className={styles.btn} onClick={NewContest}>Add Contest +</button>
            <Table className={styles.table} data={data} sampleDataFields={sampleDataFields}/>
        </div>
    );
}

export default Contest