import React from "react";
import Card from 'react-bootstrap/Card'; //YNASC
import styles from '../css/NewContest.module.css';

function NewContest() {
    return(
        <>
            <p className={styles.title}>New Contest</p>
            <Card className={styles.container}>
                {/* FIELDS */}
                Voting Starting Date: 
                <p><input type="date"></input></p>
                Voting Ending Date: 
                <p><input type="date"></input></p>
                Name: 
                <p><input type="text"></input></p>
                Description: 
                <p><input type="text"></input></p>
                State: 
                <p><input type="date"></input></p>

                {/* BUTTONS */}
                <button className={styles.btn}>Back</button>
                <button className={styles.btn}>Save</button>
                <button className={styles.btn}>Delete</button>
            </Card>
        </>
    )
}

export default NewContest