import React, { useState } from "react";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {Link} from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useFormValidation } from "../hooks/validationHook";
import { isEmpty } from "../utils/helpers";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const initialState = {
    user: "",
    password: ""
  };

  const validationRules = {
    user: [
      {
        condition: (value) => value.trim().length < 4,
        message: "Invalid username or email"
      }
    ],
    password: [
      {
        condition: (value) => value.length ===0,
        message: "Password is required"
      }
    ],
  };

  const { formData, errors, handleChange, handleSubmit } = useFormValidation(
    initialState,
    validationRules
  );

  const handleLogin = (data) => {
    console.log(data);
    // Perform login logic here
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div className="loginBox">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%", borderBottom: "2px solid #00b3a9", textAlign: "center", marginBottom: 2 }}>
            <Typography component="h1" variant="h4">
              Login
            </Typography>
          </Box>
          <Box component="form" onSubmit={(e) => handleSubmit(e, handleLogin)} noValidate sx={{ mt: 1 }}>
            <TextField
              sx={{ mt: 1 }}
              fullWidth
              label="Username or Email"
              id="fullWidth"
              name="user"
              value={formData.user}
              onChange={handleChange}
              required
              error={!!errors.user}
              helperText={errors.user}
              autoComplete="on"
            />
            <TextField
              sx={{ mt: 3 }}
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              error={!!errors.password}
              helperText={errors.password}
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <Box
                    component="span"
                    sx={{
                      cursor: "pointer",
                      pr: 1,
                      color: "primary.main",
                    }}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityOffIcon sx={{color:'#00b3a9'}}/> : <VisibilityIcon sx={{color:'#00b3a9'}}/>}
                  </Box>
                ),
              }}
            />

            <Button
              type="submit"
              fullWidth
              color="secondary"
              variant="contained"
              disabled={isEmpty(formData)}
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#1ee3d9",
                "&:hover": {
                  backgroundColor: "#00b3a9",
                },
              }}
            >
              Login
            </Button>
            <Grid container>
                  {"Don't have an account?"}
              <Grid item sx={{mx:1}}>
                <Link to="/signup" style={{textDecoration:'none'}}>
                   {"Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </Container>
  );
}

export default Login;