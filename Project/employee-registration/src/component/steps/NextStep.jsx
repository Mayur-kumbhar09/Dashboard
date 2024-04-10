import React from 'react'
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
} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import countryData from "../../data/country";
import stateData from "../../data/state";
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
  height: "100%",
  paddingTop: "50px",
  paddingBottom: "190px"
}));
const NextStep = () => {

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
  const [category, setCategory] = React.useState("");

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };
  const [country, setCountry] = React.useState("");

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };
  const [state, setState] = React.useState("");

  const handleChangeState = (event) => {
    setState(event.target.value);
  };
  return (
    <div>
      <Grid
        container
        spacing={2}

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
                  2. Education Information
                </Typography>
              </Box>
              <Grid item xs={12} className={Item} sx={{ display: "flex" }}>
                <FormControl
                  sx={{ width: "620px", minWidth: 95 }}
                  size="small"
                  variant="standard"
                >
                  <InputLabel
                    id="demo-select-small-label"
                    sx={{ fontWeight: "400", fontFamily: "Nova Square" }}
                  >
                    Choose
                  </InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={category}
                    label="Choose"
                    onChange={handleChangeCategory}
                  >
                    <MenuItem value="10th">10th</MenuItem>
                    <MenuItem value="12th">12th</MenuItem>
                    <MenuItem value="Graduation">Graduation</MenuItem>
                    <MenuItem value="Post Graduation">Post Graduation</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  sx={{
                    margin: "12px",
                    fontWeight: "400",
                    fontFamily: "Nova Square",
                  }}
                  variant="standard"
                  size="medium"
                  type="Text"
                  placeholder="Collage Name*"
                  {...register("collageName", { required: true, maxLength: 20 })}
                  required
                />
                {errors.exampleRequired && <span>This field is required</span>}
                <TextField
                  fullWidth
                  sx={{
                    margin: "12px",
                    fontWeight: "400",
                    fontFamily: "Nova Square",
                  }}
                  variant="standard"
                  size="medium"
                  type="Text"
                  placeholder="Percentage*"
                  {...register("percentage", { required: true, maxLength: 20 })}
                  required
                />
                {errors.exampleRequired && <span>This field is required</span>}
              </Grid>
              <Grid item xs={12} className={Item} sx={{ display: "flex" }}>
                <TextField
                  fullWidth
                  sx={{
                    margin: "12px",
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
                    margin: "12px",
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
                <FormControl
                  fullWidth
                  sx={{
                    minWidth: 120,
                    margin: "12px",
                  }}
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
                  sx={{
                    minWidth: 120,
                    margin: "12px",
                  }}
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
                <TextField
                  fullWidth
                  sx={{
                    margin: "12px",
                    fontWeight: "400",
                    fontFamily: "Nova Square",
                  }}
                  variant="standard"
                  type="date"
                  placeholder="Passout year"
                  {...register("passoutYear", { required: true })}
                  required
                />
                {errors.exampleRequired && <span>This field is required</span>}
              </Grid>
              <Grid item xs={12} className={Item} sx={{ display: "flex" }}>
                <TextField
                  fullWidth
                  sx={{
                    margin: "12px",
                    fontWeight: "400",
                    fontFamily: "Nova Square",
                  }}
                  variant="standard"
                  type="number"
                  placeholder="PinCode"
                  {...register("pincode", { required: true })}
                />
                {errors.exampleRequired && <span>This field is required</span>}

              </Grid>
              <Grid item xs={12} className={Item} sx={{ display: "flex" }}>
                <TextField
                  fullWidth
                  sx={{
                    margin: "12px",
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
                    width: "85%",
                    margin: "20px 10px",
                    fontWeight: "600",
                    fontFamily: "Nova Square",
                    borderRadius: "50px",
                  }}
                  type="button"
                >
                  Next <ArrowForwardIcon fontSize="large" sx={{ padding: "4px" }} />
                </Button>
              </Grid>
            </Grid>
          </form>
        </Item>
      </Grid>
    </div>
  )
}

export default NextStep