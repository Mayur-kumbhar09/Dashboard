import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ListItemIcon } from "@mui/material";
import image_Two from "../image/skill.png";
import img_three from "../image/dashboard.png";
// import img_four from "../image/application.jpg";
import img_five from "../image/job_search.png";
import img_Seven from "../image/about.png";
import img_Eight from "../image/setting.png";
import { Pages } from "./data";
import UserInfo from "./UserInfo";
import logo from "../image/lang_logos/student-vector.jpg";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import M_logo from "../image/M_logo.jpg";

const settings = ["Profile", "Account", "Change Password", "Logout"];

const drawerWidth = 260;
const drawerData = [
  {
    id: "1",
    txt: "Dashboard",
    icon: (
      <img
        src={img_three}
        alt="skill img"
        height="25px"
        style={{ background: "transparent" }}
      />
    ),
  },
  {
    id: "2",
    txt: "Test Skill's",
    icon: (
      <img
        src={image_Two}
        alt="skill img"
        height="25px"
        style={{ background: "transparent" }}
      />
    ),
  },
  {
    id: "3",
    txt: "Job Search",
    icon: (
      <img
        src={img_five}
        alt="skill img"
        height="25px"
        style={{ backgroundBlendMode: "color-burn" }}
      />
    ),
  },
  {
    id: "4",
    txt: "About",
    icon: (
      <img
        src={img_Seven}
        alt="skill img"
        height="25px"
        style={{ background: "transparent" }}
      />
    ),
  },
  {
    id: "5",
    txt: "Setting",
    icon: (
      <img
        src={img_Eight}
        alt="skill img"
        height="25px"
        style={{ background: "transparent" }}
      />
    ),
  },
];
const Dashboard = (props) => {
  const [show, setShow] = useState(true);
  const [dataId, setDataId] = useState();
  const handleData = (id) => {
    setShow(false);
    console.log("the data id is: ", id);
    setDataId(id);
  };
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [Pshow, setPshow] = useState(true);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleProfileMenus = () => {
    setPshow(false);
    console.log("false Value ", Pshow);
  };
  const handleProfile = () => {
    setPshow(true);
    console.log("true Value ", Pshow);
  };
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const drawer = (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          padding: "8px",
        }}
      >
        <img src={M_logo} alt="" style={{ width: "120px" }} />
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "550",
              fontFamily: "Nova Square",
              color: "#000",
              fontSize: "1.2em",
              margin: "20px 0px 0px 4px",
            }}
          >
            Mayur
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: "400",
              fontFamily: "Nova Square",
              color: "#000",
              fontSize: "1em",
              margin: "4px 0px 0px 4px",
            }}
          >
            Kumbhar
          </Typography>
        </Box>
      </Box>
      <List
        sx={{
          backgroundColor: "#1c325e",
          color: "#ffffff",
          borderRadius: "20px 20px 0px 0px",
          borderRight: "0px",
          height: "88vh",
          marginTop: "15px",
        }}
      >
        {drawerData.map((text, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => handleData(text.id)}
          >
            <ListItemButton>
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText>
                <Typography
                  sx={{
                    padding: "6px 8px",
                    fontWeight: "400",
                    color: "#ffffff",
                    fontFamily: "Nova Square",
                    fontSize: "1.3em",
                  }}
                  onClick={handleProfile}
                >
                  {text.txt}
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const filteredPages = Pages.filter((item) => item.id === dataId);
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar
            sx={{ justifyContent: "flex-end", mr: 2, display: { sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <img
                    src={logo}
                    alt="logo"
                    height="45px"
                    width="45px"
                    style={{ border: "1px solid black", borderRadius: "10px" }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" onClick={handleProfileMenus}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{
            width: { sm: drawerWidth },
            flexShrink: { sm: 0 },
            height: "100%",
          }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
                height: "calc(100% - 64px)",
                top: 64,
              },
            }}
          >
            <Box sx={{ overflow: "auto", height: "100%" }}>
              <List>
                {drawerData.map((text, index) => (
                  <ListItem
                    key={index}
                    disablePadding
                    onClick={() => handleData(text.id)}
                  >
                    <ListItemButton>
                      <ListItemIcon sx={{ background: "transparent" }}>
                        {text.icon}
                      </ListItemIcon>
                      <ListItemText>
                        <Typography
                          sx={{
                            padding: "6px 8px",
                            fontWeight: "400",
                            color: "GrayText",
                            fontFamily: "Nova Square",
                            fontSize: "1.3em",
                          }}
                          onClick={handleProfile}
                        >
                          {text.txt}
                        </Typography>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
            </Box>
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "none",
                border: "none",
                width: drawerWidth,
              },
              height: "100vh",
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          {/* (show === true ? (
          <UserInfo />) : ( 
            filteredPages.map(function (item){
              return(
                <div key={item.id}>
              {/* Display your page data here */}
          {/* <Box onClick={handleCloseUserMenu}>{item.page}</Box> */}
          {/* </div> */}
          {/* ); } ))) } */}
          {show === true ? (
            <UserInfo />
          ) : (
            filteredPages.map(function (item) {
              return (
                <div key={item.id}>
                  <Box onClick={handleCloseUserMenu}>{item.page}</Box>
                </div>
              );
            })
          )}
        </Box>
      </Box>
    </div>
  );
};
Dashboard.propTypes = {
  window: PropTypes.func,
};
export default Dashboard;
