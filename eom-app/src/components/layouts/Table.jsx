import React from 'react';
import styles from '../css/Table.module.css';

const Row = ({record}) => {
    const keys = Object.keys(record);
    return (
        <tr key={record._id}>
            {
                keys.map(key => {
                    if (key === "votingStartDate" || key === "votingEndDate") {
                        const date = new Date(record[key]);
                        return (
                            <td key={key}>{date.getUTCFullYear()+"/"+date.getUTCMonth()+"/"+date.getUTCDay()}</td>
                        )
                    } else {
                        return (
                            <td key={key}>{record[key]}</td>
                        )
                    }
                })
            }
            <td></td>
        </tr>
    );
}

const TableHead = ({keys, head}) => {
    const tbHead = head || {};
    return(
        <thead>
            <tr>
                {
                    keys.map(key => <th key={key}>{tbHead[key] || key}</th>)
                }
            </tr>
        </thead>
    );
}

function Table({data, sampleDataFields}) {
    const keys = Object.keys(data[0]);
    return(
        <table className={styles.table}>
            <TableHead keys={keys} head={sampleDataFields}/>
            <tbody>
                {data.map(record => <Row record={record}/>)}
            </tbody>
        </table>
    );
}

export default Table