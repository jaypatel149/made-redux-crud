import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import CrudTables from './layout/CrudTables'
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <CrudTables/> } />
        <Route path="/addUser" element={<AddUser/>} />
        <Route path="/editUser/:id" element={<EditUser/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
