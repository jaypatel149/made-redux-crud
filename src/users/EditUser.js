import React, { useState,useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate, useParams} from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useDispatch ,useSelector} from "react-redux";
import { getSingleUser, updateUser } from "../redux/actions";

const EditUser = () => {
  const navigate = useNavigate();
  let {id} = useParams();
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  let dispatch = useDispatch();
  let {user} = useSelector((user) => user.data);
  const [error, setError] = useState(" ");

  const { name, username, email ,phone} = userData;

  useEffect(()=>{
    dispatch(getSingleUser(id))
  },[])


  useEffect(()=>{
    if(user){
        setUserData({...user})
    }
  },[user])


  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };


  const handerUpdate = (e) => {
    e.preventDefault();
    if (!name || !email || !username || !phone) {
      setError("Please fill the All Input");
    } else {
      dispatch(updateUser(userData,id));
      navigate("/");
      setError("");
    }
  };

  return (
    <Box>
      <Typography variant="h5" align="center" mt={3}>EditUser</Typography>
      {error && (
        <Typography sx={{color:'red'}} align="center" mb={3}>
          {error}
        </Typography>
      )}
      <Box sx={{display:'flex', justifyContent:'center'}}>
      <Box
        component="form"
        onSubmit={handerUpdate}
        sx={{
          "& > *": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          color='success'
          id="outlined-multiline-static"
          label="Name"
          name="name"
          value={name || ""}
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <br />
        <TextField
          color='success'
          id="outlined-multiline-static"
          value={username || ""}
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
          value={email || ""}
          name="email"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <br />
        <TextField
          color='success'
          id="outlined-multiline-static"
          label="Phone"
          value={phone || ""}
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
            style={{ marginLeft: "13rem" }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Update
          </Button>
        </Typography>
      </Box>
      </Box>
    </Box>
  );
};

export default EditUser;
