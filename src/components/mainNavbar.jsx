import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography } from '@mui/material';
import WifiProtectedSetupIcon from '@mui/icons-material/WifiProtectedSetup';
import SearchIcon from '@mui/icons-material/Search';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const MainNavbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ padding: 3 }}
          >
            <WifiProtectedSetupIcon sx={{ color: 'black', fontSize: 45 }} />
          </IconButton>
          <Typography variant="h6" component="div">
            <HorizontalButtonList />
          </Typography>
          <Box>
            <JoinButton />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const JoinButton = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <SearchButton />
      <Box
          sx={{
            width: 15,
            height: 15,
            backgroundColor: 'black',
            padding:"none",
            border:"none",
          }}
        />
      <Button variant="text" sx={{
        textTransform: 'none',
        color: 'white',
        height: 50,
        width: 150,
        backgroundColor: 'black',
        borderRadius: 8,
        marginLeft: -1,
        '&:hover':{
            backgroundImage:"linear-gradient(to right, #000101, #00151e, #001d3c, #021e55, #4e0358)"
        }
      }}>Join Program</Button>
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
        minWidth: 48, // Set a minimum width to prevent the button from collapsing
        padding: 0, // Remove padding to make the icon fill the button
        height: 48, // Increase height of the button
        borderWidth: 8, // Increase border width
        marginRight: -1,
        '&:hover':{borderColor:"black",borderWidth:8}
      }}
    >
      <IconButton color="inherit" size="small">
        <SearchIcon sx={{ fontSize: 20, color: 'black' }} />
      </IconButton>
    </Button>
  );
};

const HorizontalButtonList = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', p: 2, display: 'flex', justifyContent: 'center' }}>
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
        <CustomButton text="Learn" />
        <DotIcon />
        <CustomButton text="How do I Participate?" />
        <DotIcon />
        <CustomButton text="Universities" />
        <DotIcon />
        <CustomButton text="Corporate" />
      </Stack>
    </Box>
  );
};

export const CustomButton = ({ text }) => {
  return (
    <Button
      variant="text"
      sx={{
        textTransform: 'none',
        color: 'black',
        '&:hover': {
          backgroundColor: 'transparent',
        },
      }}
    >
      {text}
    </Button>
  );
};

export const DotIcon = () => {
  return (
    <FiberManualRecordIcon sx={{ fontSize: 8, color: 'grey' }} />
  );
};

export default MainNavbar;
