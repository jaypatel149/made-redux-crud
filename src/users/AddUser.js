import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";




const AddUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: ""
  });

  let dispatch = useDispatch();
  const [error, setError] = useState(" ");

  const { name, username, email,phone} = user;

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handerSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !username || !phone) {
      setError("Please fill the All Input");
    } else {
      dispatch(addUser(user));
      navigate("/");
      setError("");
    }
  };

  return (
    <Box>
    <Typography variant="h5" align="center" mt={3}>AddUser</Typography>
    {error && (
      <Typography sx={{color:'red'}} align="center" mb={3}>
        {error}
      </Typography>
      )}
      <Box sx={{display:'flex', justifyContent:'center'}}>
      <Box
        component="form"
        onSubmit={handerSubmit}
        noValidate
        autoComplete="off"
        sx={{"& > *":{
          width: '50ch'
        }}}
      >
        <br />
        <br />
        <TextField
          color='success'
          id="outlined-multiline-static"
          label="Name"
          name="name"
          value={name}
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <br />
        <TextField
          color='success'
          id="outlined-multiline-static"
          value={username}
          label="Username"
          name="username"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <br />
        <TextField
          color='success'
          id="outlined-multiline-static"
          label="Email"
          value={email}
          name="email"
          type="email"
          onChange={handleInputChange}
        />
        <br />
        <br />
        <TextField
          color='success'
          id="outlined-multiline-static"
          label="Phone"
          value={phone}
          name="phone"
          type="phone"
          onChange={handleInputChange}
        />
        <br />
        <br />
        <br />
        <Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/")}
          >
            Go back
          </Button>
          <Button
            style={{ marginLeft: "13.5rem" }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </Typography>
      </Box>
      </Box>
    </Box>
  );
};

export default AddUser;
