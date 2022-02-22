// import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import React from 'react'


export default function ItemComp(props) {
    let employee=props.employees;
  return (
    <tr>
    <td>{employee.id}</td>
    <td>{employee.name}</td>
    <td>{employee.salary}</td>
    <td >
    <Stack  ml={2} spacing={3} direction="row">   
    <Button
        variant="contained" 
         onClick={props.onEdit}>EDIT
    </Button>
    <Button
         variant="outlined" 
          onClick={()=>{props.onDelete(employee.id)}}>DELETE
    </Button>
    </Stack>
    
    </td>
    </tr>
  )
}



