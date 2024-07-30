import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Grid, TextField, Typography } from '@mui/material';


export default function UserUpdate () {

    const { id } = useParams(); // เพื่อให้สามารถใช้งาน update/id ได้

    const handleSubmit = Event => {
        Event.preventDefault(); // ไม่ให้เกิดการ  refresh
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
        "firstName": firstName,
        "lastName": lastName,
        "age": age,
        "gender": gender,
        "email": email,
        "image": image
        });

        const requestOptions = {
        "id": id,
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
        };

        fetch('https://dummyjson.com/users/2', requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        // .then(result => window.location.href = '/')
        .catch(error => console.error(error));  
    };

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [age, setage] = useState('');
    const [gender, setgender] = useState('');
    const [email, setemail] = useState('');
    const [image, setimage] = useState('');

  return (

    <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ p: 3}}>
        <Typography component="div">
            <Box sx={{ fontSize: 'h6.fontSize', m: 1 }}>Update User</Box>
        </Typography>
        <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField id="firstName" label="First Name" variant="outlined" 
                fullWidth
                onChange={(e) => setfirstName(e.target.value)}
                value={firstName}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField id="lastName" label="Last Name" variant="outlined"
                fullWidth
                onChange={(e) => setlastName(e.target.value)}
                value={lastName}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField id="age" label="Age" variant="outlined" 
                fullWidth
                onChange={(e) => setage(e.target.value)}
                value={age}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField id="gender" label="Gender" variant="outlined"
                fullWidth
                onChange={(e) => setgender(e.target.value)}
                value={gender}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField id="email" label="Email" variant="outlined"
                fullWidth
                onChange={(e) => setemail(e.target.value)}
                value={email}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField id="image" label="Image" variant="outlined" 
                fullWidth
                onChange={(e) => setimage(e.target.value)}
                value={image}
                />
            </Grid>
            <Grid item xs={12}>
                <Button type="submit" variant="outlined" fullWidth>
                    Update
                </Button>
            </Grid>
        </Grid>
        </form>
        </Container>
    </React.Fragment>
  );
}