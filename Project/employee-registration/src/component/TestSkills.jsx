import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TableContent from "./TableContent";

const pages = ["Low", "Medium", "High"];
const problemSelector = ["Algorithm" , "DSA" , "Database","Shell","Concurency","JavaScript","Pandas", "Array" , "Matrix" , "Pattern"];
const TestSkills = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleChange = (event) => {
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", marginTop: "-12px" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ backgroundColor: "transparent" }}>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" sx={{ color: "#000" }}>
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <FormControl variant="standard" sx={{ minWidth: 95 , my:2 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Range
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  onChange={handleChange}
                  label="Age"
                  name="selectedFruit"
                >
                  {pages.map((page) => (
                    <MenuItem value={page}>{page}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              {problemSelector.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "#000",
                    border: "0.5px solid #ffffff",
                    borderRadius: "15px",
                    margin: "0px 10px",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <TableContent />
    </div>
  );
};

export default TestSkills;
