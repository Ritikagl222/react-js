import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';

let rows;
export default function DenseTable(props) {
    function createData(id,name,salary,edit) {
        return { id,name,salary,edit };
      }
      
      if(props.employees.length==0){
          rows=[];
      }
      else{
        rows=props.employees.map((e,i)=>{
           return( createData(e.id,e.name,e.salary, 
           <Stack  spacing={3} direction="row" >
           <Button
               variant="contained"
               onClick={()=>props.onEdit(e,i)}>EDIT
           </Button>
           <Button
               variant="outlined"
               onClick={()=>props.onDelete(e.id)}
               >DELETE
           </Button>
       </Stack>))
        })}
      
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell><strong>ID</strong></TableCell>
            <TableCell ><strong>NAME</strong></TableCell>
            <TableCell ><strong>SALARY</strong></TableCell>
            <TableCell ></TableCell>
          
          </TableRow>
        </TableHead>

{rows.length==0?"NO DATA":<TableBody>
        {rows.map((row) => (
        <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">{row.id}</TableCell>
            <TableCell >{row.name}</TableCell>
            <TableCell >{row.salary}</TableCell>
            <TableCell >{row.edit}</TableCell>
    
        </TableRow>
        ))}
    </TableBody>}
      </Table>
    </TableContainer>
  );
}
