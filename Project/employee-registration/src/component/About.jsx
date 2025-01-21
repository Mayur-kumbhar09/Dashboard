import { Typography, styled, Divider, Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import webinar from "../image/webinarImages/Webinar.jpg";
import person1 from "../image/webinarImages/360.jpg";
import person2 from "../image/webinarImages/360_F.jpg";
import person3 from "../image/webinarImages/pexels-justin-shaifer.jpg";

const CardContainer = styled("div")({
  perspective: "100%",
});

const FlipCard = styled("div")({
  width: "100%",
  height: "100%",
  position: "relative",
  transformStyle: "preserve-3d",
  transition: "0.6s",
  "&:hover": {
    transform: "rotateY(180deg)",
  },
});

const FlipCardInner = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  transition: "0.6s",
  transformStyle: "preserve-3d",
});

const FlipCardFront = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
});

const FlipCardBack = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  transform: "rotateY(180deg)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f8f8f8",
});

const FrontContent = styled("div")({
  width: "100%",
  height: "100%",
  padding: "0px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "0px solid #e2e2e2",
  borderRadius: "15px",
});

const BackContent = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "20px",
});
const About = () => {
  const [employeeCount, setEmployeeCount] = useState(1235);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmployeeCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  var items = [
    {
      id: 1,
      WebImage: (
        <img
          src={person1}
          alt=""
          srcset=""
          height="280px"
          width="90%"
          style={{ border: "10px solid #e2e2e2", borderRadius: "50%" }}
        />
      ),
      name: "Emily Brew",
      description: "CEO at Falcon",
    },
    {
      id: 2,
      WebImage: (
        <img
          src={person2}
          alt=""
          srcset=""
          height="280px"
          width="90%"
          style={{ border: "10px solid #e2e2e2", borderRadius: "50%" }}
        />
      ),
      name: "Branden Leo",
      description: "CEO at empty",
    },
    {
      id: 3,
      WebImage: (
        <img
          src={person3}
          alt=""
          srcset=""
          height="280px"
          width="90%"
          style={{ border: "10px solid #e2e2e2", borderRadius: "50%" }}
        />
      ),
      name: "justin shaifer",
      description: "Founder of pexels",
    },
  ];
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "650",
          fontFamily: "Nova Square",
          color: "#7275ff",
          margin: "12px 0px",
        }}
      >
        Our Webinars
      </Typography>
      <Divider
        color="#FDA228"
        sx={{
          height: 10,
          width: "180px",
          margin: "auto",
          color: "#7275ff",
          borderRadius: "15px",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      />
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            padding: "32px 20px",
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${webinar})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100%",
              paddingTop: "320px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                borderTop: "2px solid rgba(255, 255, 255, 0.25)",
                borderBottom: "2px solid rgba(255, 255, 255, 0.25)",
                width: "75%",
                margin: "auto",
                paddingBottom: "0px",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: "1.2em",
                  fontWeight: "500",
                  fontFamily: "Nova Square",
                  padding: "0px 22px",
                  color: "#e2e2e2",
                }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt quod distinctio earum, ut deserunt aut, enim molestiae
                deleniti suscipit aliquam corrupti! Illo harum voluptatem quidem
                odit pariatur placeat quasi sapiente dolorem deserunt dolor.
                Commodi impedit, voluptates amet reprehenderit voluptatum
                ratione atque modi quos alias aperiam!
              </Typography>
            </Box>
            <Button
              variant="Contained"
              sx={{ margin: "20px", color: "#e2e2e2", backgroundColor: "gray" }}
            >
              Join Now
            </Button>
          </Box>
        </Box>
        <Box sx={{ margin: "24px 0px" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "650",
              fontFamily: "Nova Square",
              color: "#7275ff",
              margin: "16px 0px",
            }}
          >
            Our Mentor's
          </Typography>
          <Divider
            color="#FDA228"
            sx={{
              height: 3,
              width: "180px",
              margin: "auto",
              color: "#7275ff",
              borderRadius: "15px",
              paddingBottom: "12px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          />
        </Box>
        <Box
          sx={{
            padding: "10px 0px",
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {items.map((item, i) => (
            <CardContainer
              key={i}
              sx={{
                margin: "auto",
                width: "350px",
                height: "400px",
                border: "0px solid #e2e2e2",
                borderRadius: "15px",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              }}
            >
              <FlipCard>
                <FlipCardInner>
                  <FlipCardFront>
                    <FrontContent>
                      <Box sx={{ margin: "auto", padding: "12px" }}>
                        {item.WebImage}
                      </Box>
                      <Typography
                        variant="h4"
                        sx={{ fontFamily: "Nova Square", padding: "12px 0px" }}
                      >
                        {item.name}
                      </Typography>
                    </FrontContent>
                  </FlipCardFront>
                  <FlipCardBack>
                    <BackContent>
                      <Typography
                        variant="h6"
                        sx={{ fontFamily: "Nova Square", padding: "12px 0px" }}
                      >
                        {item.description}
                      </Typography>
                    </BackContent>
                  </FlipCardBack>
                </FlipCardInner>
              </FlipCard>
            </CardContainer>
          ))}
        </Box>
      </Box>
      <Box sx={{ margin: "26px 0px", textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "650",
            fontFamily: "Nova Square",
            color: "#7275ff",
            margin: "16px 0px",
          }}
        >
          Employee Count
        </Typography>
        <Divider
          color="#FDA228"
          sx={{
            height: 3,
            width: "180px",
            margin: "auto",
            color: "#7275ff",
            borderRadius: "15px",
            paddingBottom: "12px",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        />
        <Box sx={{ margin: "24px 0px" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "650",
              fontFamily: "Nova Square",
              color: "#7275ff",
              margin: "16px 0px",
            }}
          >
            {employeeCount}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Nova Square",
              color: "#7275ff",
              margin: "16px 0px",
            }}
          >
            Employees joining every second!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default About;
