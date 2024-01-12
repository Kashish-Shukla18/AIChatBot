import React from 'react';
import { AppBar,Toolbar } from '@mui/material';

const Header = () => {
  return (
    <div>
      <AppBar sx={{bgcolor:"transparent",position:"static",boxShadow:"none"}}>
        <Toolbar sx={{display:"flex"}}>

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header