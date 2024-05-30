import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Button } from '@mui/material';
import WifiProtectedSetupIcon from '@mui/icons-material/WifiProtectedSetup';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

const SmallNavbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'rgba(177, 185, 214, 0.07)',
        marginTop: '50px',
        height: '50px', // Reduced height
        maxWidth: '600px', // Fixed width
        justifyContent: 'center', // Center content horizontally
        marginLeft: 'auto', // Move left edge to the right
        marginRight: 'auto', // Move right edge to the left
        // position: 'absolute'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: '50px !important' }}>
        <IconButton>
          <WifiProtectedSetupIcon sx={{ color: 'black', fontSize: 35 }} />
        </IconButton>
        <Button
          variant="text"
          sx={{
            textTransform: 'none',
            background:"black",
            color: 'white',
            width:"110px",
            borderRadius:8,
            '&:hover': {
              backgroundColor: 'transparent',
            },
            display: 'flex',
            alignItems: 'center',
            // padding: 0
          }}
        >
          <MenuIcon sx={{ fontSize: 22, marginRight: 1 ,color:"white"}} /> Menu
        </Button>
        <Button
          variant="text"
          sx={{
            textTransform: 'none',
            borderRadius:8,
            padding:"5px",
            border:"2px solid blue",
            fontSize:"12px",
            color: 'black',
            '&:hover': {
              backgroundColor: 'transparent',
            },
            display: 'flex',
            alignItems: 'center',
          
          }}
        >
          <ChatOutlinedIcon sx={{ fontSize: 20, marginRight: 1 }} /> Discuss CPT
        </Button>
        <Box>
          <IconButton color="inherit" size="large">
            <JoinButton />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const JoinButton = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <SearchButton />
      <Box
        sx={{
          width: 10,
          height: 10,
          backgroundColor: 'black',
          padding: 'none',
          border: 'none',
        }}
      />
      <Button
        variant="text"
        sx={{
          textTransform: 'none',
          color: 'white',
          height: 40,
          width: 110,
          backgroundColor: 'black',
          borderRadius: 8,
          marginLeft: -1,
          fontSize: 12
        }}
      >
        Join Program
      </Button>
    </Box>
  );
};

const SearchButton = () => {
  return (
    <Button
      variant="outlined"
      color="primary"
      sx={{
        borderRadius: '50%', // Maintain circular shape
        borderColor: 'black',
        minWidth: 38, // Set a minimum width to prevent the button from collapsing
        padding: 0, // Remove padding to make the icon fill the button
        height: 38, // Increase height of the button
        borderWidth: 6, // Increase border width
        marginRight: 0
      }}
    >
      <IconButton color="inherit" size="small">
        <SearchIcon sx={{ fontSize: 15, color: 'black' }} />
      </IconButton>
    </Button>
  );
};

export default SmallNavbar;
