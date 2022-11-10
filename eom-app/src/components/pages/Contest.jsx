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
            <div>
                <span className={styles.title}>Content List</span>
                <button className={styles.btn} onClick={NewContest}>Add Contest <span className={styles.plus}>+</span></button>
            </div>
            <div>
                <Table className={styles.table} data={data} sampleDataFields={sampleDataFields}/>
            </div>
        </div>
    );
}

export default Contest