import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Tabs, Tab, Button, alpha, styled } from "@mui/material";
import DrawerComponent from "./DrawerComponent";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "25ch",
      "&:focus": {
        width: "35ch",
      },
    },
  },
}));



const NavBar = () => {
  const [value, setValue] = useState(0);
  const handlerChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <DrawerComponent />
          <Tabs
            textColor="inherit"
            value={value}
            onChange={handlerChange}
            indicatorColor="secondary"
            sx={{ display: { xs: "none", sm: "none", md: "block" } }}
          >
            <Tab label="Products" />
            <Tab label="Services" />
            <Tab label="ContactUs"  />
            <Tab label="About Us" />
          </Tabs>
          <Search sx={{ display: { xs: "none", sm: "block" } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Button sx={{ marginLeft: "auto" }} variant="contained">
            Login
          </Button>
          <Button sx={{ marginLeft: "10px" }} variant="contained">
            SignUp
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
export default NavBar;
