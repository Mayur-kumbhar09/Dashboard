import React from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  styled,
  Paper,
} from "@mui/material";
import { useForm } from "react-hook-form";
import {  useNavigate } from "react-router-dom";
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
}));
const EnterPrivacyCode = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    reset();
    navigate('/');
    console.log("Button Triggered...", data);
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
            <Typography
              variant="h4"
              sx={{
                padding: "20px 10px",
                fontWeight: "600",
                fontFamily: "Nova Square",
              }}
            >
              Enter code
            </Typography>
            <TextField
              fullWidth
              sx={{ margin: "12px 7px", position: "relative" }}
              variant="standard"
              type="Text"
              placeholder="Pass Code*"
              {...register("Pass Code", { required: true, maxLength: 20 })}
              required
            />
            {errors.exampleRequired && <span>This field is required</span>}
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
              Submit
            </Button>
          </form>
        </Item>
      </Grid>
    </div>
  );
};

export default EnterPrivacyCode;
