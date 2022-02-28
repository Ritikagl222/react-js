import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import Row from "./Row.js"
import { useState} from 'react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export default function CollapsibleTable(props) {

 
 console.log("DATA COMP RERENDER")
  const [edit, setEdit] = useState(null);
  const [editId, setEditId] = useState('');
  const [editName, setEditName] = useState('');
  const [editSalary, setEditSalary] = useState('');
  const [editAddress, setEditAddress] = useState({ address: "", city: "", zip: "", state: "", phone: "", email: "" });
  const[error,setError]=useState({id:false,name:false,salary:false,address:false,phone:false,email:false,zip:false,state:false,city:false})
  const[idCheck,setIdCheck]=useState([]);

//ONdONE////
const onDone=(e)=>{
 console.log((idCheck.some((elem)=>elem.id==e)),e)
  if (!editId || !editName || !editSalary || editAddress.address == "" || editAddress.city == "" || editAddress.state == "" || editAddress.phone == "" || editAddress.zip == "" || editAddress.email == "") {
  console.log("ELSE main")
      if (!editId) { setError({...error,id:"INVALID"}) }
      if (!editName) {setError({...error,name:"INVALID"}) }
      if (!editSalary) { setError({...error,salary:"INVALID"}) }
      if (!editAddress.city) { setError({...error,city:"INVALID"}) }
      if (!editAddress.state) { setError({...error,state:"INVALID"}) }
      if (!editAddress.phone) { setError({...error,phone:"INVALID"}) }
      if (!editAddress.address) { setError({...error,address:"INVALID"}) }
      if (!editAddress.email) {setError({...error,email:"INVALID"})  }
      if (!editAddress.zip) {setError({...error,zip:"INVALID"})  }
  }
  else {
//  DUPLICATE ID VALIDATION
 if (idCheck.some((elem)=>elem.id==parseInt(editId))==true) {
  setError({...error,id:"DUPLICATE"})


 }
// ID VALIDATION
 else if (!(parseInt(editId) >= 0)) {
  console.log("IDD KI DIKKT")

  setError({...error,id:"INVALID"})
}
// SALARY VALIDATION
else if (!(parseInt(editSalary) >= 0)) {
  console.log("ESALARYY HCC")

  setError({...error,salary:"INVALID"})
}
// PHONE NUMBER VALIDATION
else if (!(parseInt(editAddress.phone) >= 0)) {
  console.log("PHONE")
  setError({...error,phone:"INVALID"})
}
else if ((editAddress.phone.length < 10)) {
  setError({...error,phone:"INVALID LENGTH"})
}
// EMAIL VALIDATION
else if (!(editAddress.email.includes("@"))) {
  console.log("EMAIL")
  setError({...error,email:"INVALID"})
}
// ZIP VALIDATIN
else if (!(parseInt(editAddress.zip) >= 0)) {
  console.log("ELSE HCC ZIP")
  setError({...error,zip:"INVALID"}) ;
}
// POPULATE
else {
 
console.log("ELSE HCC")
props.onDone(e,{id:editId,name:editName,salary:editSalary,address:editAddress})
setError({id:false,name:false,salary:false,address:false,phone:false,email:false,zip:false,state:false,city:false})}}}

// DUPLICATE ID CHECK
function idCheckClick(e){
setIdCheck(props.employees.filter((elem)=>elem.id!=e))
}
// AVERAGE SALARY
let avgSalary=props.employees.reduce((total,prev)=>{
  return total+ parseInt(prev.salary)
},0)
avgSalary=(avgSalary/props.employees.length).toFixed(2)

  return (
    <TableContainer component={Paper}>
      <ListItem sx={{ fontSize: 20, borderBottom: "2px solid black" }}><strong>Average Salary</strong> :<CurrencyRupeeIcon></CurrencyRupeeIcon>{avgSalary}</ListItem>
      <ListItem sx={{ fontSize: 20, borderBottom: "2px solid black" }}><strong>Total Employees</strong> : {props.employees.length}</ListItem>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell sx={{ fontSize: 25 }}>ID</TableCell>
            <TableCell sx={{ fontSize: 25 }}>NAME</TableCell>
            <TableCell sx={{ fontSize: 25 }}>Salary (<CurrencyRupeeIcon sx={{fontSize:"medium"}}></CurrencyRupeeIcon>)</TableCell>
            <TableCell sx={{ fontSize: 25 }}></TableCell>
            {/* <TableCell >Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.employees.length == 0 ? <h3>NOTHING TO DISPLAY</h3> : props.employees.map((row) => (
            <Row key={row.id} row={row} error={error} setError={setError} edit={edit} idCheckClick={idCheckClick}setEdit={setEdit} onDelete={props.onDelete} onDoneApp={props.onDone}onDone={onDone} onEdit={props.onEdit} editId={editId} setEditId={setEditId} editName={editName} setEditName={setEditName} editSalary={editSalary} setEditSalary={setEditSalary} editAddress={editAddress} setEditAddress={setEditAddress} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
