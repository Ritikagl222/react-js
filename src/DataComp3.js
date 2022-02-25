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
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TextField from '@mui/material/TextField';

let rows;

export default function CollapsibleTable(props) {


  function createData(id, name, salary,edit,address) {
    return {
      id, name, salary,edit,address
  
    };
  }
  
  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.id}
          </TableCell>
  
          <TableCell >{row.name}</TableCell>
          <TableCell >{row.salary}</TableCell>
          <TableCell >{row.edit}</TableCell>
          {/* <TableCell >{row.protein}</TableCell> */}
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography>
              <List
      sx={{
        width: '100%',
       fontSize:"2px",
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocalPhoneIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Phone" secondary= {row.address.phone} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <AlternateEmailIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email" secondary={row.address.email} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocationOnIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Address" secondary={row.address.address} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocationOnIcon  />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="City" secondary={row.address.city} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocationOnIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="State" secondary={row.address.state} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocationOnIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Zip" secondary={row.address.zip} />
      </ListItem>
    </List>
                    
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  
  // Row.propTypes = {
  //   row: PropTypes.shape({
  //     calories: PropTypes.number.isRequired,
  //     carbs: PropTypes.number.isRequired,
  //     fat: PropTypes.number.isRequired,
  //     history: PropTypes.arrayOf(
  //       PropTypes.shape({
  //         amount: PropTypes.number.isRequired,
  //         customerId: PropTypes.string.isRequired,
  //         date: PropTypes.string.isRequired,
  //       }),
  //     ).isRequired,
  //     name: PropTypes.string.isRequired,
  //     price: PropTypes.number.isRequired,
  //     protein: PropTypes.number.isRequired,
  //   }).isRequired,
  // };

//edit adressss
let editObj={
  address:<TextField defaultValue={props.editAddress.address} onChange={(e)=>props.setEditAddress({...props.editAddress,address:(e.target.value)})}></TextField>,
  city:<TextField defaultValue={props.editAddress.city} onChange={(e)=>props.setEditAddress({...props.editAddress,city:(e.target.value)})}></TextField>,
  zip:<TextField defaultValue={props.editAddress.zip} onChange={(e)=>props.setEditAddress({...props.editAddress,zip:(e.target.value)})}></TextField>,
  state:<TextField defaultValue={props.editAddress.state} onChange={(e)=>props.setEditAddress({...props.editAddress,state:(e.target.value)})}></TextField>,
  phone:<TextField defaultValue={props.editAddress.phone} onChange={(e)=>props.setEditAddress({...props.editAddress,phone:(e.target.value)})}></TextField>,
  email:<TextField defaultValue={props.editAddress.email} onChange={(e)=>props.setEditAddress({...props.editAddress,email:(e.target.value)})}></TextField>,
}
let avgSalary;
if(props.employees.length==0){
    rows=[];
    avgSalary=0;
}
else{
  
  //average salary
 avgSalary =(props.employees.reduce((prev,initial)=>{
  return prev+parseInt(initial.salary)
},0))/props.employees.length

  rows=props.employees.map((e,i)=>{
     return( 
 createData(
       props.edit==e.id?<TextField  defaultValue={props.editId} onChange={(e)=>{props.setEditId(e.target.value);console.log("CLICKICKICK")}}></TextField>:<h4 onClick={()=>{props.setEdit(e.id);props.onEdit(e.id)}}>{e.id}</h4>,
       props.edit==e.id?<TextField defaultValue={props.editName} onChange={(e)=>props.setEditName(e.target.value)}></TextField>:<h4 onClick={()=>{props.setEdit(e.id);props.onEdit(e.id)}}>{e.name}</h4>,
       props.edit==e.id?<TextField defaultValue={props.editSalary} onChange={(e)=>props.setEditSalary(e.target.value)}></TextField>:<h4 onClick={()=>{props.setEdit(e.id);props.onEdit(e.id)}}>{e.salary}</h4>,
     <Stack  spacing={3} direction="row" >
     {props.edit==e.id ?   <Button
         variant="contained"
         onClick={()=>{props.onDone(e.id)}}>DONE
     </Button>:<Button
         variant="contained"
         onClick={()=>{props.setEdit(e.id);props.onEdit(e.id);console.log(props.edit)}}>EDIT
     </Button>}
  
    {props.edit==e.id?<Button
         variant="outlined"
         onClick={()=>props.setEdit(null)}
         >CANCEL
     </Button>:<Button
         variant="outlined"
         onClick={()=>props.onDelete(e.id)}
         >DELETE
     </Button>} 
 </Stack>,props.edit==e.id?editObj:e.address))
  })}



  return (
    <TableContainer component={Paper}>
        <ListItem sx={{fontSize:20,borderBottom:"2px solid black"}}><strong>Average Salary</strong> : {avgSalary}</ListItem> 
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell sx={{fontSize:25}}>ID</TableCell>
            <TableCell sx={{fontSize:25}}>NAME</TableCell>
            <TableCell sx={{fontSize:25}}>Salary</TableCell>
            <TableCell sx={{fontSize:25}}></TableCell>
            {/* <TableCell >Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
