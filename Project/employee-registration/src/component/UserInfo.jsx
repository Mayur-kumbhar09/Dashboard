import {
  Grid,
  styled,
  Paper,
  Box,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import image from "../image/welcome_image.png";
import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import image_Two from "../image/skill.png";
import img_three from "../image/quiz.png";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  display: "flex",
  justifyContent: "space-evenly"
}));
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = ["Jan", "Feb", "March", "April", "May", "June"];

const chartSetting = {
  xAxis: [{ label: 'Resume Overview' }],
  width: 500,
  height: 400,
};
const dataset = [
  {
    seoul: 250,
    month: 'Skills',
  },
  {
    seoul: 50,
    month: 'Language',
    width: "120px"
  },
  {
    seoul: 40,
    month: 'Certificate',
  },
  {
    seoul: 150,
    month: 'Experiance',
  },
  {
    seoul: 90,
    month: 'Projects',
  },
];
const valueFormatter = (value) => `${value}mm`;
const UserInfo = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleFileUpload = (event) => {
    console.log(event.target.files[0]);
    handleClick();
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
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
            <Divider orientation="vertical" flexItem sx={{ height: "120px", margin: "auto" }} />
            <Box>
              <Typography
                variant="h5"
                sx={{
                  padding: "8px 28px 8px 12px",
                  fontWeight: "450",
                  fontFamily: "Nova Square",
                }}
              >
                Test Skills
              </Typography>
              <img
                src={image_Two}
                height="75px"
                alt=""
                srcset=""
                style={{ padding: "8px 12px" }}
              />
            </Box>
            <Divider orientation="vertical" flexItem sx={{ height: "120px", margin: "auto" }} />
            <Box>
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
        <Grid item xs={12}>
          <Item>
          
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <Box sx={{ display: "flex" }}>
              <Box>
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
                  xAxis={[{ data: xLabels, scaleType: "band" }]}
                />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "500",
                    fontFamily: "Nova Square",
                    padding: "10px",
                  }}
                >
                  The total score
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    fontWeight: "500",
                    fontFamily: "Nova Square",
                    padding: "10px",
                  }}
                >
                  View Score
                </Button>
              </Box>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ height: "300px", margin: "auto" }} />
            <Box sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              margin: "89px 44px",
            }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "500",
                  fontFamily: "Nova Square",
                  padding: "10px",
                }}
              >
                Upload Resume to <br />
                get the score
              </Typography>
              <InputLabel htmlFor="upload">
                <Button variant="contained" component="span">
                  Upload
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                  message="file Upload Succesfully!"
                  action={action}
                />
              </InputLabel>
              <TextField
                sx={{ display: "none" }}
                type="file"
                id="upload"
                onChange={handleFileUpload}
              />
              <Typography sx={{ display: "none" }}>Score:</Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ height: "300px", margin: "auto" }} />
            <Box sx={{ width: "70vh", display: "flex" }}>
              <BarChart
                sx={{ margin: "auto", width: "100%" }}
                dataset={dataset}
                yAxis={[{
                  scaleType: 'band', dataKey: 'month',
                }]}
                series={[{ dataKey: 'seoul', label: 'Resume Overview', valueFormatter }]}
                layout="horizontal"
                {...chartSetting}
              />
            </Box>
          </Item>
        </Grid>

      </Grid>
    </div>
  );
};

export default UserInfo;
