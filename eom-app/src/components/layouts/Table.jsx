import React from 'react';

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

function Table({data}) {
    const keys = Object.keys(data[0]);
    return(
        <table>
            <thead>
                {
                    keys.map(key => <th key={key}>{key}</th>)
                }
            </thead>
            <tbody>
                {data.map(record => <Row record={record}/>)}
            </tbody>
        </table>
    );
}

export default Table