import React from 'react';
import styles from '../css/Table.module.css';

const Row = ({record}) => {
    const keys = Object.keys(record);
    return (
        <tr key={record._id}>
            {
                keys.map(key => <td key={key}>{record[key]}</td>)
            }
            <td></td>
        </tr>
    );
}

const TableHead = ({keys, head}) => {
    const tbHead = head || {};
    return(
        <thead>
            {
                keys.map(key => <th key={key}>{tbHead[key] || key}</th>)
            }
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