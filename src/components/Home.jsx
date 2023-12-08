import React, { useEffect } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigateTo = useNavigate()
    useEffect(()=>{
        //if user has not logged in, redirect to login page
        if(!localStorage.getItem('token')){
            navigateTo('/login')
        }
    },[])

    const handleLogout =()=>{
        //clear token on logout
        localStorage.removeItem('token')
        navigateTo('/login')
    }
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "5rem",
        minHeight:'100vh'
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to Our Online Education Platform
      </Typography>
      <Typography variant="body1" paragraph>
        Explore a world of knowledge at your fingertips. Learn, grow, and
        achieve your goals with our diverse range of courses.
      </Typography>
      <Box sx={{ margin: "2rem" }}>
        <Button
          component={Link}
          to="/#courses"
          variant="contained"
          color="primary"
          size="large"
        >
          Browse Courses
        </Button>
      </Box>
      <Typography variant="body1" color="textSecondary" align="center" sx={{fontWeight:500}}>
        Done for the day?{" "}
          <Button onClick={handleLogout}>Logout</Button>
      </Typography>
    </Container>
  );
};

export default HomePage;
