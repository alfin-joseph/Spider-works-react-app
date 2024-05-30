import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import{ Box, Typography,Stack,Button,IconButton} from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgba(36, 20, 51, 1)",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: "white",
  borderRadius:5,
  opacity: 1, // Initially invisible
  transition: 'opacity 0.5s ease-in-out', // Smooth fade-in animation
  ":hover":{
    backgroundImage: "linear-gradient(to right, #000101, #00111a, #001833, #021747, #400048)",
   cursor:"pointer",
   color:"blue"
  }
}));

export default function TopicsTile() {
    const Array = ['Eligibility',"F1 Visa Students","Universities","Admission","Companies", "Job" ]
  return (
    <Box sx={{ flexGrow: 1, background: '#edeaca', padding: 10 }}>
         <Typography variant="h6" component="h6" sx={{marginTop:1,marginBottom:1,fontSize: '13px',color: 'black'}}>
                            TOPICS
         </Typography>
         <Typography variant="h2" component="h2" sx={{fontFamily:"serif",fontWeight:700,marginTop:1,marginBottom:2,fontSize: '30px',color: 'black'}}>
                            Most Searched Ones
         </Typography>
        <Box sx={{margin:"auto", width:"60vw",display: 'flex', justifyContent: 'center'}}>
            <Grid container spacing={{ xs: 2, md: 3 }}>
            {Array.map((item, index) => (
                <Grid item xs={4} md={4} key={index} sx={{width:200,borderRadius:5}}>
                    <Item  sx={{padding:5}}>
                        <Typography variant="h6" component="h6" sx={{fontFamily:"Times New Roman",fontWeight:900,marginTop:1,marginBottom:1,fontSize: '16px'}}>
                            {item}
                        </Typography>
                    </Item> 
                </Grid>
            ))}
            </Grid>
        </Box>
        <Box sx={{ marginTop:2,width: '100%', p: 2, display: 'flex', justifyContent: 'center' }}>
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Typography variant="h6" component="h6" sx={{marginTop:1,marginBottom:1,fontSize: '16px',color: 'black'}}>
                     Didn't find your topic ?        
            </Typography>
            <IconButton sx={{borderRadius:8,width:200}}>
                        <ChatBubbleOutlineOutlinedIcon sx={{color:"rgba(255, 0, 109, 0.83)",size:2}}/>
                    <Button
                    variant="text"
                    sx={{
                        textTransform: 'none',
                        fontSize:10,
                        color: 'black',
                        '&:hover': {
                        backgroundColor: 'transparent',
                        },
                    }}
                    >
                    START DISCUSSION
                    </Button>
                </IconButton>
        </Stack>
      
        </Box>
  </Box>
  );
}