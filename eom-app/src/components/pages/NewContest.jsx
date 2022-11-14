import React from "react";
import styles from '../css/NewContest.module.css';

function NewContest() {
    return(
        <>
            <p className={styles.title}>New Contest</p>
            <div className={styles.container}>
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
                <input type="date"></input>

                {/* BUTTONS */}
                <div>
                    <button className={styles.cancel}>Back</button>
                    <button className={styles.save}>Save</button>
                    <button className={styles.delete}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default NewContest