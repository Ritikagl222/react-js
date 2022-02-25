import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'


export default function ValidationTextFields(props) {

    //employees from props 
    let employees = props.employees;

    // ID,NAME,SALARY  and other states

    const [id, setId] = useState();
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');
    const [errorMessageId, setErrorMessageId] = useState(null);
    const [errorMessageName, setErrorMessageName] = useState(null);
    const [errorMessageSalary, setErrorMessageSalary] = useState(null);
    const [errorMessageAddress, setErrorMessageAddress] = useState(null);
    const [errorMessageCity, setErrorMessageCity] = useState(null);
    const [errorMessagePhone, setErrorMessagePhone] = useState(null);
    const [errorMessageState, setErrorMessageState] = useState(null);
    const [errorMessageEmail, setErrorMessageEmail] = useState(null);
    const [errorMessageZip, setErrorMessageZip] = useState(null);
    const [address, setAddress] = useState({ address: "", city: "", zip: "", state: "", phone: "", email: "" });

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
    function onChangeAddress(e) {
        setAddress({ ...address, address: e.target.value })
    }
    function onChangeCity(e) {
        setAddress({ ...address, city: e.target.value })

    }
    function onChangeZip(e) {
        setAddress({ ...address, zip: e.target.value })

    }
    function onChangeState(e) {
        setAddress({ ...address, state: e.target.value })

    }

    function onChangePhone(e) {
        setAddress({ ...address, phone: e.target.value })

    }

    function onChangeEmail(e) {
        setAddress({ ...address, email: e.target.value })
    }

    //onClick functions

    function onClick() {
        setErrorMessageId(false)
        setErrorMessageName(false)
        setErrorMessageSalary(false)
        setErrorMessageAddress(false)
        setErrorMessageCity(false)
        setErrorMessageState(false)
        setErrorMessagePhone(false)
        setErrorMessageEmail(false)
        setErrorMessageZip(false)
    }


    // onSubmit function
    function onSubmit() {
        //checkID
        employees.forEach((e) => { idArr.push(e.id) })
        if (!id || !name || !salary || address.address == "" || address.city == "" || address.state == "" || address.phone == "" || address.zip == "" || address.email == "") {
            if (!id) { setErrorMessageId('Required') }
            if (!name) { setErrorMessageName('Required') }
            if (!salary) { setErrorMessageSalary('Required') }
            if (!address.city) { setErrorMessageCity('Required') }
            if (!address.state) { setErrorMessageState('Required') }
            if (!address.phone) { setErrorMessagePhone('Required') }
            if (!address.address) { setErrorMessageAddress('Required') }
            if (!address.email) { setErrorMessageEmail('Required') }
            if (!address.zip) { setErrorMessageZip('Required') }
        }
        else {
            // DUPLICATE ID VALIDATION
            if (idArr.includes(id)) {
                setErrorMessageId("DUPLICATE")
                // props.alert(4)
            }
            // ID VALIDATION
            else if (!(parseInt(id) >= 0)) {

                setErrorMessageId("INVALID-Numbers only")
            }
            // SALARY VALIDATION
            else if (!(parseInt(salary) >= 0)) {

                setErrorMessageSalary("INVALID-Numbers only")
            }
            // PHONE NUMBER VALIDATION
            else if (!(parseInt(address.phone)>=0)) {
                //    props.alert(6)
                 console.log(address.phone.length)
                setErrorMessagePhone("INVALID")
              }
            else if((address.phone.length<10)){
                setErrorMessagePhone("INVALID LENGTH")
              }
            // EMAIL VALIDATION
            else if (!(address.email.includes("@"))) {
                //    props.alert(7)
                setErrorMessageEmail("INVALID")
            }
            // ZIP VALIDATIN
            else if (!(parseInt(address.zip) >= 0)) {

                setErrorMessageZip("INVALID")
            }
            // POPULATE
            else {
                setErrorMessageId(true)
                // console.log(address)
                props.onSubmit(id, name, salary, address);
                props.alert(2);
                console.log(address.phone.length)
                setId("");
                setName("");
                setSalary("");
            }
        }
    }

    // onClear function 

    function onClear() {
        if (props.employees.length == 0) {
            props.alert(5)
        }
        else {
            props.clearAll()
            props.alert(3)
        }
    }

//    OnReset funciton
    function onReset(){
        setId("");
        setName("");
        setSalary("");
        setAddress({ address: "", city: "", zip: "", state: "", phone: "", email: "" });
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
            <div>
                <TextField
                    id="outlined-error-helper-text"
                    label="Phone"
                    defaultValue={address.phone}
                    helperText={errorMessagePhone}
                    onChange={onChangePhone}
                    onClick={onClick}
                    error={errorMessagePhone}
                    autoComplete="off"
                />
            </div>
            <div>
                <TextField
                    id="outlined-error-helper-text"
                    label="Email"
                    defaultValue={address.email}
                    helperText={errorMessageEmail}
                    onChange={onChangeEmail}
                    onClick={onClick}
                    error={errorMessageEmail}
                    autoComplete="off"
                />
            </div>
            <div>
                <TextField
                    id="outlined-error-helper-text"
                    label="Adress"
                    defaultValue={address.address}
                    helperText={errorMessageAddress}
                    onChange={onChangeAddress}
                    onClick={onClick}
                    error={errorMessageAddress}
                    autoComplete="off"
                />
            </div>
            <div>
                <TextField
                    id="outlined-error-helper-text"
                    label="City"
                    defaultValue={address.city}
                    helperText={errorMessageCity}
                    onChange={onChangeCity}
                    onClick={onClick}
                    error={errorMessageCity}
                    autoComplete="off"
                />
            </div>
            <div>
                <TextField
                    id="outlined-error-helper-text"
                    label="Zip"
                    defaultValue={address.zip}
                    helperText={errorMessageZip}
                    onChange={onChangeZip}
                    onClick={onClick}
                    error={errorMessageZip}
                    autoComplete="off"
                />
            </div>
            <div>
                <TextField
                    id="outlined-error-helper-text"
                    label="State"
                    defaultValue={address.state}
                    helperText={errorMessageSalary}
                    onChange={onChangeState}
                    onClick={onClick}
                    error={errorMessageState}
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