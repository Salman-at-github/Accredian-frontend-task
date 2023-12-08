import React, { useState } from "react";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useFormValidation } from "../hooks/validationHook";
import { isEmpty } from "../utils/helpers";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationRules = {
    username: [
      {
        condition: (value) => value.trim() === "",
        message: "Username is required",
      },
      {
        condition: (value) => value.trim().length < 4,
        message: 'Username must be at least 4 characters',
      },
    ],
    email: [
      {
        condition: (value) => !/^\S+@\S+\.\S+$/.test(value),
        message: "Invalid email address",
      },
    ],
    password: [
      {
        condition: (value) => value.length < 8,
        message: "Password must be at least 8 characters",
      },
      {
        condition: (value) => !/[A-Z]/.test(value),
        message: "Password must contain at least one uppercase letter",
      },
      {
        condition: (value) => !/[a-z]/.test(value),
        message: "Password must contain at least one lowercase letter",
      },
      {
        condition: (value) => !/\d/.test(value),
        message: "Password must contain at least one digit",
      },
      {
        condition: (value) => !/[!@#$%^&*()-=_+[\]{}|;:'",.<>/?\\]/.test(value),
        message: "Password must contain at least one special character",
      },
    ],
    confirmPassword: [
      {
        condition: (value, formData) => value !== formData.password,
        message: "Passwords do not match",
      },
    ],
  };

  const { formData, errors, handleChange, handleSubmit } = useFormValidation(
    initialState,
    validationRules
  );

  const handleSignup = (data) => {
    if(formData.password === formData.confirmPassword){
      console.log(data);
    }
    
  }

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
          <Box
            sx={{
              width: "100%",
              borderBottom: "2px solid #00b3a9",
              textAlign: "center",
              marginBottom: 2,
            }}
          >
            <Typography component="h1" variant="h4">
              Sign Up
            </Typography>
          </Box>
          <Box
            component="form"
            onSubmit={(e) => handleSubmit(e, handleSignup)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              sx={{ mt: 1 }}
              fullWidth
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              error={!!errors.username}
              helperText={errors.username}
              autoComplete="username"
            />
            <TextField
              sx={{ mt: 1 }}
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              error={!!errors.email}
              helperText={errors.email}
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
              autoComplete="new-password"
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
            <TextField
              sx={{ mt: 3 }}
              fullWidth
              label="Confirm Password"
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              autoComplete="new-password"
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
              Sign Up
            </Button>
            <Grid container>
              {"Already a user?"}
              <Grid item sx={{ mx: 1 }}>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  {"Login here"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </Container>
  );
}

export default Signup;
