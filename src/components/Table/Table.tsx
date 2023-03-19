import React from 'react';

interface TableProps {
    title: string
    tcell1: string
    tcell2: string
}

export const Table = (props:TableProps) => {
  return (
    <table>
        <tr>
            <th>{props.title}</th>
            <th>head2</th>
        </tr>
        <tr>
            <td>{props.tcell1}</td>
            <td>body2</td>
        </tr>
        <tr>
            <td>{props.tcell2}</td>
            <td>body2</td>
        </tr>
    </table>
    )
}