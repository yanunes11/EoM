import styles from '../css/Contest.module.css';
import React from 'react';
import Table from '../layouts/Table';
import { useState } from 'react';
import NewContest from './NewContest';

function Contest(props) {
    const {data, sampleDataFields} = props;
    const [showNewContest, setShowNewContest] = useState(true);

    function NewContestBtn() {
        console.log(`YNASC - New Contest clicked`);
        setShowNewContest(false);
    }
    return (
        <div>
            {showNewContest && 
                <>
                    <div>
                        <span className={styles.title}>Content List</span>
                        <button className={styles.btn} onClick={NewContestBtn}>Add Contest <span className={styles.plus}>+</span></button>
                    </div>
                    <div>
                        <Table className={styles.table} data={data} sampleDataFields={sampleDataFields}/>
                    </div>
                </>
            }
            {!showNewContest && 
                <>
                    <NewContest/>
                </>
            }
        </div>
    );
}

export default Contest