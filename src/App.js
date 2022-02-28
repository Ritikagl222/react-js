import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FormComp from "./FormComp"
import DataComp3 from "./DataComp3"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
export default function ButtonAppBar() {

console.log("App comp rerender")

// vaiable from material UI
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  // local storage
  let employeeArr;
  if (localStorage.getItem("emp") == null) {
    employeeArr = [];
  }
  else {
    employeeArr = JSON.parse(localStorage.getItem('emp'));
  }

  // state variables
  const [employees, setEmployees] = useState(employeeArr);
  const [edit, setEdit] = useState(null);


  //state variables for Form COmp
  const [id, setId] = useState();
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [address, setAddress] = useState({ address: "", city: "", zip: "", state: "", phone: "", email: "" });

  // state variables for Data comp
  const [editId, setEditId] = useState('');
  const [editName, setEditName] = useState('');
  const [editSalary, setEditSalary] = useState('');
  const [editAddress, setEditAddress] = useState({ address: "", city: "", zip: "", state: "", phone: "", email: "" });

  

  //ON submit Function
  let myEmployee;
  function onSubmit() {
    myEmployee = { id: id, name: name, salary: salary, address: address };
    setEmployees([...employees, myEmployee])
  }

  // useEffect for set employees
  useEffect(() => {
    localStorage.setItem("emp", JSON.stringify(employees));
  }, [employees])

  //ondelete Funciton
  function onDelete(id) {
 
 setEmployees(employees.filter((e) => { return e.id != id }))
  }

  //onEdit Function
  function onEdit(e) {
    console.log("EDIT CLICKED");
    console.log(edit, e);

  }
  //onDone funciton
  function onDone(id) {
    setEdit(null)
    const updatedEmployees = [...employees].map((e) => {
      if (e.id == id) {
        e = { id: editId, name: editName, salary: editSalary, address: editAddress };
      }

      return e;

    })

    setEmployees(updatedEmployees)
  }


  // clear all
  function clearAll() {
    setEmployees([])
  }
  return (
    <Box sx={{ width: '100%'}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EMPLOYEE MANAGEMENT
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container rowSpacing={1}  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3} >
          <Item>  
            <FormComp  onSubmit={onSubmit} employees={employees} clearAll={clearAll} id={id} setId={setId} name={name} setName={setName} salary={salary} setSalary={setSalary} address={address} setAddress={setAddress}   /></Item>
        </Grid>
        <Grid item xs={9}>
          <Item><DataComp3 edit={edit} employees={employees} onEdit={onEdit} setEdit={setEdit} onDelete={onDelete} onDone={onDone} editId={editId} setEditId={setEditId} setEditSalary={setEditSalary} editName={editName} setEditName={setEditName} editSalary={editSalary} setEditsalary={setEditSalary} editAddress={editAddress} setEditAddress={setEditAddress}       ></DataComp3></Item>
        </Grid>

      </Grid>

    </Box>

  );
}