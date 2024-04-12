import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NavBar from './NavBar';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CampaignIcon from '@mui/icons-material/Campaign';
import MainBanner from './MainBanner';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: "15px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
}));

const Home = () => {
    const navigate = useNavigate()
    const[tab , setTab]=useState(false);
    const handleTabs =()=>{
        setTab(true)
        navigate("/message")

    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={8} sx={{ margin: "auto" }}>
                <Item>
                    <React.Fragment>
                        <CssBaseline />

                        <Paper square
                            sx={{
                                height:"100%",
                                pb: '50px',
                                backgroundColor: "rgb(34,95,233)",
                                background: "linear-gradient(180deg, rgba(34,95,233,1) 0%, rgba(13,100,237,1) 35%, rgba(139,166,208,1) 100%)",
                                textAlign: "start", 
                                paddingLeft: "40px"
                            }}>
                                
                            <NavBar />
                            <MainBanner />
                        </Paper>
                        <AppBar position="sticky" color="inherit" sx={{ top: 'auto', bottom: 0 }}>
                            <Toolbar sx={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
                                <Box sx={{ display: "flex", flexDirection: "column" }}>
                                    <IconButton color="blue" aria-label="open drawer"  onClick={handleTabs}>
                                        <HomeIcon fontSize='large' sx={{ color: "#1463ec" }} />
                                    </IconButton>
                                    <Typography variant='caption' sx={{ fontWeight: "600", fontSize: "1.2em", paddingBottom: "8px", fontFamily: "Nova Square" }}>Home</Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "column" }}>
                                    <IconButton color="inherit" sx={{ display: "flex", flexDirection: "column" }}>
                                        <MessageIcon fontSize='large' />
                                    </IconButton>
                                    <Typography variant='caption' sx={{ fontWeight: "600", fontSize: "1.2em", paddingBottom: "8px", fontFamily: "Nova Square" }}>Message</Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "column" }}>
                                    <IconButton color="inherit" sx={{ display: "flex", flexDirection: "column" }}>
                                        <HelpOutlineIcon fontSize='large' />
                                    </IconButton>
                                    <Typography variant='caption' sx={{ fontWeight: "600", fontSize: "1.2em", paddingBottom: "8px", fontFamily: "Nova Square" }}>Help</Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "column" }}>
                                    <IconButton color="inherit" sx={{ display: "flex", flexDirection: "column" }}>
                                        <CampaignIcon fontSize='large' />
                                    </IconButton>
                                    <Typography variant='caption' sx={{ fontWeight: "600", fontSize: "1.2em", paddingBottom: "8px", fontFamily: "Nova Square" }}>News</Typography>
                                </Box>
                            </Toolbar>
                        </AppBar>
                    </React.Fragment>
                </Item>
            </Grid>

        </Grid>
    )
}

export default Home
