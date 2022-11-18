import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  styled,
  tableCellClasses,
  Box,
  Typography,
  TableFooter
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import React, { useState, useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom'
import NavBar from "./Navbar";
import { deleteUser, loadUsers } from "../redux/actions";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CrudTables = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const {users} = useSelector(state => state.data)
  const [page, setPage] = useState(0);
  const [rowsPerPage, setrowsPerPage] = useState(5);

  useEffect(() => {
    dispatch(loadUsers());
  },[]);
  

  const handleChangePage = (event, nextPage) => {
    setPage(nextPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setrowsPerPage(event.target.value);
  };

  const handlerDelete = (id)=> {
    if(window.confirm('Are you sure you want to delete user')){
      dispatch(deleteUser(id))
    }
  }


  return (
    <div>
    <NavBar/>
    <Container maxWidth="lg" sx={{marginTop:'5rem'}}>
    <Box sx={{display:'flex',justifyContent:'space-between',margin:'0px 0px 2rem 0'}}>
      <Typography variant="h5">React CRUD Application using JSON Server and Redux--✌</Typography>
      <Button  size="medium" variant="contained" onClick={()=> navigate('/addUser')}><AddIcon/>Add</Button>
    </Box>
      <TableContainer component={Paper}>
        <Table aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">No.</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">UserName</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Phone</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users && users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user,index) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell component="th" scope="row">{index+1}</StyledTableCell>
                  <StyledTableCell align="center">{user.name}</StyledTableCell>
                  <StyledTableCell align="center">{user.username}</StyledTableCell>
                  <StyledTableCell align="center">{user.email}</StyledTableCell>
                  <StyledTableCell align="center">{user.phone}</StyledTableCell>
                  <StyledTableCell align="center">
                    <ButtonGroup
                      size="small" 
                      variant="contained"
                      aria-label="outlined primary button group">
                      <Button style={{marginRight:'8px'}} color="primary" onClick={()=> navigate(`/editUser/${user.id}`)}>Edit</Button>
                      <Button color="secondary" onClick={()=>handlerDelete(user.id) }>Delete</Button>
                    </ButtonGroup>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 7, 10]}
              count={users.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </TableContainer>
    </Container>
    </div>
  );
};

export default CrudTables;
