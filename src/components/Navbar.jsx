import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import NewspaperIcon from '@mui/icons-material/Newspaper';import { Link } from 'react-router-dom';
;

const pages = [
  {title:"About", url: '#ab'},
  {title:"Contact", url: '#cd'},
]

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" sx={{backgroundColor:'#1ee3d9'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NewspaperIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color:'black',fontSize:'2rem' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Accredian
            
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((item, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu} sx={{color:'black', }}>
                  <Link style={{ color: 'inherit', textDecoration: 'none' }} to={item.url}><Typography textAlign="center">{item.title}</Typography></Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <NewspaperIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/login"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Accredian
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
            {pages.map((item, index) => (
              <Typography
                key={index}
                sx={{ my: 2, color: 'white', display: 'block',marginLeft:2, fontWeight:'500', "&:hover":{
                  color:'black'
                } }}
                href="#yourmom"
              >
                <Link to={item.url} style={{ color: 'inherit', textDecoration: 'none' }}>{item.title}</Link>
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
