import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import { useEffect, useState, useRef } from 'react';
import Row from './Row.js'
export default function CollapsibleTable(props) {

  console.log("DATA COMP RERENDER")
  const [edit, setEdit] = useState(null);
  const [editId, setEditId] = useState('');
  const [editName, setEditName] = useState('');
  const [editSalary, setEditSalary] = useState('');
  const [editAddress, setEditAddress] = useState({ address: "", city: "", zip: "", state: "", phone: "", email: "" });

  let avgSalary;
const onDone=(e)=>{
  props.onDone(e,{id:editId,name:editName,salary:editSalary,address:editAddress})
}


  return (
    <TableContainer component={Paper}>
      <ListItem sx={{ fontSize: 20, borderBottom: "2px solid black" }}><strong>Average Salary</strong> : {avgSalary}</ListItem>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell sx={{ fontSize: 25 }}>ID</TableCell>
            <TableCell sx={{ fontSize: 25 }}>NAME</TableCell>
            <TableCell sx={{ fontSize: 25 }}>Salary</TableCell>
            <TableCell sx={{ fontSize: 25 }}></TableCell>
            {/* <TableCell >Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.employees.length == 0 ? <h1>NOTHING TO DISPLAY</h1> : props.employees.map((row) => (
            <Row key={row.id} row={row} edit={edit} setEdit={setEdit} onDelete={props.onDelete} onDoneApp={props.onDone}onDone={onDone} onEdit={props.onEdit} editId={editId} setEditId={setEditId} editName={editName} setEditName={setEditName} editSalary={editSalary} setEditSalary={setEditSalary} editAddress={editAddress} setEditAddress={setEditAddress} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
