import * as React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import SmallNavbar from './smallNavbar';
import MainNavbar from './mainNavbar';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {isSmallScreen || isScrolled ? <SmallNavbar /> : <MainNavbar />}
    </Box>
  );
};

export default Navbar