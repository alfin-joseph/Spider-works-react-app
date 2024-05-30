import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import avatar5 from '../assets/avatar_pngs/avatar5.webp'
import avatar3 from '../assets/avatar_pngs/avatar3.webp'
import avatar1 from '../assets/avatar_pngs/avatar1.png'
import avatar8 from '../assets/avatar_pngs/avatar9.png'
import avatar6 from '../assets/avatar_pngs/avatar8.png'
import avatar4 from '../assets/avatar_pngs/avatar7.png'
import avatar2 from '../assets/avatar_pngs/avatar2.png'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Avatars = ()=>{
    return(<Box sx={{ flexGrow: 1 ,height:400}}>
            <Grid container spacing={0} sx={{marginBottom:5}}>
                <Grid item xs>
                    <Circle delay={2000} png={avatar5} color="rgba(199, 201, 177, 0.81)" margin="150px 0px 30px -30px"/>
                    <Circle delay={2200} png={avatar1} color="rgba(142, 228, 243, 0.81)" margin="60px 0px 30px 80px"/>
                </Grid>
                <Grid item xs>
                    <Circle  delay={2400} png={avatar8} color="rgba(123, 73, 143, 0.81)" margin="10px 0px 30px -30px"/>
                    <Circle  delay={2600} png={avatar6} color="rgba(236, 232, 99, 0.9)" margin="150px 0px 30px 70px"/>
                </Grid>
                <Grid item xs>
                    <Circle  delay={2800} png={avatar3} color="rgba(222, 66, 217, 0.9)" margin="50px 0px 30px -30px"/>
                    <Circle  delay={3000}png={avatar2} color="rgba(229, 163, 50, 0.9)" margin="100px 0px 30px 70px"/>
                </Grid>
                <Grid item xs>
                    <Circle  delay={3200}png={avatar5} color="rgba(166, 198, 83, 0.9)" margin="30px 0px 30px -30px"/>
                    <Circle  delay={3400} png={avatar8} color="rgba(85, 168, 235, 0.9)" margin="150px 0px 30px 100px"/>
                </Grid>
            </Grid>
    </Box>)
}

const Circle = ({color,png,margin,delay}) =>{
        const [isVisible, setIsVisible] = React.useState(false); // State for visibility
      
        React.useEffect(() => {
          const timeout = setTimeout(() => setIsVisible(true), delay); // Set timeout to 0 for immediate visibility
          return () => clearTimeout(timeout); // Cleanup function to prevent memory leaks
        }, []);
    return(<Box
        sx={{
          padding: 1,
          borderRadius: '50%',
          margin,
          position: 'absolute',
          background: 'white',
          opacity: isVisible ? 1 : 0, // Control opacity based on isVisible
          transition: 'opacity 0.9s ease-in-out', // Smooth fade-in animation
        }}
      >
        <Box sx={{ borderRadius: '50%', background: color, height: 150, width: 150 }}>
          <Box sx={{ backgroundImage: `url(${png})`, borderRadius: '50%', backgroundSize: 'cover', height: 150, width: 150 }} />
        </Box>
      </Box>)
}

export default Avatars