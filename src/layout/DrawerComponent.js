import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {Drawer, IconButton, List,ListItemButton, ListItemIcon, ListItemText }  from '@mui/material';
const PAGES = ['Products','Services','ContactUs','About Us','Login','Signup']

const DrawerComponent = ()=>{
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={()=> setOpenDrawer(false)}>
        <List>
        {PAGES.map((page, index)=>(
          <ListItemButton key={index}>
            <ListItemIcon>
                <ListItemText>{page}</ListItemText>
            </ListItemIcon>
            </ListItemButton>
        ))}   
        </List>
      </Drawer>
      <IconButton color="inherit" sx={{ display: { lg: 'none', md: 'none' } }} onClick={()=>setOpenDrawer(!openDrawer)}><MenuIcon/></IconButton>
    </React.Fragment>
  )
}

export default DrawerComponent;
