import React from "react";
import { Typography, Button, Box } from "@mui/material";
import js from "../image/lang_logos/js.png";
import react from "../image/lang_logos/react.png";
import html from "../image/lang_logos/html.png";
import node from "../image/lang_logos/node.png";
import python from "../image/lang_logos/python.png";
import java from "../image/lang_logos/java.png";
import angular from "../image/lang_logos/angular.png";
import php from "../image/lang_logos/php.png";
import ruby from "../image/lang_logos/Ruby_On_Rails.png";
import dotnet from "../image/lang_logos/dotnet.png";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Divider } from "@mui/material";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";

// Image and Language mapping
const langArry = [
  { id: 1, langImage: html, language: "HTML" },
  { id: 2, langImage: js, language: "JAVASCRIPT" },
  { id: 3, langImage: node, language: "NODE JS" },
  { id: 4, langImage: react, language: "REACT" },
  { id: 5, langImage: java, language: "JAVA" },
  { id: 6, langImage: angular, language: "ANGULAR" },
  { id: 7, langImage: python, language: "PYTHON" },
  { id: 8, langImage: php, language: "PHP" },
  { id: 9, langImage: ruby, language: "RUBY ON RAILS" },
  { id: 10, langImage: dotnet, language: "DOT-NET" },
  { id: 11, langImage: "", language: "Upcoming" } // Placeholder for upcoming
];

const TestSkills = () => {
  const navigate = useNavigate();

  const navigateToCodeEditor = () => {
    navigate("/testSkills/codeEditor");
  };

  return (
    <>
      <Box sx={{
        margin: "8px 0px",
        display: "flex",
        flexDirection: "column"
      }}>
        <Typography variant="h4"
          sx={{
            padding: "14px 12px",
            fontWeight: "600",
            fontFamily: "Nova Square",
            color: "#7275ff",
            textAlign: "center",
          }}>
          Select any one of them to learn!
        </Typography>

        <Divider sx={{
          width: "520px",
          height: "8px",
          "&::before, &::after": {
            borderColor: "secondary.light",
          },
          backgroundColor: "orange",
          color: "#7275ff",
          borderRadius: "15px",
          margin: "auto",
          boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
        }} />
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap",gap:5, padding: "16px 14px" }}>
        {langArry.map((data) => (
          <Card sx={{
            maxWidth: 240, margin: "8px",
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          }} key={data.id}>
            {data.id === langArry.length ? (
              <Stack spacing={1}>
                <Skeleton variant="rectangular" width={210} height={210} sx={{ textAlign: "center", paddingTop: "8px", fontSize: "1.3em" }} >Upcoming...</Skeleton>
                <Skeleton variant="rounded" width={210} height={60} />
              </Stack>
            ) : (
              <>
                <CardMedia sx={{ margin: "8px", textAlign: "center", height: "285px" }}>
                  <img src={data.langImage} alt={data.language} height="85%" width="100%" style={{ margin: "auto", padding: "4px" }} />
                </CardMedia>
                <CardContent sx={{ textAlign: "center" }}>
                  <Button variant="contained"
                    onClick={navigateToCodeEditor}
                    sx={{
                      backgroundColor: "#f8285a", padding: "8px 10px", fontWeight: "600",
                      fontFamily: "Nova Square", color: "#ffffff", fontSize: "1em",
                    }}>
                    Code {data.language}
                  </Button>
                </CardContent>
              </>
            )}
          </Card>
        ))}
      </Box>
    </>
  );
};

export default TestSkills;
