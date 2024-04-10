import React, { useState } from "react";
import {
  Grid,
  Box,
  TextField,
  Button,
  Typography,
  styled,
  Paper,
  InputAdornment,
  Divider,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import KeyIcon from "@mui/icons-material/Key";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import axios from "axios";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  margin: "auto",
  width: "420px",
  boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
  borderRadius: "15px",
  display: "flex",
  zIndex: "111",
  flexDirection: "column",
}));

export const SignIn = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // const Name = "Mayur Hanmant Kumbhar";
    console.log(typeof data);
    axios
      .post("http://localhost:8081/userLogin", data, {
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
    reset();
    navigate("/dashboard");
    console.log(data);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
    borderRadius: "15px",
    p: 4,
  };
  const handleForgetPass = () => {
    navigate("/entercode");
    console.log("Model button is clicked...........");
  };
  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        position="relative"
        className="sign-in"
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
            // animate={{ x: 10 }}
            // transition={{ type: "spring", stiffness: 100 }}
            onSubmit={handleSubmit(onSubmit)}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px 10px",
              margin: "auto",
              width: "75%",
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
              SignIn
            </Typography>
            <TextField
              fullWidth
              sx={{ margin: "12px 7px", position: "relative" }}
              variant="standard"
              type="Text"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="UserName*"
              {...register("UserName", { required: true, maxLength: 20 })}
              required
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <TextField
              fullWidth
              sx={{ margin: "12px 7px" }}
              variant="standard"
              type="password"
              placeholder="Password*"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyIcon />
                  </InputAdornment>
                ),
              }}
              {...register("Password", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <Link
              onClick={handleOpen}
              style={{
                textDecoration: "none",
                color: "#551a8b",
                fontWeight: "600",
                fontFamily: "Nova Square",
              }}
            >
              Forget Password ?
            </Link>
            <Button
              variant="contained"
              sx={{
                width: "85%",
                margin: "20px 10px",
                fontWeight: "600",
                fontFamily: "Nova Square",
                borderRadius: "50px",
              }}
              type="submit"
            >
              Sign In
            </Button>
            <Link
              style={{
                textDecoration: "none",
                fontWeight: "600",
                fontFamily: "Nova Square",
              }}
              to="/signup"
            >
              Don't have an account ?
            </Link>
          </form>
          <Divider sx={{ padding: "0px 24px" }}>OR</Divider>
          <Box>
            <a
              href="http://gmail  .com"
              style={{ textDecoration: "none", color: "#1976d2" }}
            >
              <GoogleIcon
                fontSize="large"
                sx={{ margin: "7px", cursor: "pointer" }}
              />
            </a>
            <a
              href="http://facebook.com"
              style={{ textDecoration: "none", color: "#1976d2" }}
            >
              <FacebookIcon
                fontSize="large"
                sx={{ margin: "7px", cursor: "pointer" }}
              />
            </a>
            <a
              href="http://twitter.com"
              style={{ textDecoration: "none", color: "#1976d2" }}
            >
              <TwitterIcon
                fontSize="large"
                sx={{ margin: "7px", cursor: "pointer" }}
              />
            </a>
          </Box>
        </Item>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Enter your email address ?
          </Typography>
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
          />
          <Button
            variant="contained"
            sx={{
              width: "25%",
              margin: "20px 10px",
              fontWeight: "600",
              fontFamily: "Nova Square",
              borderRadius: "50px",
            }}
            type="button"
            onClick={handleForgetPass}
          >
            Submit
          </Button>
        </Box>
      </Modal>

    </div>
  );
};
