import React, { useState } from "react";
import {  Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";
import JobDashbord from "./job/JobDashbord"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


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
          <Box>
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "0px 10px",
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
          </Box>
          <Box>
            <JobDashbord />
          </Box>
    </div>
  );
};

export default JobSearch;
