import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import ItemComp from './ItemComp';

export default function BasicTable(props) {
  



  return (
    <table style={{ minWidth: 650 }} rules="rows">
    <thead>
     <tr> 
       <th> ID</th>
       <th> NAME</th>
       <th> SALARY</th>
       <th>   </th>
     </tr>
     </thead>
     <tbody>
    {props.employees.length === 0 ? 'No Data to display' :
     props.employees.map((i) => {
       return(<ItemComp employees={i} onEdit={props.onEdit} key={i.id}onDelete={props.onDelete}></ItemComp>)
     })};
     </tbody>
 </table>
 
  );
}
