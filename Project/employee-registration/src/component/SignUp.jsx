import {
  Grid,
  TextField,
  Button,
  Typography,
  styled,
  Paper,
  InputAdornment,
} from "@mui/material";
import axios from "axios";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import KeyIcon from "@mui/icons-material/Key";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CallIcon from "@mui/icons-material/Call";
import PersonIcon from "@mui/icons-material/Person";
import React, {  useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  marginTop: "120px",
  width: "420px",
  boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
  borderRadius: "50px",
  display: "flex",
  zIndex: "111",
}));
const SignUp = () => {
  const [show, setShow] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post("http://localhost:8081/userRegistration", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        console.log("Response is: ", response);
      })
      .then((err) => {
        console.log(err);
      });
    navigate("/");
    reset();
    console.log(data);
  };
  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          background:
            "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
          overflow: "hidden",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundPositionX: "center",
          backgroundSize: "cover",
        }}
      >
        <Item>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px 10px",
              margin:"auto"
            }}
          >
            <LockOpenIcon fontSize="large"></LockOpenIcon>
            <Typography
              variant="h4"
              sx={{
                padding: "20px 10px",
                fontWeight: "600",
                fontFamily: "Nova Square",
              }}
            >
              SignUp
            </Typography>
            <TextField
              fullWidth
              sx={{ margin: "12px 7px" }}
              variant="standard"
              type="Text"
              placeholder="UserName"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              {...register("UserName", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <TextField
              fullWidth
              sx={{ margin: "12px 7px" }}
              variant="standard"
              type="Text"
              placeholder="FirstName"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              {...register("FirstName", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <TextField
              fullWidth
              sx={{ margin: "12px 7px" }}
              variant="standard"
              type="Text"
              placeholder="LastName"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              {...register("LastName", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <TextField
              fullWidth
              sx={{ margin: "12px 7px" }}
              variant="standard"
              type="email"
              placeholder="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              {...register("email", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <TextField
              fullWidth
              sx={{ margin: "12px 7px" }}
              variant="standard"
              type="tel"
              placeholder="PhoneNumber"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CallIcon />
                  </InputAdornment>
                ),
              }}
              {...register("PhoneNumber", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <TextField
              fullWidth
              sx={{ margin: "12px 7px" }}
              variant="standard"
              type="password"
              placeholder="Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    {show === true ? (
                      <VisibilityIcon onClick={() => setShow(false)} />
                    ) : (
                      <VisibilityOffIcon onClick={() => setShow(true)} />
                    )}
                  </InputAdornment>
                ),
              }}
              {...register("Password", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <TextField
              fullWidth
              sx={{ margin: "12px 7px" }}
              variant="standard"
              type="password"
              placeholder="Confirm Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    {showPassword === true ? (
                      <VisibilityIcon onClick={() => setShowPassword(false)} />
                    ) : (
                      <VisibilityOffIcon
                        onClick={() => setShowPassword(true)}
                      />
                    )}
                  </InputAdornment>
                ),
              }}
              {...register("C_password", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <Button
              variant="contained"
              sx={{
                width: "100%",
                margin: "20px 10px",
                fontWeight: "600",
                fontFamily: "Nova Square",
              }}
              type="submit"
            >
              Sign Up
            </Button>
            <Link
              style={{
                textDecoration: "none",
                fontWeight: "600",
                fontFamily: "Nova Square",
              }}
              to="/"
            >
              Already have an account ?
            </Link>
          </form>
        </Item>
      </Grid>
    </div>
  );
};

export default SignUp;
