import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import avatar1 from "./Image/avatar1.png"
import avatar2 from "./Image/avatar2.png"
import avatar3 from "./Image/avatar3.png"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: "15px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
}));
const MainBanner = () => {
  return (
    <div>
       <Box sx={{ paddingTop:"180px" }}>
                <Typography variant='h3' sx={{ color: "wheat", fontWeight: "600", fontFamily: "Nova Square" }}>Hello there.</Typography>
                <Typography variant='h3' sx={{ color: "White", fontWeight: "600", fontFamily: "Nova Square" }}>How can we help?</Typography>
                <Box sx={{ width: '90%', margin: "15px 0px 0px 0px", height: "100%" }}>
                    <Stack spacing={2}>
                        <Item sx={{ textAlign: "start", paddingLeft: "24px" }}>
                            <Box sx={{ display: "flex" }}>
                                <Box>
                                    <Typography variant='h5' sx={{ fontWeight: "600", fontFamily: "Nova Square" }}>Recent massage</Typography>
                                    <Box sx={{ textAlign: "start", paddingLeft: "180px", display: "flex", height: "100px" }}>
                                        <AvatarGroup sx={{ width: "40px", padding: "7px 12px" }}>
                                            <Avatar alt="Remy Sharp" src={avatar1} sx={{ width: 56, height: 56 }} />
                                            <Avatar alt="Travis Howard" src={avatar2} sx={{ width: 56, height: 56 }} />
                                            <Avatar alt="Cindy Baker" sx={{ position: "relative", top: "38px", right: "75px", width: 56, height: 56 }} src={avatar3} />
                                        </AvatarGroup>
                                        <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
                                            <Typography variant='body1' sx={{ fontWeight: "600", fontFamily: "Nova Square", fontSize: "1.5em" }}>
                                                No problem. Just chat in below if you...<br />
                                                <Typography variant='body1' sx={{ fontWeight: "400", fontFamily: "Nova Square", fontSize: "1em" }}>
                                                    intercom - 1hr ago
                                                </Typography>
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <ArrowForwardIosIcon sx={{ margin: "auto", color: "blue" }} />
                            </Box>
                        </Item>
                        <Item sx={{ textAlign: "start", padding: "20px 24px" }}>
                            <Box sx={{ display: "flex" }}>
                                <Box>
                                    <Typography variant='h5' sx={{ fontWeight: "600", fontFamily: "Nova Square" }}>Send us a message</Typography>
                                    <Typography variant='body1' sx={{ fontWeight: "400", fontFamily: "Nova Square", fontSize: "1.5em" }}>
                                        We typically replay in a few minute
                                    </Typography>
                                </Box>
                                <ArrowForwardIosIcon sx={{ margin: "auto", color: "blue", marginRight: "120px" }} />
                            </Box>
                        </Item>
                    </Stack>
                </Box>
            </Box>
    </div>
  )
}

export default MainBanner
