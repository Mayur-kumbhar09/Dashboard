import React from 'react'
import { Grid, Box, styled, Paper, Button, Typography } from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import jobArray from "./jobArray"
import avatar1 from "../../image/avatar/avatar1.jpg"
// import avatar2 from "../../image/avatar/avatar2.jpg"
import avatar3 from "../../image/avatar/avatar3.jpg"
import avatar4 from "../../image/avatar/avatar4.jpg"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import cardArray from './cardArray';
import AdBanner from './AdBanner';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: "10px 8px",
    // backgroundColor:"brown"
}));
console.log("Job Array is: ", jobArray)
const JobDashbord = () => {

    return (
        <Box sx={{ display: "flex" }}>
            <Grid item xs={7}>
                {jobArray.map((data, index) =>
                (
                    <Item key={index} >
                        <Box sx={{ width: "100%", display: "flex" }}>
                            <Box sx={{ display: "flex", flexDirection: "column", width: "240px", margin: "10px 40px" }}>
                                {/* <img src={data.companyLogo} alt="" height="145px" width="160px" style={{ margin: "auto", padding: "4px" }} /> */}
                                {data.companyLogo}
                            </Box>
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    margin: "10px 40px",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "flex-start"
                                }}>
                                <Typography variant='h4'
                                    sx={{ fontWeight: "650", fontFamily: "Nova Square", margin: "6px 12px" }}>
                                    {data.companyName}
                                </Typography>
                                <Typography variant='subtitle2' sx={{ fontWeight: "350", fontFamily: "Nova Square", margin: "6px 12px" }}>
                                    Date Posted: {data.dop}
                                </Typography>
                                <AvatarGroup max={5} sx={{ width: "100px" }}>
                                    <Avatar sx={{ width: "25px", height: "25px" }} alt="Remy Sharp" src={avatar1} />
                                    <Avatar sx={{ width: "25px", height: "25px" }} alt="Travis Howard" src={avatar3} />
                                    <Avatar sx={{ width: "25px", height: "25px" }} alt="Cindy Baker" src={avatar4} />
                                    <Avatar sx={{ padding: "2px", width: "25px", height: "25px" }} alt="Agnes Walker">+1</Avatar>
                                </AvatarGroup>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        width: "85px",
                                        fontWeight: "400",
                                        fontFamily: "Nova Square",
                                        // borderRadius: "50px",
                                        border: "none",
                                        height: "30px"
                                    }}
                                    type="button"
                                >
                                    Apply
                                    <ExitToAppIcon fontSize='small' sx={{ margin: "6px 5px" }} />
                                </Button>
                            </Box>
                        </Box>
                    </Item>
                )
                )
                }
            </Grid>
            <Item>
                {cardArray.map((c_data, index) => (
                    <Card sx={{ maxWidth: 345, display: "flex", flexDirection: "column", margin:"10px 0px" }} key={index}>
                        <CardMedia
                            sx={{ height: 140 }}
                            title="green iguana"
                        >{c_data.Cimage}</CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                {c_data.cName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {c_data.cInfo}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Follow</Button>
                            <Button size="small">SubScribe</Button>
                        </CardActions>
                    </Card>
                ))}

            </Item>
            <Item>
                <AdBanner />
            </Item>
        </Box>
    )
}

export default JobDashbord
