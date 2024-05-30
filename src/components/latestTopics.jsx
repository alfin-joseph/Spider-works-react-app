import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import{ Box,Typography,Stack,IconButton, InputAdornment,TextField,Button} from '@mui/material';
import Grid from '@mui/material/Grid';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';import { topics } from './topics';
import thinkingFace from '../assets/faces/thinking face.webp'
import ManFace from '../assets/faces/manface.png'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "white",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    margin:2,
    color: theme.palette.text.secondary,
    ":hover":{
     backgroundColor:"linear-gradient(90deg, rgba(13, 0, 36, 1) 0%, rgba(105, 9, 121, 1) 89%, rgba(149, 0, 255, 1) 100%)",
     cursor:"pointer"
    }
  }));

const LatestTopics = () =>{
    
    return(<Box sx={{paddingTop:7}}>
        <Grid container spacing={2}>
        <Grid item xs={8}>
            <Box sx={{ width: '95%', p: 2, display: 'flex' }}>
                <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                    <Typography variant="h6" component="h6" sx={{ fontSize: '10px', color: 'black' }}>
                        LATEST DISCUSSIONS AS OF
                    </Typography>
                    <Box sx={{ height: 15, width: 15, background: "red" }} />
                    <Typography variant="h6" component="h6" sx={{ fontSize: '10px', color: 'black' }}>
                        MARCH 12 2024
                    </Typography>
                </Stack>
                <Box sx={{ flexGrow: 1 }} /> {/* Add spacer to push content left */}
                <IconButton sx={{ borderRadius: 8 ,background:"rgba(168, 225, 235, 0.35)" ,height:35,width:100}}>
                    <Button>
                        <LightbulbOutlinedIcon sx={{ color: "rgba(0, 221, 255, 0.52)", FontSize: 15 }} />
                    </Button>
                    <Button
                        variant="text"
                        sx={{
                        textTransform: 'none',
                        fontSize: 10,
                        textAlign: "left",
                        marginLeft:-3,
                        color: 'black',
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                        }}
                    >
                        TOPICS
                    </Button>
                </IconButton>
                </Box>
                <TextField
        // label="With normal TextField"
        variant="standard" 
        placeholder='Search topics'
        sx={{
           border:"2px solid black",
           padding:1.2,
           borderRadius:8,
           background:"none",
           width:"90%",
        }}
        InputProps={{
            disableUnderline: true,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton >
                <SearchIcon sx={{color:"black"}} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Box sx={{height:400,padding:5}}>
        {
            topics.map((item,index)=>
                <Item key={index}>
                    
                    <Grid container spacing={3}>
                        <Grid item xs={1}>
                            <Avatar img={item.img_url}/>
                        </Grid>
                        <Grid item xs={7} sx={{textAlign:"left",paddingLeft:3}}>
                        <Typography variant="h2" component="h2" sx={{ fontSize: '16px', color: 'black' ,width:"60%" }}>
                            {item.title}
                            </Typography>
                            <Typography variant="h6" component="h6" sx={{ fontSize: '10px', color: 'black' ,width:"60%" }}>
                             Posted by {item.name}
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                                <IconButton sx={{ borderRadius: 8 ,background:"rgba(177, 8, 49, 0.23)",  height:35}}>
                                    <Button sx={{fontSize:8,padding:0,width:30}}>
                                        <QuestionAnswerOutlinedIcon sx={{ color: "rgba(205, 6, 104, 0.81)", fontSize: 20 }} />
                                    </Button>
                                    <Button
                                        variant="text"
                                        sx={{
                                        textTransform: 'none',
                                        fontSize: 8,
                                        textAlign: "left",
                                        marginLeft:-3,
                                        color: 'black',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                        },
                                        }}
                                    >
                                    {item.responses} Responses
                                    </Button>
                                </IconButton>
                                <Button  variant="text"
                                        sx={{
                                        textTransform: 'none',
                                        fontSize: 12,
                                        background:"black",
                                        // textAlign: "left",
                                        width:100,
                                        marginLeft:-3,
                                        color: 'white',
                                        '&:hover': {
                                            backgroundImage: "linear-gradient(to right, #000101, #00151e, #001d3c, #021e55, #4e0358)",
                                        },
                                        }}
                                    >
                                View Answer    
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>

                </Item>
            )
        }
        <Box sx={{textAlign:"left"}}>
        <Button  variant="text"
                sx={{
                textTransform: 'none',
                fontSize: 16,
                // background:"black",
                textAlign: "left",
                marginTop:3,
                width:150,
                borderRadius:8,
                border:"2px solid black",
                color: 'black',
                '&:hover': {
                    backgroundColor: 'black',
                    color:"white"
                },
                }}
            >
           Load More    
        </Button>
        </Box>
       
      </Box>
      
            </Grid>
            <Grid item xs={4} sx={{height:"100%",marginTop:20}}>
               <Box sx={{padding:2,background:"#fcead9",height:500,margin:5}}>
               <Box sx={{height:350,borderBottom:"1px solid red"}}>
               <Typography variant="h2" component="h2" sx={{fontFamily:"serif",fontStyle:"italic",fontWeight:700,marginTop:1,fontSize: '30px',color: 'black'}}>
                            Top Contributer
                </Typography>
                <Typography variant="h4" component="h4" sx={{fontFamily:"serif",fontStyle:"italic",fontWeight:700,marginBottom:2,fontSize: '20px',color: 'black'}}>
                            This week
                </Typography>
                <Box>
                    <img height="200" src={ManFace} alt="manface"/>
                </Box>
                <Typography variant="h4" component="h4" sx={{fontFamily:"serif",fontWeight:500,marginBottom:2,fontSize: '20px',color: 'black'}}>
                            Mosh Joe
                </Typography>
                </Box>
                <Box>
                <Typography variant="h5" component="h5" sx={{fontFamily:"Times Now",textAlign:"left",fontWeight:400,marginTop:1,marginBottom:2,fontSize: '18px',color: 'black'}}>
                    You can be next one! Be a part of USA's 1st CPT Program Directory !       
                </Typography>
                <Button  variant="text"
                sx={{
                textTransform: 'none',
                fontSize: 14,
                backgroundImage:"linear-gradient(to right, #000101, #00111a, #001833, #021747, #400048)",
                textAlign: "left",
                marginTop:1,
                width:"90%",
                borderRadius:8,
                height:50,
                border:"2px solid black",
                color: 'white',
                '&:hover': {
                    color:"red",
                    backgroundImage:"linear-gradient(to right, #260051, #2e0035, #28001f, #1d000f, #000000)"
                },
                }}
            >
          Join Community &  Ask    
        </Button>
                </Box>
               </Box>
               <Box sx={{backgroundImage:"linear-gradient(to bottom, #000101, #00111a, #001833, #021747, #400048)",height:500,margin:5}}>
               <Box sx={{height:300}}>
                <Box>
                    <img src={thinkingFace} height="300" width="300" alt="thinking face image"></img>
                </Box>
               </Box>
               <Box>
               <Typography variant="h5" component="h5" sx={{fontWeight:200,marginTop:1,marginBottom:2,fontSize: '16px',color: 'white'}}>
                    E-BOOK    
                </Typography>
               <Typography variant="h3" component="h3" sx={{paddingLeft:2,fontFamily:"serif",fontWeight:400,marginTop:1,marginBottom:2,fontSize: '20px',color: 'white'}}>
                    Charting Paths:Program Through a <span style={{fontStyle:"italic"}}>Studens's </span> Eyes      
                </Typography>
                    <Button  variant="text"
                            sx={{
                            textTransform: 'none',
                            fontSize: 14,
                            border:"2px solid white",
                            textAlign: "left",
                            marginTop:3,
                            width:150,
                            borderRadius:8,
                            color: 'white',
                            '&:hover': {
                                backgroundColor: 'white',
                                color:"black"
                            },
                            }}
                                >
                        Get the guide   
                        </Button>
               </Box>
               </Box>
            </Grid>
        </Grid>
         </Box>)
}

const Avatar =({img})=>{
    return(<Box sx={{borderRadius:"50%",height:50,width:50,backgroundImage:`url(${img})`,backgroundSize:"cover"}}>
           
          </Box>)
}
export default LatestTopics