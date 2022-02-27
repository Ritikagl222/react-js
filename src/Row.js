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

export default function Row(props) {
  console.log("ROWS RENDER")
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
          {props.edit == row.id ? <input value={props.editId} onChange={(e) => { props.setEditId(e.target.value) }}></input> : <h4 onClick={() => { props.setEdit(row.id); props.onEdit(row.id) }}>{row.id}</h4>}
        </TableCell>

        <TableCell >{props.edit == row.id ? <input value={props.editName} onChange={(e) => { props.setEditName(e.target.value) }}></input> : <h4 onClick={() => { props.setEdit(row.id); props.onEdit(row.id) }}>{row.name}</h4>}</TableCell>
        <TableCell >{props.edit == row.id ? <input value={props.setEditSalary} onChange={(e) => { props.setEditSalary(e.target.value) }}></input> : <h4 onClick={() => { props.setEdit(row.id); props.onEdit(row.id) }}>{row.salary}</h4>}</TableCell>
        <TableCell >{<Stack spacing={3} direction="row" >

//      {props.edit == row.id ? <Button
            variant="contained"
            onClick={() => { props.onDone(row.id) }}>DONE
          </Button> : <Button
            variant="contained"
            onClick={() => { props.setEdit(row.id); props.onEdit(row.id) }}>EDIT
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
                <ListItem >
                  <ListItemAvatar>
                    <Avatar>
                      <LocalPhoneIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Phone" secondary={props.edit == row.id ? <TextField defaultValue={props.editAddress.phone} onChange={(e) => props.setEditAddress({ ...props.editAddress, phone: (e.target.value) })}></TextField> : row.address.phone} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <AlternateEmailIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Email" secondary={props.edit == row.id ? <TextField defaultValue={props.editAddress.email} onChange={(e) => props.setEditAddress({ ...props.editAddress, email: (e.target.value) })}></TextField> : row.address.email} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LocationOnIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Address" secondary={props.edit == row.id ? <TextField defaultValue={props.editAddress.address} onChange={(e) => props.setEditAddress({ ...props.editAddress, address: (e.target.value) })}></TextField> : row.address.address} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LocationOnIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="City" secondary={props.edit == row.id ? <TextField defaultValue={props.editAddress.city} onChange={(e) => props.setEditAddress({ ...props.editAddress, city: (e.target.value) })}></TextField> : row.address.city} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LocationOnIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="State" secondary={props.edit == row.id ? <TextField defaultValue={props.editAddress.state} onChange={(e) => props.setEditAddress({ ...props.editAddress, state: (e.target.value) })}></TextField> : row.address.state} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LocationOnIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Zip" secondary={props.edit == row.id ? <TextField defaultValue={props.editAddress.zip} onChange={(e) => props.setEditAddress({ ...props.editAddress, zip: (e.target.value) })}></TextField> : row.address.zip} />
                </ListItem>
              </List>

            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}