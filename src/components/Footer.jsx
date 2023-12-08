import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1ee3d9",
        color: "white",
        padding: "1rem 0",
        textAlign: "center",
        
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>
          © {new Date().getFullYear()} Accredian. All rights reserved.
        </Typography>
        <Typography variant="body2" color="inherit" component="div" sx={{"&:hover":{
            color:'black'
        }}}>
          <Link to="/#privacy" style={{ color: "inherit", textDecoration: "none", marginRight: '1rem' }}>
            Privacy Policy
          </Link>
          <Link to="/#terms" style={{ color: "inherit", textDecoration: "none" }}>
            Terms of Service
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
