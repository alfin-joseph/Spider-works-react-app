import React from 'react'; // Import React for functional components
import {Typography, TextField, IconButton, InputAdornment,Button, Box ,Stack} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { DotIcon } from './mainNavbar';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SouthIcon from '@mui/icons-material/South';
const SearchArea = () => {
  return (
    <Box sx={{ border: "none !important" ,position:"relative"}}>
        <Typography variant="h6" component="h6" sx={{ marginTop:4,fontSize: '13px',color: 'rgba(114, 112, 113, 1)'}}>
            FORUM
        </Typography>
        <Typography variant="h4" component="h4" sx={{marginTop:1,fontWeight:900, fontFamily: 'yourFontName',fontSize: '26px'}}>
            DISCUSS & EVOLVE
        </Typography>
        <Typography variant="h6" component="h6" sx={{marginTop:1,marginBottom:1,fontSize: '16px',color: 'rgba(114, 112, 113, 1)'}}>
            Engage with Fellow Professional:Join the Program Forum Discussion
        </Typography>
        <TextField
        // label="With normal TextField"
        variant="standard" 
        placeholder='Search topics'
        sx={{
           border:"2px solid black",
           padding:1.2,
           borderRadius:8,
           background:"none",
           width:"30%",
        }}
        InputProps={{
            disableUnderline: true,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton sx={{background:"black"}}>
                <SearchIcon sx={{color:"white",'&:hover':{color:"black"}}} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
        <Box sx={{ marginTop:2,width: '100%', bgcolor: 'background.paper', p: 2, display: 'flex', justifyContent: 'center' }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <IconButton sx={{borderRadius:8,width:200,'&:hover': {
                        backgroundColor: 'black',
                        },}}>
                    <Button sx={{borderRadius:8,background:"rgba(203, 0, 3, 0.18)"}}>
                        <ChatBubbleOutlineOutlinedIcon sx={{color:"rgba(255, 0, 109, 0.83)",FontSize:15}}/>
                    </Button>
                    <Button
                    variant="text"
                    sx={{
                        textTransform: 'none',
                        fontSize:10,
                        color: 'black',
                        '&:hover': {
                        color:"white",
                        backgroundColor: 'transparent',
                        },
                    }}
                    >
                    START DISCUSSION
                    </Button>
                </IconButton>
                <DotIcon />
                <IconButton sx={{borderRadius:8,width:235,'&:hover': {
                        backgroundColor: 'black',
                        },}}>
                    <Button sx={{borderRadius:8,background:"rgba(0, 221, 255, 0.12)"}}>
                     <LightbulbIcon sx={{color:"rgba(0, 221, 255, 0.52)",size:30}}/>
                    </Button>
                    <Button
                    variant="text"
                    sx={{
                        textTransform: 'none',
                        fontSize:10,
                        color: 'black',
                        '&:hover': {
                            color:"white",
                        backgroundColor: 'transparent',
                        },
                    }}
                    >
                    VIEW TOPICS
                    </Button>
                </IconButton>
              
            </Stack>
        </Box>
        <Box>
            <SouthIcon sx={{size:50}}/>
        </Box>
    </Box>
  );
};

export default SearchArea