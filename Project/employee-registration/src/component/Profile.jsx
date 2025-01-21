import React from 'react'
import {
  Box,
  Grid, Typography,
  styled,
  Paper,
  Button
} from '@mui/material'
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import user1 from "../image/user_image2.png"
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import ProgressBar from './ProgressBar';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import {
  LinePlot,
  MarkPlot,
  lineElementClasses,
  markElementClasses,
} from '@mui/x-charts/LineChart';

const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));





const Profile = () => {
  const [month, setMonth] = React.useState('');
  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  return (
    <Box sx={{ paddingLeft: "24px 1px" }}>
      <Typography variant='h5' sx={{ fontFamily: "Nova Square", fontWeight: "650", margin: "4px 8px" }}>Good Morning Mayur!</Typography>
      <Typography variant='subtitle1' sx={{ fontFamily: "Nova Square", fontWeight: "550", margin: "4px 8px" }}>Let's see how are you doing...</Typography>
      <Grid container spacing={5} >
        <Grid item xs={12} md={8}>
          <Item sx={{
            fontWeight: "300", fontFamily: "Nova Square", color: "#ffffff", fontSize: "0.8em",
            display: "flex", justifyContent: "space-evenly", alignItems: "center", background: "#1976d2",
            borderRadius: "15px", height: "250px", margin: "24px 0px"
          }}>
            <img src={user1} alt="user" srcset="" style={{ height: "75%", padding: "8px 12px" }} />
            <Box sx={{ textAlign: "start", padding: "8px 12px", height: "auto", width: "auto" }}>
              <Typography variant='h4' sx={{ fontFamily: "Nova Square", fontWeight: "650", margin: "10px 0px" }}>Mayur Kumbhar</Typography>
              <Typography variant='body1' sx={{ fontFamily: "Nova Square", fontWeight: "500", margin: "10px 0px" }}>Full Stack Developer</Typography>
              <Typography variant='body2' sx={{ fontFamily: "Nova Square", fontWeight: "450", margin: "10px 0px" }}><CallIcon /> +91 7522972286</Typography>
              <Typography variant='body2' sx={{ fontFamily: "Nova Square", fontWeight: "450", margin: "10px 0px" }}><LocationOnIcon /> Satara, Maharashtra</Typography>
            </Box>
            <Box sx={{
              textAlign: "start", padding: "10px 12px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius: "15px",
              backgroundColor: "#6daeed", width: "auto", display: "flex", flexDirection: "column"
            }}>
              <Typography variant='body1' sx={{ fontFamily: "Nova Square", fontWeight: "500", margin: "6px 0px", }}>Start were you Left 👉</Typography>
              <Typography variant='caption' sx={{ fontFamily: "Nova Square", fontWeight: "400", margin: "6px 0px" }}>Complete the two hrs<br /> java Course</Typography>
              <Box sx={{ width: "220px", display: "flex", justifyContent: "space-evenly", margin: "10px 0px" }}>
                <AvatarGroup sx={{ justifyContent: "start", padding: "0px", margin: "0px", }}>
                  <Avatar sx={{ width: 22, height: 22 }} alt="" src="/static/images/avatar/1.jpg" />
                  <Avatar sx={{ width: 22, height: 22 }} alt="" src="/static/images/avatar/2.jpg" />
                  <Avatar sx={{ width: 22, height: 22 }} alt="" src="/static/images/avatar/3.jpg" />
                  <Avatar sx={{ width: 22, height: 22 }} alt="" src="/static/images/avatar/4.jpg" />
                  <Avatar sx={{ width: 22, height: 22 }} alt="" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
                <Typography variant='subtitle2' sx={{ fontFamily: "Nova Square", fontWeight: "400", margin: "auto" }}>+7 members</Typography>
              </Box>
              <Button variant='contained' sx={{ margin: "8px 0px", color: "#ffffff", borderRadius: "15px", fontFamily: "Nova Square", textAlign: "center", fontWeight: "400", fontSize: "0.8em" }}>Jump to the project</Button>
            </Box>
          </Item>
          {/* <Item xs={12} sx={{ display: "flex", justifyContent: "space-between",margin:"10px 0px" }}> */}
          <Box sx={{ display: "flex", justifyContent: "space-between", margin: "18px 0px" }}>
            <Item xs={4} sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ padding: "0px 14px", textAlign: "start" }}>
                <Typography variant='body1' sx={{ fontFamily: "Nova Square", fontWeight: "600", margin: "6px 0px", fontSize: "1.5em" }}>Active goals </Typography>
                <Typography sx={{ fontFamily: "Nova Square", fontWeight: "600", margin: "6px 0px", fontSize: "1.75em" }}>4</Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <ArrowForwardIosIcon fontSize='large' sx={{ margin: "auto" }} />

            </Item>
            <Item xs={4} sx={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
              <Box sx={{ padding: "0px 14px", textAlign: "start" }}>
                <Typography variant='body1' sx={{ fontFamily: "Nova Square", fontWeight: "600", margin: "6px 0px", fontSize: "1.5em" }}>Progress</Typography>
                <Typography sx={{ fontFamily: "Nova Square", fontWeight: "600", margin: "6px 0px", fontSize: "1.75em" }}>45%</Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <ArrowForwardIosIcon fontSize='large' sx={{ margin: "auto" }} />
            </Item>
            <Item xs={4} sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ padding: "0px 14px", textAlign: "start" }}>
                <Typography variant='body1' sx={{ fontFamily: "Nova Square", fontWeight: "600", margin: "6px 0px", fontSize: "1.5em" }}>Completed Task </Typography>
                <Typography sx={{ fontFamily: "Nova Square", fontWeight: "600", margin: "6px 0px", fontSize: "1.75em" }}>6</Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <ArrowForwardIosIcon fontSize='large' sx={{ margin: "auto" }} />
            </Item>
            <Item xs={4} sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ padding: "0px 14px", textAlign: "start" }}>
                <Typography variant='body1' sx={{ fontFamily: "Nova Square", fontWeight: "600", margin: "6px 0px", fontSize: "1.5em" }}>Due Tasks </Typography>
                <Typography sx={{ fontFamily: "Nova Square", fontWeight: "600", margin: "6px 0px", fontSize: "1.5em" }}>2</Typography>
              </Box>
              <Divider orientation="vertical" flexItem height="100%" />
              <ArrowForwardIosIcon fontSize='large' sx={{ margin: "auto" }} />
            </Item>
          </Box>
          <Box sx={{ textAlign: "start", padding: "24px 0px" }}>
            <Typography variant='h4'
              sx={{ fontFamily: "Nova Square", fontWeight: "600", margin: "6px 0px", fontSize: "1.5em" }}>Complete Duo Tasks</Typography>

            <Item sx={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius: "15px", margin: "24px 0px",
              display: "flex", justifyContent: "space-between", padding: "10px 18px"
            }}>
              <Box sx={{
                textAlign: "start", display: "flex", flexDirection: "column", padding: "10px 12px",

              }}>
                <Typography variant='h6' sx={{ fontFamily: "Nova Square", fontWeight: "550", margin: "6px 0px", }}>1. Start the two hours design sprint</Typography>

                <Box sx={{ width: "220px", display: "flex", justifyContent: "space-evenly" }}>
                  <AvatarGroup sx={{ justifyContent: "start", padding: "0px", margin: "0px", }}>
                    <Avatar sx={{ width: 22, height: 22 }} alt="" src="/static/images/avatar/1.jpg" />
                    <Avatar sx={{ width: 22, height: 22 }} alt="" src="/static/images/avatar/2.jpg" />
                    <Avatar sx={{ width: 22, height: 22 }} alt="" src="/static/images/avatar/3.jpg" />
                    <Avatar sx={{ width: 22, height: 22 }} alt="" src="/static/images/avatar/4.jpg" />
                    <Avatar sx={{ width: 22, height: 22 }} alt="" src="/static/images/avatar/5.jpg" />
                  </AvatarGroup>
                  <Typography variant='subtitle2' sx={{ fontFamily: "Nova Square", fontWeight: "400", margin: "auto" }}>+7 members</Typography>
                </Box>
              </Box>
              <ProgressBar strokeWidth={10} percentage={43} />
            </Item>
            <Item sx={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius: "15px", margin: "24px 0px",
              display: "flex", justifyContent: "space-between", padding: "10px 18px"
            }}>
              <Box sx={{
                textAlign: "start", display: "flex", flexDirection: "column", padding: "10px 12px",
              }}>
                <Typography variant='h6' sx={{ fontFamily: "Nova Square", fontWeight: "550", margin: "6px 0px", }}>2. Complete The Documentation Of Travo App</Typography>

                <Box sx={{ width: "220px", display: "flex", justifyContent: "space-evenly" }}>
                  <AvatarGroup sx={{ justifyContent: "start", padding: "0px", margin: "0px", }}>
                    <Avatar sx={{ width: 22, height: 22 }} alt="" src="/static/images/avatar/1.jpg" />
                    <Avatar sx={{ width: 22, height: 22 }} alt="" src="/static/images/avatar/2.jpg" />
                    <Avatar sx={{ width: 22, height: 22 }} alt="" src="/static/images/avatar/3.jpg" />
                    <Avatar sx={{ width: 22, height: 22 }} alt="" src="/static/images/avatar/4.jpg" />
                    <Avatar sx={{ width: 22, height: 22 }} alt="" src="/static/images/avatar/5.jpg" />
                  </AvatarGroup>
                  <Typography variant='subtitle2' sx={{ fontFamily: "Nova Square", fontWeight: "400", margin: "auto" }}>+7 members</Typography>
                </Box>
              </Box>
              <ProgressBar strokeWidth={10} percentage={76} />
            </Item>
            <Item sx={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius: "15px", margin: "24px 0px",
              display: "flex", justifyContent: "space-between", padding: "10px 18px"
            }}>
              <Box sx={{
                textAlign: "start", display: "flex", flexDirection: "column", padding: "10px 12px",

              }}>
                <Typography variant='h6' sx={{ fontFamily: "Nova Square", fontWeight: "550", margin: "6px 0px", }}>3. Do A/B Testing on beanch team members</Typography>

                <Box sx={{ width: "220px", display: "flex", justifyContent: "space-evenly" }}>
                  <AvatarGroup sx={{ justifyContent: "start", padding: "0px", margin: "0px", }}>
                    <Avatar sx={{ width: 22, height: 22 }} alt="" src="/static/images/avatar/1.jpg" />
                    <Avatar sx={{ width: 22, height: 22 }} alt="" src="/static/images/avatar/2.jpg" />
                    <Avatar sx={{ width: 22, height: 22 }} alt="" src="/static/images/avatar/3.jpg" />
                    <Avatar sx={{ width: 22, height: 22 }} alt="" src="/static/images/avatar/4.jpg" />
                    <Avatar sx={{ width: 22, height: 22 }} alt="" src="/static/images/avatar/5.jpg" />
                  </AvatarGroup>
                  <Typography variant='subtitle2' sx={{ fontFamily: "Nova Square", fontWeight: "400", margin: "auto" }}>+7 members</Typography>
                </Box>
              </Box>
              <ProgressBar strokeWidth={10} percentage={32} />
            </Item>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>

          <Item>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "12px" }}>
                <Box sx={{ display: "flex", }}>
                  <Typography variant='h6' sx={{ fontFamily: "Nova Square", fontWeight: "400", margin: "auto" }}>Statstics</Typography>
                </Box>
                <FormControl sx={{ m: 1, minWidth: 120, borderRadius: "25px" }} size="small">
                  <Select
                  defaultValue="jan"
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={month}
                    onChange={handleChange}
                  >
                    <MenuItem value="jan" selected>jan</MenuItem>
                    <MenuItem value="march">march</MenuItem>
                    <MenuItem value="feb">feb</MenuItem>
                    <MenuItem value="April">April</MenuItem>
                    <MenuItem value="may">may</MenuItem>
                    <MenuItem value="june">june</MenuItem>
                    <MenuItem value="july">july</MenuItem>
                    <MenuItem value="aug">aug</MenuItem>
                    <MenuItem value="sept">sept</MenuItem>
                    <MenuItem value="oct">oct</MenuItem>
                    <MenuItem value="nov">nov</MenuItem>
                    <MenuItem value="dec">dec</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Stack spacing={2}>
                <Item sx={{ borderRadius: "25px" }}>

                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", margin: "auto", textAlign: "start", padding: "0px 12px" }}>
                      <Typography variant='h6' sx={{ fontFamily: "Nova Square", fontWeight: "400", }}>Performance</Typography>
                      <Typography variant='subtitle2' sx={{ fontFamily: "Nova Square", fontWeight: "400" }}>Based on work</Typography>
                    </Box>
                    <ChartContainer
                      width={350}
                      height={150}
                      series={[{ type: 'line', data: pData }]}
                      xAxis={[{ scaleType: 'point', data: xLabels }]}
                      sx={{
                        [`& .${lineElementClasses.root}`]: {
                          stroke: '#000000',
                          strokeWidth: 2,
                        },
                        [`& .${markElementClasses.root}`]: {
                          stroke: '#8884d8',
                          scale: '0.6',
                          fill: '#fff',
                          strokeWidth: 2,
                        },
                      }}
                      disableAxisListener
                    >
                      <LinePlot />
                      <MarkPlot />
                    </ChartContainer>
                  </Box>
                </Item>
                <Item>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", margin: "auto", textAlign: "start", padding: "0px 12px" }}>
                      <Typography variant='h6' sx={{ fontFamily: "Nova Square", fontWeight: "400", }}>Success</Typography>
                      <Typography variant='subtitle2' sx={{ fontFamily: "Nova Square", fontWeight: "400" }}>Based on Project</Typography>
                    </Box>
                    <ChartContainer
                      width={350}
                      height={150}
                      series={[{ type: 'line', data: pData }]}
                      xAxis={[{ scaleType: 'point', data: xLabels }]}
                      sx={{
                        [`& .${lineElementClasses.root}`]: {
                          stroke: '#8884d8',
                          strokeWidth: 2,
                        },
                        [`& .${markElementClasses.root}`]: {
                          stroke: '#8884d8',
                          scale: '0.6',
                          fill: '#fff',
                          strokeWidth: 2,
                        },
                      }}
                      disableAxisListener
                    >
                      <LinePlot />
                      <MarkPlot />
                    </ChartContainer>
                  </Box>
                </Item>
                <Item>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", margin: "auto", textAlign: "start", padding: "0px 12px" }}>
                      <Typography variant='h6' sx={{ fontFamily: "Nova Square", fontWeight: "400", }}>Innovation</Typography>
                      <Typography variant='subtitle2' sx={{ fontFamily: "Nova Square", fontWeight: "400" }}>worked Ideas</Typography>
                    </Box>
                    <ChartContainer
                      width={350}
                      height={150}
                      series={[{ type: 'line', data: pData }]}
                      xAxis={[{ scaleType: 'point', data: xLabels }]}
                      sx={{
                        [`& .${lineElementClasses.root}`]: {
                          stroke: 'green',
                          strokeWidth: 2,
                        },
                        [`& .${markElementClasses.root}`]: {
                          stroke: '#8884d8',
                          scale: '0.6',
                          fill: '#fff',
                          strokeWidth: 2,
                        },
                      }}
                      disableAxisListener
                    >
                      <LinePlot />
                      <MarkPlot />
                    </ChartContainer>
                  </Box>
                </Item>
              </Stack>
            </Box>

          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Profile
