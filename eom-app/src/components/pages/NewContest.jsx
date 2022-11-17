import React from "react";
import styles from '../css/NewContest.module.css';
import Select from 'react-select';

function NewContest() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];
    return(
        <>
            <p className={styles.title}>New Contest</p>
            <form className={styles.container}>
                {/* FIELDS */}
                <p>Voting Starting Date: </p>
                <input type="date"></input>
                <p>Voting Ending Date: </p>
                <input type="date"></input>
                <p>Name: </p>
                <input type="text"></input>
                <p>Description: </p>
                <input type="text"></input>
                <p>State: </p>
                <Select options={options} />

                {/* BUTTONS */}
                <div>
                    <button className={styles.cancel}>Back</button>
                    <button className={styles.save}>Save</button>
                    <button className={styles.delete}>Delete</button>
                </div>
            </form>
        </>
    )
}

export default NewContest