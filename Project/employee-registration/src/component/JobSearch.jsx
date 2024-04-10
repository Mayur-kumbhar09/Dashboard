import React, { useState } from "react";
import { Grid, Box, styled, Paper, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";
import JobDashbord from "./job/JobDashbord"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const JobSearch = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    reset();
    console.log("Button Triggered...", data);
  };
  const categoryArray = [
    { name: "Job Type +" },
    { name: "Remote/Hybrid +" },
    { name: "Travelling +" },
    { name: "Notice period +" },
    { name: "Location +" },
    { name: "Country +" },
    { name: "Experience level +" },
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const handleCategory = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log("Anchor is clicked: ", anchorEl)
  return (

    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px 10px",
                margin: "auto",
                width: "75%",
              }}
            >
              <TextField
                id="standard-basic"
                label="Search"
                variant="standard"
                {...register("Search")}
                sx={{ width: "65%", fontFamily: "Nova Square", }}
              />
              <Button
                variant="contained"
                sx={{
                  margin: "20px 10px",
                  fontWeight: "600",
                  fontFamily: "Nova Square",
                  borderRadius: "50px",
                }}
                type="submit"
              >
                Search
              </Button>
            </form>
            <Box>
              <ButtonGroup variant="filled" sx={{ margin: "8px 12px", }}>
                {categoryArray.map((data, index) => (
                  <Button key={index} sx={{ fontFamily: "Nova Square" }}
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleCategory}>{data.name}</Button>
                ))}
              </ButtonGroup>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <JobDashbord />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default JobSearch;
