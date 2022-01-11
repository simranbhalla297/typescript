import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export default function Home() {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    phonenumber: "",
  });
  const printValues = (e: any) => {
    e.preventDefault();
    console.log(
      formdata.name,
      formdata.email,
      formdata.password,
      formdata.phonenumber,
      formdata.age
    );
    createUser();
  };

  const updateField = (e: any) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  //here we are going to create a new user by auth/user api
  async function createUser() {
    const { name, email, password, phonenumber, age } = formdata;
    const response = await fetch("http://localhost:3000/auth/user", {
      method: "POST",
      body: JSON.stringify({ name, email, password, phonenumber, age }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    //converting to json
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <Button variant="contained">
        <Link to="/userInfo" style={{ textDecoration: "none", color: "white" }}>
          Registered user
        </Link>
      </Button>
      <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            value={formdata.name}
            autoComplete="name"
            autoFocus
            onChange={updateField}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={formdata.email}
            autoComplete="email"
            autoFocus
            onChange={updateField}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            value={formdata.password}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={updateField}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="phonenumber"
            value={formdata.phonenumber}
            label="phonenumber"
            type="phonenumber"
            id="phonenumber"
            autoComplete="phonenumber"
            onChange={updateField}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="age"
            value={formdata.age}
            label="age"
            type="number"
            id="age"
            autoComplete="age"
            onChange={updateField}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={printValues}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link to="/">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
