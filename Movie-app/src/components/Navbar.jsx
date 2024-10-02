import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box  sx={{ flexGrow: 1 }}>
    <AppBar  position="static">
      <Toolbar  style={{ backgroundColor: '#333333'}} >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          
 




          
        </IconButton>
        <Typography style={{ backgroundColor: '#F7F7F7', color: 'black',fontFamily:'serif'}} variant="h5" component="div" sx={{ flexGrow: 1 }}>
          EMPLOYEE APP
        </Typography>
        {/* <Link to={'/'}><Button color="black">Home</Button></Link> */}
       
        <Link to={'/'}><Button style={{ backgroundColor: 'white', color: 'black' ,marginLeft:'15px'}}>Home</Button></Link>
         
        <Link to={'/Add'}><Button style={{ backgroundColor: 'white', color: 'black',marginLeft:'10px' }}>Add</Button></Link>
      </Toolbar>
    </AppBar>
  </Box>
  )}

export default Navbar