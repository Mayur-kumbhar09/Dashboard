import React from 'react'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import img from "./Image/logo.png"
import avatar1 from "./Image/avatar1.png"
import avatar2 from "./Image/avatar2.png"
import avatar3 from "./Image/avatar3.png"

const NavBar = () => {
    return (
        <Box sx={{ width: "65%", display:"flex",height:"100px", justifyContent:"space-evenly", paddingTop:"44px", }}>
            <Box>
                <img src={img} alt="logo" className='img-fluid'width="45px"/>
            </Box>
            <AvatarGroup sx={{width:"120px",height:"120px"}}>
                <Avatar alt="Remy Sharp" src={avatar1}  sx={{ width: 52, height: 52 }} />
                <Avatar alt="Travis Howard"  src={avatar2} sx={{ width: 52, height: 52 }} />
                <Avatar alt="Cindy Baker"  src={avatar3} sx={{ width: 52, height: 52 }} />
            </AvatarGroup>
        </Box>
    )
}

export default NavBar
