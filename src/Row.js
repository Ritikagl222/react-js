import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
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
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


export default function Row(props) {

  // Data Click EDit Handler
  function dataClickHandler(e){
    props.setEditName(row.name);
    props.setEditId(row.id);
    props.setEditSalary(row.salary);
    props.setEditAddress({phone:row.address.phone,email:row.address.email,state:row.address.state,address:row.address.address,zip:row.address.zip,city:row.address.city})
    props.setEdit(row.id);
     props.onEdit(row.id)
     props.idCheckClick(row.id)
  }
  // Data textfield click handler
function onClick(){
  props.setError({id:false,name:false,salary:false,address:false,phone:false,email:false,zip:false,state:false,city:false})
}

  console.log("ROWS RENDER")
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' }, }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell> {props.edit == row.id ? <TextField sx={{width:"10ch"}} defaultValue={props.editId} onChange={(e) => { props.setEditId(e.target.value) }} helperText={props.error.id} error={props.error.id} onClick={onClick}></TextField> : <h2 onClick={  dataClickHandler}>{row.id}</h2>}</TableCell>
        <TableCell >{props.edit == row.id ? <TextField sx={{width:"20ch"}} defaultValue={props.editName} onChange={(e) => { props.setEditName(e.target.value) }}helperText={props.error.name} error={props.error.name}onClick={onClick}></TextField> : <h2 onClick={  dataClickHandler}>{row.name}</h2>}</TableCell>
        <TableCell >{props.edit == row.id ? <TextField sx={{width:"15ch"}} defaultValue={props.editSalary} onChange={(e) => { props.setEditSalary(e.target.value) }}helperText={props.error.salary} error={props.error.salary}onClick={onClick}></TextField> : <h2 onClick={  dataClickHandler}><CurrencyRupeeIcon sx={{fontSize:"medium"}}></CurrencyRupeeIcon>{row.salary}</h2>}</TableCell>
        <TableCell >{<Stack spacing={3} direction="row" >

       {props.edit == row.id ? <Button
            variant="contained"
            onClick={() => { props.onDone(row.id) }}>DONE
          </Button> : <Button
            variant="contained"
            onClick={() => { props.setEdit(row.id); props.onEdit(row.id);props.setEditName(row.name);props.setEditId(row.id);props.setEditSalary(row.salary);props.setEditAddress({phone:row.address.phone,email:row.address.email,state:row.address.state,address:row.address.address,zip:row.address.zip,city:row.address.city});props.idCheckClick(row.id) }}>EDIT
          </Button>}

          {props.edit == row.id ? <Button
            variant="outlined"
            onClick={() => props.setEdit(null)}
          >CANCEL
          </Button> : <Button
            variant="outlined"
            onClick={() => props.onDelete(row.id)}
          >DELETE
          </Button>}
        </Stack>}</TableCell>

      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                DETAILS
              </Typography>
              <List
                sx={{
                  width: '100%',
                  fontSize: "2px",
                  maxWidth: 360,
                  bgcolor: 'background.paper',
                 
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LocalPhoneIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Phone" secondary={props.edit == row.id ? <TextField  defaultValue={props.editAddress.phone} onClick={onClick} onChange={(e) => props.setEditAddress({ ...props.editAddress, phone: (e.target.value).toUpperCase() })}  helperText={props.error.phone} error={props.error.phone}  ></TextField> : <h3 onClick={  dataClickHandler}> {row.address.phone}</h3> }/>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <AlternateEmailIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Email" secondary={props.edit == row.id ? <TextField defaultValue={props.editAddress.email} onClick={onClick} onChange={(e) => props.setEditAddress({ ...props.editAddress, email: (e.target.value).toUpperCase() })} helperText={props.error.email} error={props.error.email}></TextField> :<h3 onClick={  dataClickHandler}> {row.address.email}</h3> } />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LocationOnIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Address" secondary={props.edit == row.id ? <TextField defaultValue={props.editAddress.address} onClick={onClick} onChange={(e) => props.setEditAddress({ ...props.editAddress, address: (e.target.value).toUpperCase() })}helperText={props.error.address} error={props.error.address}></TextField> : <h3 onClick={  dataClickHandler}> {row.address.address}</h3> } />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LocationOnIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="City" secondary={props.edit == row.id ? <TextField defaultValue={props.editAddress.city} onClick={onClick} onChange={(e) => props.setEditAddress({ ...props.editAddress, city: (e.target.value).toUpperCase() })}helperText={props.error.city} error={props.error.city}></TextField> : <h3 onClick={  dataClickHandler}> {row.address.city}</h3> } />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LocationOnIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="State" secondary={props.edit == row.id ? <TextField defaultValue={props.editAddress.state}onClick={onClick} onChange={(e) => props.setEditAddress({ ...props.editAddress, state: (e.target.value).toUpperCase() })}helperText={props.error.state} error={props.error.state}></TextField> :<h3 onClick={  dataClickHandler}> {row.address.state}</h3> } />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LocationOnIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Zip" secondary={props.edit == row.id ? <TextField defaultValue={props.editAddress.zip}onClick={onClick} onChange={(e) => props.setEditAddress({ ...props.editAddress, zip: (e.target.value).toUpperCase() })}helperText={props.error.zip} error={props.error.zip}></TextField> :<h3 onClick={  dataClickHandler}> {row.address.zip}</h3> } />
                </ListItem>
              </List>

            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}