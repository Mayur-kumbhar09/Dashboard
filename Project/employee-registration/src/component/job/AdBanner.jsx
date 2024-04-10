import React from 'react'
import { Box } from "@mui/material"
import adLogo from "../../image/user_image.jpg"
import adBAnner from "../../image/AD_banner.jpg"
const AdBanner = () => {
  return (
    <Box style={{ height: "auto", width: "100%", backgroundColor: "#676afb", color: "#ffffff" }}>
      <nav style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <img src={adLogo} style={{ borderRadius: "50%", border: "1px solid black", margin: "auto", padding: "2px" }} height="35px" width="35px" alt="" srcset="" />
        <ul style={{ lineHeight: "10px", margin: "auto" }}>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
      <Box>
        <img src={adBAnner} alt="Ad_Banner" style={{height: "auto", width: "100%", }} />
      </Box>
    </Box>
  )
}

export default AdBanner
