import styles from '../css/Contest.module.css';
import React from 'react';
import Table from '../layouts/Table';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Contest(props) {
    const {data, sampleDataFields} = props;
    const [showNewContest, setShowNewContest] = useState(true);

    function NewContestBtn() {
        setShowNewContest(false);
    }
    return (
        <div>
            {showNewContest && 
                <>
                    <div>
                        <span className={styles.title}>Contest List</span>
                        <div className={styles.search_add}>
                            <input type="search" className={styles.search}></input>
                            <NavLink to="/newcontest">
                                <button className={styles.btn} onClick={NewContestBtn}>Add Contest <span className={styles.plus}>+</span></button>
                            </NavLink>
                        </div>
                    </div>
                    <div>
                        <Table className={styles.table} data={data} sampleDataFields={sampleDataFields}/>
                    </div>
                </>
            }
            {!showNewContest && 
                <>
                    <NavLink to="/newcontest"></NavLink>
                </>
            }
        </div>
    );
}

export default Contest