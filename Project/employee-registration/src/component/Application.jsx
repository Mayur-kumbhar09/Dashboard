import React, { useState,useEffect } from "react";
import StepOne from "./steps/StepOne";
import NextStep from "./steps/NextStep";
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const Application = () => {
  const [show, setShow] = useState(false);
  const [showTo, setShowTo] = useState(false);
  const handleStep = () => {
    setShow(true);
    console.log("Event Triggered....");
  };
  const handleStepTwo = () => {
    setShowTo(true);
    console.log("2nd Event Triggered....");
  };
  useEffect(()=>{
    handleStep();
    handleStepTwo();
  },[show,showTo]);

  

  return (
    <>
      {
        showTo === true ? <StepOne /> : show === true ? <StepOne /> : <NextStep />
      }
      {/* {show === true ? (
        <StepOne />
      ) : (
        <Grid item xs={12}>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", margin: "24px 0px" }}
          >
            Complete The Application form
          </Typography>
          <Item>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "rgb(54,217,219)",
                background:
                  "linear-gradient(0deg, rgba(54,217,219,1) 17%, rgba(86,202,222,1) 42%, rgba(58,171,235,1) 61%)",
                borderRadius: "50%",
                display: "flex",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  margin: "auto",
                  color: "#ffffff",
                  fontWeight: "600",
                  fontFamily: "Nova Square",
                }}
                onClick={(e) => handleStep(e.target.value)}
              >
                Step 1
              </Typography>
            </Box>
          </Item>

          <Item>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "rgb(59,48,242)",
                background:
                  "linear-gradient(191deg, rgba(59,48,242,1) 3%, rgba(130,65,252,0.8407738095238095) 49%, rgba(21,204,241,1) 85%)",
                borderRadius: "50%",
                display: "flex",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  margin: "auto",
                  color: "#ffffff",
                  fontWeight: "600",
                  fontFamily: "Nova Square",
                }}
                onClick={(e) => handleStepTwo(e.target.value)}
              >
                Step 2
              </Typography>
            </Box>
          </Item>
        </Grid>
      )} */}
    </>
  );
};

export default Application;
