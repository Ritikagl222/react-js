import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'


export default function ValidationTextFields(props) {
    console.log("FORM COMP RERENDER")


    //checkID
    let idArr = [];

    // onchange funcitons

    function onChangeId(e) {
        props.setId((e.target.value).toUpperCase())
    }

    function onChangeName(e) {
        props.setName((e.target.value).toUpperCase())
    }
    function onChangeSalary(e) {
        props.setSalary((e.target.value).toUpperCase())
    }
    function onChangeAddress(e) {
        props.setAddress({ ...props.address, address: e.target.value })
    }
    function onChangeCity(e) {
        props.setAddress({ ...props.address, city: e.target.value })

    }
    function onChangeZip(e) {
        props.setAddress({ ...props.address, zip: e.target.value })

    }
    function onChangeState(e) {
        props.setAddress({ ...props.address, state: e.target.value })

    }

    function onChangePhone(e) {
        props.setAddress({ ...props.address, phone: e.target.value })

    }

    function onChangeEmail(e) {
        props.setAddress({ ...props.address, email: e.target.value })
    }


    // onSubmit function
    function onSubmit() {
         props.onSubmit();
    }

    // onClear function 

    function onClear() {
           props.clearAll()
    }

//    OnReset funciton
    function onReset(){
        props.setId("");
        props.setName("");
        props.setSalary("");
        props.setAddress({ address: "", city: "", zip: "", state: "", phone: "", email: "" });
    }

    return (
        <Box

            alignItems and justifyContent
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 2, width: '35ch', height: '7ch', fontSize: "6" }, margin: "auto"
            }}
            noValidate
            autoComplete="off"
        >

            <div>
                <TextField
                    id="outlined-error-helper-text"
                    label="Employee ID"
                    defaultValue={props.id}
                    onChange={onChangeId}
                    autoComplete="off"
                />
            </div>
            <div>
                <TextField

                    id="outlined-error-helper-text"
                    label="Name"
                    defaultValue={props.name}
                    onChange={onChangeName}
                    autoComplete="off"
                />
            </div>
            <div>
                <TextField
                    id="outlined-error-helper-text"
                    label="Salary"
                    defaultValue={props.salary}
                    onChange={onChangeSalary}
  
                    autoComplete="off"
                />
            </div>
            <div>
                <TextField
                    id="outlined-error-helper-text"
                    label="Phone"
                    defaultValue={props.address.phone}
                    onChange={onChangePhone}
                    autoComplete="off"
                />
            </div>
            <div>
                <TextField
                    id="outlined-error-helper-text"
                    label="Email"
                    defaultValue={props.address.email}
                    onChange={onChangeEmail}
            
                    autoComplete="off"
                />
            </div>
            <div>
                <TextField
                    id="outlined-error-helper-text"
                    label="Adress"
                    defaultValue={props.address.address}
                    onChange={onChangeAddress}
                    autoComplete="off"
                />
            </div>
            <div>
                <TextField
                    id="outlined-error-helper-text"
                    label="City"
                    defaultValue={props.address.city}
                    onChange={onChangeCity}
                    autoComplete="off"
                />
            </div>
            <div>
                <TextField
                    id="outlined-error-helper-text"
                    label="Zip"
                    defaultValue={props.address.zip}
                  onChange={onChangeZip}
                    autoComplete="off"
                />
            </div>
            <div>
                <TextField
                    id="outlined-error-helper-text"
                    label="State"
                    defaultValue={props.address.state}
                   onChange={onChangeState}
            
                    autoComplete="off"
                />
            </div>

            <Stack mt={5} ml={8} spacing={3} direction="row" >
                <Button
                    variant="contained"
                    onClick={onSubmit}>SUBMIT
                </Button>
                <Button
                    variant="outlined"
                    onClick={onClear}>CLEAR ALL
                </Button>
                <Button
                    variant="outlined"
                    onClick={onReset}>Reset
                </Button>
            </Stack>
        </Box>
    );
}