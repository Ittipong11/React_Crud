import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link'
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Users() {
    const [item, setitem] = useState([]);

    console.log("item : ", item);

    const fetchdata = async () => {
        try {
            const res = await fetch("https://dummyjson.com/users?limit=15&select=firstName,lastName,age,gender,email,image")
            const data = await res.json();
            
            if (res.ok) {
                setitem(data.users);
            } else {
                throw new error("Failed to fetch data.");
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchdata();
    }, []) 

    const UserDelete = id => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow"
        };

        fetch("https://dummyjson.com/users/"+id, requestOptions)
        .then((response) => response.json())
        .then((result) => alert(result['firstName']))
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    }

        const UserUpdate = id => {
            window.location= '/update/' + id;
        }
    return (

        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ p:2 }}>
            <Paper sx = {{ p:3 }}>
                <Box display={'flex'}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography component="div">
                            <Box sx={{ fontSize: 'h6.fontSize', m: 1 }}>User</Box>
                        </Typography>
                    </Box>
                    <Box>
                        <Link href="create">
                            <Button variant="outlined">
                                Create
                            </Button>
                        </Link>
                        
                    </Box>
                </Box>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="right">First Name</TableCell>
                                <TableCell align="right">Last Name</TableCell>
                                <TableCell align="right">Age</TableCell>
                                <TableCell align="right">Gender</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Image</TableCell>
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {item.map((item) => (
                                <TableRow
                                key={item.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell align="center">{item.id}</TableCell>
                                <TableCell align="center">{item.firstName}</TableCell>
                                <TableCell align="center">{item.lastName}</TableCell>
                                <TableCell align="center">{item.age}</TableCell>
                                <TableCell align="center">{item.gender}</TableCell>
                                <TableCell align="center">{item.email}</TableCell>
                                <TableCell align="center"><img src={item.image} alt="" /></TableCell>
                                <TableCell align="center">
                                <ButtonGroup variant="outlined" aria-label="Basic button group">
                                    <Button onClick={() => UserUpdate(item.id)}>Edit</Button>
                                    <Button onClick={() => UserDelete(item.id)}>Del</Button>
                                </ButtonGroup>
                                </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
 
            </Paper>
        </Container>
        </React.Fragment>
    );
}