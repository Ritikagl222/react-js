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
     props.employees.map((item) => {
       return(<ItemComp item={item} onEdit={props.onEdit} key={item.id}onDelete={props.onDelete}  edit={props.edit} setEdit={props.setEdit} onDelete={props.onDelete} onDone={props.onDone} onEdit={props.onEdit} editId={props.editId} setEditId={props.setEditId}  editName={props.editName} setEditName={props.setEditName}  editSalary={props.editSalary} setEditSalary={props.setEditSalary}></ItemComp>)
     })};
     </tbody>
 </table>
 
  );
}
