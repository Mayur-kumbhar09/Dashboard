import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  styled,
  Paper,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import countryData from "../../data/country";
import stateData from "../../data/state";
import NextStep from "./NextStep"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  margin: "auto",
  // boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
  // borderRadius: "15px",
  display: "flex",
  zIndex: "111",
  flexDirection: "column",
  width: "100%",
  height: "65%",
  paddingTop: "50px",
  paddingBottom: "190px",
  backgroundBlendMode:"screen !important"
}));

const StepOne = () => {
  // console.log("The Country Data is: ", countryData);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    reset();
    navigate("/dashboard");
    // console.log("Button Triggered...", data);
  };
  const [country, setCountry] = React.useState("");

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };
  const [state, setState] = React.useState("");

  const handleChangeState = (event) => {
    setState(event.target.value);
  };
  const [Mstatus, setMstatus] = React.useState("");

  const handleChangesetMstatus = (event) => {
    setMstatus(event.target.value);
  };
  const [goNext, setGoNext] = useState(true)
  const moveform = () => {
    setGoNext(false)
    console.log("next btn clicked.......", goNext)
  }
  return (
    <Grid
      container
      spacing={2}
      margin="40px 0px 0px 0px"
    >
      <Item>
        {goNext === true ? (<form
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
            width: "100%",
          }}
        >
          <Grid
            sx={{
              borderRadius: "15px",
              border: "1px solid black",
              padding: "12px",
              width: "60%",
            }}
            item
            xs={12}
          >
            <Typography
              variant="h4"
              sx={{
                padding: "20px 10px",
                fontWeight: "600",
                fontFamily: "Nova Square",
              }}
            >
              Please Fill The Below Info:-
            </Typography>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  padding: "12px 10px",
                  fontWeight: "500",
                  fontFamily: "Nova Square",
                }}
              >
                1. Personal Information
              </Typography>
            </Box>
            <Grid item xs={12} className={Item} sx={{ display: "flex" }}>
              <TextField
                fullWidth
                sx={{
                  margin: "7px",
                  fontWeight: "400",
                  fontFamily: "Nova Square",
                }}
                variant="standard"
                size="medium"
                type="Text"
                placeholder="FirstName*"
                {...register("FirstName", { required: true, maxLength: 20 })}
                required
              />
              {errors.exampleRequired && <span>This field is required</span>}
              <TextField
                fullWidth
                sx={{
                  margin: "7px",
                  fontWeight: "400",
                  fontFamily: "Nova Square",
                }}
                variant="standard"
                size="medium"
                type="Text"
                placeholder="LastName*"
                {...register("LastName", { required: true, maxLength: 20 })}
                required
              />
              {errors.exampleRequired && <span>This field is required</span>}
            </Grid>
            <Grid item xs={12} className={Item} sx={{ display: "flex" }}>
              <TextField
                fullWidth
                sx={{
                  margin: "12px 7px",
                  fontWeight: "400",
                  fontFamily: "Nova Square",
                }}
                variant="standard"
                type="email"
                placeholder="Email*"
                {...register("Email", { required: true, maxLength: 20 })}
                required
              />
              {errors.exampleRequired && <span>This field is required</span>}
              <TextField
                fullWidth
                sx={{
                  margin: "12px 7px",
                  fontWeight: "400",
                  fontFamily: "Nova Square",
                }}
                variant="standard"
                type="text"
                placeholder="Job Roal*"
                {...register("Password", { required: true })}
                required
              />
              {errors.exampleRequired && <span>This field is required</span>}
            </Grid>
            <Grid item xs={12} className={Item} sx={{ display: "flex" }}>
              <TextField
                fullWidth
                sx={{
                  margin: "12px 7px",
                  fontWeight: "400",
                  fontFamily: "Nova Square",
                }}
                variant="standard"
                type="date"
                placeholder="Date of birth"
                {...register("dob", { required: true })}
                required
              />
              {errors.exampleRequired && <span>This field is required</span>}

              <FormControl
                fullWidth
                sx={{ minWidth: 120 }}
                size="small"
                variant="standard"
              >
                <InputLabel
                  id="demo-select-small-label"
                  sx={{ fontWeight: "400", fontFamily: "Nova Square" }}
                >
                  Country
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={country}
                  label="country"
                  onChange={handleChangeCountry}
                >
                  {countryData.map((data, index) => (
                    <MenuItem
                      value={data.name}
                      key={index}
                      sx={{ fontWeight: "400", fontFamily: "Nova Square" }}
                    >
                      {data.name} , {data.code}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl
                fullWidth
                sx={{ minWidth: 120 }}
                size="small"
                variant="standard"
              >
                <InputLabel
                  id="demo-select-small-label"
                  sx={{ fontWeight: "400", fontFamily: "Nova Square" }}
                >
                  State
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={state}
                  label="state"
                  onChange={handleChangeState}
                >
                  {stateData.map((data, index) => (
                    <MenuItem
                      value={data.name}
                      key={index}
                      sx={{ fontWeight: "400", fontFamily: "Nova Square" }}
                    >
                      {data.name.en}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} className={Item} sx={{ display: "flex" }}>
              <TextField
                fullWidth
                sx={{
                  margin: "12px 7px",
                  fontWeight: "400",
                  fontFamily: "Nova Square",
                }}
                variant="standard"
                type="number"
                placeholder="PinCode"
                {...register("pincode", { required: true })}
              />
              {errors.exampleRequired && <span>This field is required</span>}
              <FormControl
                fullWidth
                sx={{ minWidth: 120 }}
                size="small"
                variant="standard"
              >
                <InputLabel
                  id="demo-select-small-label"
                  sx={{ fontWeight: "400", fontFamily: "Nova Square" }}
                >
                  Marital Status
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={Mstatus}
                  label="Mstatus"
                  onChange={handleChangesetMstatus}
                >
                  <MenuItem
                    value="single"
                    sx={{ fontWeight: "400", fontFamily: "Nova Square" }}
                  >
                    Single
                  </MenuItem>
                  <MenuItem
                    value="married"
                    sx={{ fontWeight: "400", fontFamily: "Nova Square" }}
                  >
                    Married
                  </MenuItem>
                  <MenuItem
                    value="unMarried"
                    sx={{ fontWeight: "400", fontFamily: "Nova Square" }}
                  >
                    UnMarried
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl
                fullWidth
                sx={{ minWidth: 120, display: "flex", flexDirection: "row" }}
                size="small"
                variant="standard"
              >
                <Typography
                  id="demo-select-small-label"
                  sx={{
                    fontWeight: "400",
                    fontFamily: "Nova Square",
                    fontSize: "24px",
                    margin: "8px 12px",
                  }}
                >
                  Gender
                </Typography>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} className={Item} sx={{ display: "flex" }}>
              <TextField
                fullWidth
                sx={{
                  margin: "12px 7px",
                  fontWeight: "400",
                  fontFamily: "Nova Square",
                }}
                variant="standard"
                type="text"
                placeholder="Address*"
                {...register("address", { required: true })}
              />
              {errors.exampleRequired && <span>This field is required</span>}
            </Grid>

            <Grid item xs={4} className={Item} sx={{ display: "flex" }}>
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
                Save
              </Button>
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  margin: "20px 10px",
                  fontWeight: "600",
                  fontFamily: "Nova Square",
                  borderRadius: "50px",
                }}
                type="button"
                onClick={moveform}
              >
                Next <ArrowForwardIcon fontSize="medium" sx={{ padding: "4px" }} />
              </Button>
            </Grid>
          </Grid>
        </form>) : <NextStep />}
      </Item>
    </Grid>
  );
};

export default StepOne;
