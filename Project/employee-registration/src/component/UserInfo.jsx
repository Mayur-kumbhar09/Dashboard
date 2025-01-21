import React, { useState } from "react";
import { Grid, styled, Paper, Box, Typography, Button } from "@mui/material";
import ScienceIcon from "@mui/icons-material/Science";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import TimerIcon from "@mui/icons-material/Timer";
import image from "../image/welcome_image.png";
import { BarChart } from "@mui/x-charts/BarChart";
import img_three from "../image/quiz.png";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import ui from "../image/ListImages/ui_ux.png";
import react from "../image/ListImages/full-stack-developer.png";
import backend from "../image/ListImages/react.png";
import fullStack from "../image/ListImages/backend_developerss.png";
import webDeveloper from "../image/ListImages/web-development.jfif";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Divider from "@mui/material/Divider";
import rewardImg from "../image/17-dark.png";
import Modal from "@mui/material/Modal";
import { keyframes } from "@emotion/react";
import { Link, useNavigate } from "react-router-dom";

const fadeInScaleUp = keyframes`
    '0%': {
      transform: 'scale(0)',
      opacity: 0.1,
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 0.5,
    },
`;

const AnimatedBox = styled(Box)`
  animation: ${fadeInScaleUp} 0.7s ease-in;
`;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 22,
  p: 4,
  borderRadius: "8px",
};
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = ["Jan", "Feb", "March", "April", "May", "June"];

const chartSetting = {
  width: 500,
  height: 400,
};
const dataset = [
  {
    seoul: 250,
    month: "Skills",
  },
  {
    seoul: 50,
    month: "Language",
    width: "120px",
  },
  {
    seoul: 40,
    month: "Certificate",
  },
  {
    seoul: 150,
    month: "Experiance",
  },
  {
    seoul: 90,
    month: "Projects",
  },
];
const lstArr = [
  {
    id: 1,
    Name: "UI/UX Design",
    subTxt: "40+ Courses",
    Icon: (
      <img
        src={ui}
        alt=""
        height="100%"
        width="100%"
        style={{
          margin: "auto",
          padding: "4px",
          border: "2px solid blue",
          borderRadius: "100px",
        }}
      />
    ),
  },
  {
    id: 2,
    Name: "Full Stack Developer",
    subTxt: "80+ Courses",
    Icon: (
      <img
        src={fullStack}
        alt=""
        height="100%"
        width="100%"
        style={{
          margin: "auto",
          padding: "4px",
          border: "2px solid blue",
          borderRadius: "100px",
        }}
      />
    ),
  },
  {
    id: 3,
    Name: "React Developer",
    subTxt: "120+ Courses",
    Icon: (
      <img
        src={react}
        alt=""
        height="100%"
        width="100%"
        style={{
          margin: "auto",
          padding: "4px",
          border: "2px solid blue",
          borderRadius: "100px",
        }}
      />
    ),
  },
  {
    id: 4,
    Name: "Backend Developer",
    subTxt: "50+ Courses",
    Icon: (
      <img
        src={backend}
        alt=""
        height="100%"
        width="100%"
        style={{
          margin: "auto",
          padding: "4px",
          border: "2px solid blue",
          borderRadius: "100px",
        }}
      />
    ),
  },
  {
    id: 5,
    Name: "Web Developer",
    subTxt: "100+ Courses",
    Icon: (
      <img
        src={webDeveloper}
        alt=""
        height="100%"
        width="100%"
        style={{
          margin: "auto",
          padding: "4px",
          border: "2px solid blue",
          borderRadius: "100px",
        }}
      />
    ),
  },
];

const valueFormatter = (value) => `${value}mm`;
const UserInfo = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const Navigate  = useNavigate();
  const goToSkillsSec =()=> Navigate('/testSkills/codeEditor');

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Item>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Box
                sx={{
                  padding: "8px 28px 8px 12px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    padding: "7px 12px",
                    fontWeight: "600",
                    fontFamily: "Nova Square",
                    color: "#7275ff",
                    textAlign: "start",
                  }}
                >
                  Welcome Mayur! 🎉
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    padding: "7px 12px",
                    fontWeight: "400",
                    fontFamily: "Nova Square",
                    textAlign: "start",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Doloremque nulla aspernatur facilis.
                </Typography>
              </Box>
              <img
                src={image}
                height="95px"
                alt=""
                srcset=""
                style={{ padding: "8px 12px" }}
              />
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} md={5}>
          <Item>
            <Box onClick={goToSkillsSec}>
              <Typography
                variant="h5"
                sx={{
                  padding: "8px 28px 8px 12px",
                  fontWeight: "450",
                  fontFamily: "Nova Square",
                }}
              >
                Start Quiz
              </Typography>
              <img
                src={img_three}
                height="75px"
                alt=""
                srcset=""
                style={{ padding: "8px 12px" }}
              />
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                backgroundColor: "#7275ff",
                width: "100%",
                height: "28vh",
                border: "1px solid #7275ff",
                borderRadius: "15px",
                padding: "6px 0px",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  padding: "7px 12px",
                  fontWeight: "600",
                  fontFamily: "Nova Square",
                  color: "#ffffff",
                }}
              >
                My Tasks
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  padding: "7px 12px",
                  fontWeight: "600",
                  fontFamily: "Nova Square",
                  color: "#ffffff",
                }}
              >
                You have <Link to="/userSkills"><u style={{ color: "blue" }}>4 tasks</u></Link> to complete.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                gap: "20px",
                marginTop: "-60px",
                justifyContent: "center",
              }}
            >
              <Item
                xs={6}
                md={4}
                sm={4}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "start",
                  width: "45%",
                  height: "100%",
                  padding: "6px 0px",
                  borderRadius: "15px",
                }}
              >
                <ScienceIcon sx={{ marginLeft: "15px" }} />
                <Typography
                  variant="h3"
                  sx={{
                    padding: "7px 12px",
                    fontWeight: "600",
                    fontFamily: "Nova Square",
                    color: "#000000",
                  }}
                >
                  37
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    padding: "7px 12px",
                    fontWeight: "600",
                    fontFamily: "Nova Square",
                  }}
                >
                  Courses
                </Typography>
              </Item>
              <Item
                xs={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "start",
                  width: "45%",
                  height: "100%",
                  padding: "6px 0px",
                  borderRadius: "15px",
                }}
              >
                <AccountBalanceIcon sx={{ marginLeft: "15px" }} />
                <Typography
                  variant="h3"
                  sx={{
                    padding: "7px 12px",
                    fontWeight: "600",
                    fontFamily: "Nova Square",
                    color: "#000000",
                  }}
                >
                  6
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    padding: "7px 12px",
                    fontWeight: "600",
                    fontFamily: "Nova Square",
                  }}
                >
                  Certificates
                </Typography>
              </Item>
              <Item
                xs={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "start",
                  width: "45%",
                  height: "100%",
                  padding: "6px 0px",
                  borderRadius: "15px",
                }}
              >
                <ScoreboardIcon sx={{ marginLeft: "15px" }} />
                <Typography
                  variant="h3"
                  sx={{
                    padding: "7px 12px",
                    fontWeight: "600",
                    fontFamily: "Nova Square",
                    color: "#000000",
                  }}
                >
                  4,7
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    padding: "7px 12px",
                    fontWeight: "600",
                    fontFamily: "Nova Square",
                  }}
                >
                  Avg. Score
                </Typography>
              </Item>
              <Item
                xs={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "start",
                  width: "45%",
                  height: "100%",
                  padding: "6px 0px",
                  borderRadius: "15px",
                }}
              >
                <TimerIcon sx={{ marginLeft: "15px" }} />
                <Typography
                  variant="h3"
                  sx={{
                    padding: "7px 12px",
                    fontWeight: "600",
                    fontFamily: "Nova Square",
                    color: "#000000",
                  }}
                >
                  822
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    padding: "7px 12px",
                    fontWeight: "600",
                    fontFamily: "Nova Square",
                  }}
                >
                  Hours Learned
                </Typography>
              </Item>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} md={8}>
          <Item sx={{ margin: "7px", display: "flex" }}>
            <BarChart
              width={500}
              height={300}
              series={[
                {
                  data: pData,
                  label: "2022",
                  id: "pvId",
                  stack: "total",
                },
                {
                  data: uData,
                  label: "2023",
                  id: "uvId",
                  stack: "total",
                },
              ]}
              xAxis={[
                { data: xLabels, scaleType: "band", label: "github record" },
              ]}
            />
          </Item>
          <Item>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                backgroundColor: "#1c325e",
                padding: "10px",
                border: "1px solid black",
                borderRadius: "10px",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ textAlign: "start" }}>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontFamily: "Nova Square",
                      color: "#ffffff",
                      fontSize: "2em",
                      lineHeight: "40px",
                    }}
                  >
                    You have got{" "}
                    <span style={{ textDecoration: "underline", color: "red" }}>
                      2300 bonus
                    </span>{" "}
                    points.
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontFamily: "Nova Square",
                      color: "#ffffff",
                      fontSize: "2em",
                    }}
                  >
                    Feel free to use them in your lessons
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    margin: "12px",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#f8285a",
                      margin: "8px 12px",
                      fontWeight: "600",
                      fontFamily: "Nova Square",
                      color: "#ffffff",
                      fontSize: "1em",
                    }}
                    onClick={handleOpenModal}
                  >
                    Get Reward
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      margin: "8px 12px",
                      fontWeight: "600",
                      fontFamily: "Nova Square",
                      color: "#ffffff",
                      fontSize: "1em",
                    }}
                  >
                    How to
                  </Button>
                </Box>
              </Box>
              <Box>
                <img
                  src={rewardImg}
                  alt=""
                  class=""
                  height="160px"
                  width="160px"
                />
              </Box>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item sx={{ margin: "7px" }}>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "8px 12px",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "400",
                  fontFamily: "Nova Square",
                  color: "#000000",
                }}
              >
                Recommended for you
              </Typography>
              <Link to="/courseMenu" sx={{textDecoration:"none"}}>
                <Button variant="outlined" sx={{ fontSize: ".75em" }}>
                  All Courses
                </Button>
              </Link>
            </Box>
            <Box>
              {lstArr.map((data, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  {/* {console.log(`${data.id}`)}  */}
                  {/* <h4>{data.Name}</h4> */}
                  <List>
                    <ListItem
                      secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                          <ArrowForwardIosIcon />
                        </IconButton>
                      }
                      sx={{ height: "90px" }}
                    >
                      <ListItemAvatar>
                        <Avatar
                          sx={{
                            height: "65px",
                            width: "65px",
                            margin: "12px",
                            alignItems: "center",
                          }}
                        >
                          {data.Icon}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText>
                        {data.Name}
                        <Typography
                          sx={{
                            fontWeight: "300",
                            fontFamily: "Nova Square",
                            color: "#000000",
                            fontSize: "0.8em",
                          }}
                        >
                          {data.subTxt}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  </List>
                  {/* <Divider sx={{borderStyle:'dashed',width:"85%", margin:"auto"}} /> */}
                  {index < lstArr.length - 1 && (
                    <Divider
                      sx={{
                        borderStyle: "dashed",
                        width: "85%",
                        margin: "auto",
                      }}
                    />
                  )}
                </Box>
              ))}
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} md={8}>
          <Item sx={{ margin: "7px", display: "flex" }}>
            <BarChart
              sx={{ margin: "auto" }}
              width={500}
              height={300}
              dataset={dataset}
              yAxis={[
                {
                  scaleType: "band",
                  dataKey: "month",
                },
              ]}
              series={[
                { dataKey: "seoul", label: "Resume Overview", valueFormatter },
              ]}
              layout="horizontal"
              {...chartSetting}
            />
          </Item>
        </Grid>
      </Grid>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AnimatedBox sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h2"
            component="h2"
            sx={{
              fontFamily: "Nova Square",
              fontWeight: "500",
              fontSize: "2.2rem",
            }}
          >
            Congratulation's 🎉🎊✨
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            You have got 2300 bonus points
          </Typography>
        </AnimatedBox>
      </Modal>
    </>
  );
};

export default UserInfo;
