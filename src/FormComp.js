import * as React from 'react';
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function ValidationTextFields(props) {

    //employees from props 
    let employees = props.employees;

    // ID,NAME,SALARY  and other states

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');
    const [errorMessageId, setErrorMessageId] = useState(null);
    const [errorMessageName, setErrorMessageName] = useState(null);
    const [errorMessageSalary, setErrorMessageSalary] = useState(null);


    //checkID
    let idArr = [];

    // onchange funcitons
    function onChangeId(e) {
        setId((e.target.value).toUpperCase())
    }
    function onChangeName(e) {
        setName((e.target.value).toUpperCase())
    }
    function onChangeSalary(e) {
        setSalary((e.target.value).toUpperCase())
    }
    //onClick functions

    function onClick() {
        setErrorMessageId(false)
        setErrorMessageName(false)
        setErrorMessageSalary(false)
    }

    // onSubmit function
    function onSubmit() {
        //checkID
        employees.forEach((e) => { idArr.push(e.id) })
        if (!id || !name || !salary) {
            if (!id) { setErrorMessageId('Required') }
            if (!name) { setErrorMessageName('Required') }
            if (!salary) { setErrorMessageSalary('Required') }
        }
        else {
            if (idArr.includes(id)) {
                setErrorMessageId("DUPLICATE")
                props.alert(4)
            }
            else {

                setErrorMessageId(true)
                props.onSubmit(id, name, salary);
                props.alert(2);
                setId("");
                setName("");
                setSalary("");
            }
        }
    }

    // onClear function 

    function onClear() {
        props.clearAll()
        props.alert(3)
    }




    return (
        <Box

            alignItems and justifyContent
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 2, width: '25ch' }, margin: "auto"
            }}
            noValidate
            autoComplete="off"
        >

            <div>


                <TextField
                    id="outlined-error-helper-text"
                    label="Employee ID"
                    defaultValue={id}
                    onChange={onChangeId}
                    onClick={onClick}
                    helperText={errorMessageId}
                    error={errorMessageId}
                    autoComplete="off"
                />
            </div>
            <div>

                <TextField

                    id="outlined-error-helper-text"
                    label="Name"
                    defaultValue={name}
                    onChange={onChangeName}
                    onClick={onClick}
                    helperText={errorMessageName}
                    error={errorMessageName}
                    autoComplete="off"
                />
            </div>
            <div>
                <TextField
                    id="outlined-error-helper-text"
                    label="Salary"
                    defaultValue={salary}
                    helperText={errorMessageSalary}
                    onChange={onChangeSalary}
                    onClick={onClick}
                    error={errorMessageSalary}
                    autoComplete="off"
                />
            </div>

            <Stack ml={25} spacing={3} direction="row" >
                <Button
                    variant="contained"
                    onClick={onSubmit}>SUBMIT
                </Button>
                <Button
                    variant="outlined"
                    onClick={onClear}>CLEAR ALL
                </Button>
            </Stack>
        </Box>
    );
}