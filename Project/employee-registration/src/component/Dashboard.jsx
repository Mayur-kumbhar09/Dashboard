import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ListItemIcon } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import image_Two from "../image/skill.png";
import img_three from "../image/dashboard.png";
import img_four from "../image/application.jpg";
import img_five from "../image/job_search.png";
import img_Six from "../image/Summery.png";
import img_Seven from "../image/about.jpg";
import img_Eight from "../image/setting.png";
import { Pages } from "./data";
import UserInfo from "./UserInfo";
// import UserInfo from "./UserInfo";
const drawerWidth = 200;
const drawerData = [
  {
    id: "1",
    txt: "Dashboard",
    icon: <img src={img_three} alt="skill img" height="25px" />,
  },
  {
    id: "2",
    txt: "Test Skill's",
    icon: <img src={image_Two} alt="skill img" height="25px" />,
  },
  {
    id: "3",
    txt: "Application",
    icon: <img src={img_four} alt="skill img" height="25px" />,
  },
  {
    id: "4",
    txt: "Job Search",
    icon: (
      <img
        src={img_five}
        alt="skill img"
        height="25px"
        style={{ backgroundBlendMode: "screen" }}
      />
    ),
  },
  {
    id: "5",
    txt: "Summery",
    icon: <img src={img_Six} alt="skill img" height="25px" />,
  },
  {
    id: "6",
    txt: "About",
    icon: <img src={img_Seven} alt="skill img" height="25px" />,
  },
  {
    id: "7",
    txt: "Setting",
    icon: <img src={img_Eight} alt="skill img" height="25px" />,
  },
];
const Dashboard = () => {
  const [show, setShow] = useState(true);
  const [dataId, setDataId] = useState();
  const handleData = (id) => {
    setShow(false);
    console.log("the data id is: ", id);
    setDataId(id);
  };
  const filteredPages = Pages.filter((item) => item.id === dataId);
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: "#676afb",
          }}
        >
          <Toolbar>
            <AccountCircleIcon style={{ fontSize: "3.2rem" }} />
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
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
          <Box sx={{ overflow: "auto" }}>
            <List>
              {drawerData.map((text, index) => (
                <ListItem
                  key={index}
                  disablePadding
                  onClick={() => handleData(text.id)}
                >
                  <ListItemButton>
                    <ListItemIcon>{text.icon}</ListItemIcon>
                    <ListItemText>{text.txt}</ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1 , marginTop:"20px", padding:"8px 12px"}}>
          <Toolbar />
          {show === true ? (
            <UserInfo />
          ) : (
            filteredPages.map((item) => (
              <div key={item.id}>
                {/* Display your page data here */}
                <Box>{item.page}</Box>
              </div>
            ))
          )}
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
