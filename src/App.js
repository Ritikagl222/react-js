import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormComp from "./FormComp"
import DataComp from "./DataComp"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
export default function ButtonAppBar() {


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
  const [alert, setAlert] = useState(false);
  //ON submit Function
  let myEmployee;
  function onSubmit(id, name, salary) {
    myEmployee = { id: id, name: name, salary: salary };
    console.log(employees);
    setEmployees([...employees, myEmployee])
  }

  // useEffect for set employees
  useEffect(() => {
    localStorage.setItem("emp", JSON.stringify(employees));
  }, [employees])

  //ondelete Funciton
  function onDelete(id) {
    console.log("DELETE", id)
    setEmployees(employees.filter((e) => { return e.id != id }))
  }

  //onEdit Function
  function onEdit() {

  }

  // alert functions
  function alertStatus(val) {
    setAlert(val)
    setTimeout(()=>{setAlert(false)},1500)
  }
  // clear all
  function clearAll(){
       setEmployees([])
  }
  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EMPLOYEE MANAGEMENT
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} >
          <Item>   {alert==2 ? <Stack sx={{ width: '100%' }} spacing={5}>
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
        
            </Alert>
          </Stack>:alert==3?<Stack sx={{ width: '100%' }} spacing={5}>
            <Alert severity="info">
              <AlertTitle>Cleared All Data</AlertTitle>
        
            </Alert>
          </Stack>:alert==4?<Stack sx={{ width: '100%' }} spacing={5}>
            <Alert severity="error">
              <AlertTitle>This ID is already being used !</AlertTitle>
        
            </Alert>
          </Stack>:""}
            <FormComp onSubmit={onSubmit} alert={alertStatus} employees={employees} clearAll={clearAll} /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><DataComp employees={employees} onEdit={onEdit} onDelete={onDelete}></DataComp></Item>
        </Grid>

      </Grid>
    </Box>

  );
}