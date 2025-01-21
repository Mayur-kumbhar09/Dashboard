import React, { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {
  Box, Button, Divider, TextField, Typography
} from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import image from "../image/avatar/avatar1.jpg";
import EditIcon from '@mui/icons-material/Edit';

const Setting = () => {
  const [isDegree, setIsdegree] = useState(false);
  const [degree, setDegree] = useState({
    institution: 'Dnyanshree Institute of Engineering And Technology, Satara',
    startDate: '08/2018',
    endDate: '08/2022',
    cgpa: '7.94',
  })
  const [isEditing, setIsEditing] = useState(false);
  const [education, setEducation] = useState({
    institution: 'Karmveer Bhaurao Patil Vidyalaya & Junior Collage, Satara',
    startDate: '08/2016',
    endDate: '08/2018',
    percentage: '56.77%',
  });
  const [isSkillEditing, setISkillEditing] = useState(false);
  const [isSsc, setIsSsc] = useState({
    institution: 'Karmveer Bhaurao Patil Vidyalaya & Junior College, Satara',
    startDate: '08/2016',
    endDate: '08/2015',
    percentage: '77.20%',
  });

  const handleEditClick = () => {
    setIsEditing(true);

  }
  const handleUpdateClick = () => {
    setIsEditing(false);
  }
  const handleSkillClick = () => {
    setISkillEditing(true);

  }
  const handleUpdateSkillClick = () => {
    setISkillEditing(false);
  }
  const handleDegreeUpdate = () => {
    setIsdegree(false);
  }

  const handleDegreeClick = () => {
    setIsdegree(true);
  }
  const handleInputChange = (e) => {
    console.log("the ssc is clicked: .....");
    const { name, value } = e.target;
    setIsSsc((prev) => ({ ...prev, [name]: value }));

  }
  const handleHscEdu = (e) => {
    const { name, value } = e.target;
    setEducation((prev) => ({ ...prev, [name]: value }));
  }
  const handleDegree = (e) => {
    const { name, value } = e.target;
    setDegree((prev) => ({ ...prev, [name]: value }));
  }
  console.log("degree value is: ",degree);
  //  Skills Section 
  const [newSkill, setNewSkill] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [skill, setSkill] = useState([
    'Java', 'JavaScript', 'Node.js', 'React', 'MySQL', 'MongoDB'
  ]);
  const addSkills = () => {
    if (newSkill) {
      setSkill([...skill, newSkill]);
      setNewSkill('');
      setShowInput(true); // Hide input after adding the skill
    }
    setShowInput(!showInput)
  };
  return (
    <Box>
      <TextField
        fullWidth
        id="input-textfield"
        label="Search"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="filled"
        sx={{
          '& .MuiFilledInput-root': {
            border: '1px solid #ccc',
          },
          '& .MuiInputLabel-root': {
            color: "black"
          },
        }}
      />
      <Box sx={{ display: "flex", justifyContent: "start", width: "100%" }}>
        <Box sx={{ margin: "20px 0px", display: "flex", justifyContent: "space-evenly", width: "75%" }}>
          <img src={image} alt="" srcset="" width="200" style={{ border: "0px solid black", borderRadius: "100px", padding: "4px" }} />
          <Box sx={{ margin: "auto", display: "flex", flexDirection: "column", alignContent: "start", padding: "20px", backgroundColor: "" }}>
            <Typography variant="h4" sx={{
              fontWeight: "550",
              fontFamily: "Nova Square",
              color: "#000000",
              fontSize: "1.2em"
            }}>Profile Picture</Typography>
            <Typography variant="subtitle1" sx={{
              fontWeight: "400",
              fontFamily: "Nova Square",
              color: "#000000",
              fontSize: "1em"
            }}>PNG,JPEG under 15 MB</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", width: "25%" }}>
          <Box sx={{ margin: "auto", display: "flex" }}>
            <Button variant="contained" sx={{ margin: "8px 6px", backgroundColor: "#ccc" }}>
              Upload New picture</Button>
            <Button variant="contained" sx={{ margin: "8px 6px" }} disabled>Delete</Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ margin: "24px" }}>
        <Typography variant="h2" sx={{
          fontWeight: "600",
          fontFamily: "Nova Square",
          color: "#000",
          fontSize: "1.5em"
        }}>
          Full Name
          <Divider sx={{
            width: "115px",
            height: "8px",
            "&::before, &::after": {
              borderColor: "secondary.light",
            },
            backgroundColor: "orange",
            borderRadius: "50px",
            boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
          }} />
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-around", margin: "22px 0px" }}>

          <Box sx={{ border: "1px solid #ccc", padding: "8px 12px", borderRadius: "12px", width: "49%", textAlign: "start" }}>
            <Typography variant="h5"
              sx={{ fontWeight: "500", fontSize: "1.2em", }}
            >
              Mayur
            </Typography>
          </Box>
          <Box sx={{ border: "1px solid #ccc", padding: "8px 12px", borderRadius: "12px", width: "49%", textAlign: "start" }}>
            <Typography variant="h5"
              sx={{ fontWeight: "500", fontSize: "1.2em", }}
            >
              Kumbhar
            </Typography>
          </Box>

        </Box>
      </Box>
      <Divider />
      <Box sx={{ margin: "24px" }}>

        <Typography variant="h2" sx={{
          fontWeight: "600",
          fontFamily: "Nova Square",
          color: "#000",
          fontSize: "1.5em",

        }}>
          Contact Email
          <Divider sx={{
            width: "155px",
            height: "8px",
            "&::before, &::after": {
              borderColor: "secondary.light",
            },
            backgroundColor: "orange",
            borderRadius: "50px",
            boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
          }} />
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", margin: "22px 0px" }}>

          <Box sx={{ border: "1px solid #ccc", padding: "8px 12px", borderRadius: "12px", width: "85%", textAlign: "start", margin: "auto 0px" }}>
            <Typography variant="h5"
              sx={{ fontWeight: "500", fontSize: "1.2em", }}
            >
              Kumbharmayur0002@gmail.com
            </Typography>
          </Box>
          <Box sx={{ padding: "8px 12px", width: "20%", textAlign: "start" }}>
            <Button variant="contained" sx={{ margin: "8px 6px", backgroundColor: "#ccc" }}><AddCircleOutlineIcon />Add another email</Button>
          </Box>

        </Box>
      </Box>
      <Divider />
      <Box sx={{ margin: "24px" }}>

        <Typography variant="h2" sx={{
          fontWeight: "600",
          fontFamily: "Nova Square",
          color: "#000",
          fontSize: "1.5em",

        }}>
          Education Details
          <Divider sx={{
            width: "190px",
            height: "8px",
            "&::before, &::after": {
              borderColor: "secondary.light",
            },
            backgroundColor: "orange",
            borderRadius: "50px",
            boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
          }} />
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", margin: "24px 0px" }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "650", fontSize: "1.4em" }}>
              Degree
            </Typography>
            {isDegree ? (
              <Box sx={{padding:"10px 0px",width:"100%"}}>
                <Typography variant="h5" sx={{
                  fontFamily: "Nova Square",
                  color: "#000",
                  fontSize: "1rem",

                }}>Institute Name: </Typography>
                <TextField
                  name="institution"
                  value={degree.institution}
                  onChange={handleDegree}
                  fullWidth
                  variant="outlined"
                  sx={{ margin: "7px 0px" }}
                />
                <Typography variant="h5" sx={{
                  fontFamily: "Nova Square",
                  color: "#000",
                  fontSize: "1rem",

                }}>Start Data: </Typography>
                <TextField
                  type="date"
                  name="startDate"
                  value={degree.startDate}
                  onChange={handleDegree}
                  fullWidth
                  variant="outlined"
                  sx={{ margin: "7px 0px" }}
                />
                <Typography variant="h5" sx={{
                  fontFamily: "Nova Square",
                  color: "#000",
                  fontSize: "1rem",

                }}>End Date: </Typography>
                <TextField
                  name="endDate"
                  value={degree.endDate}
                  onChange={handleDegree}
                  fullWidth
                  variant="outlined"
                  sx={{ margin: "7px 0px" }}
                />
                <Typography variant="h5" sx={{
                  fontFamily: "Nova Square",
                  color: "#000",
                  fontSize: "1rem",

                }}>CGPA: </Typography>
                <TextField
                  name="cgpa"
                  value={degree.cgpa}
                  onChange={handleDegree}
                  fullWidth
                  variant="outlined"
                  sx={{ margin: "7px 0px" }}
                />
                <Button variant="contained" onClick={handleDegreeUpdate}>Update</Button>
              </Box>
            ) : (
              <>
                <Typography variant="h6" sx={{ fontWeight: "500", fontSize: "1em", margin: "7px 0px" }}>
                  {degree.institution}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "500", fontSize: "1em", margin: "7px 0px" }}>
                  Start Date: {degree.startDate} End Date: {degree.endDate}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "500", fontSize: "1em", margin: "7px 0px" }}>
                  CGPA: {degree.cgpa}
                </Typography>
              </>
            )}
          </Box>
          <Box sx={{ padding: "8px 12px", width: "20%", textAlign: "start" }}>
            <Button variant="contained" sx={{ margin: "8px 6px", backgroundColor: "#cccccc" }} onClick={handleDegreeClick}>
              <EditIcon />
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", margin: "24px 0px" }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "650", fontSize: "1.4em" }}>
              HSC:-
            </Typography>
            {isEditing ? (
              <>
                <TextField
                  name="institution"
                  value={education.institution}
                  onChange={handleHscEdu}
                  fullWidth
                  variant="outlined"
                  sx={{ margin: "7px 0px" }}
                />
                <TextField
                  name="startDate"
                  value={education.startDate}
                  onChange={handleHscEdu}
                  fullWidth
                  variant="outlined"
                  sx={{ margin: "7px 0px" }}
                />
                <TextField
                  name="endDate"
                  value={education.endDate}
                  onChange={handleHscEdu}
                  fullWidth
                  variant="outlined"
                  sx={{ margin: "7px 0px" }}
                />
                <TextField
                  name="percentage"
                  value={education.percentage}
                  onChange={handleHscEdu}
                  fullWidth
                  variant="outlined"
                  sx={{ margin: "7px 0px" }}
                />
                <Button variant="contained" onClick={handleUpdateClick}>Update</Button>
              </>
            ) : (
              <>
                <Typography variant="h6" sx={{ fontWeight: "500", fontSize: "1em", margin: "7px 0px" }}>
                  {education.institution}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "500", fontSize: "1em", margin: "7px 0px" }}>
                  Start Date: {education.startDate} End Date: {education.endDate}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "500", fontSize: "1em", margin: "7px 0px" }}>
                  Percentage: {education.percentage}
                </Typography>
              </>
            )}
          </Box>
          <Box sx={{ padding: "8px 12px", width: "20%", textAlign: "start" }}>
            <Button variant="contained" sx={{ margin: "8px 6px", backgroundColor: "#cccccc" }} onClick={handleEditClick}>
              <EditIcon />
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", margin: "24px 0px" }}>
          <Box>
            <Typography variant="h5"
              sx={{ fontWeight: "650", fontSize: "1.4em", }}
            >
              SSC:-
            </Typography>
            {isSkillEditing ? (
              <>
                <TextField
                  name="institution"
                  value={isSsc.institution}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  sx={{ margin: "7px 0px" }}
                />
                <TextField
                  name="startDate"
                  value={isSsc.startDate}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  sx={{ margin: "7px 0px" }}
                />
                <TextField
                  name="endDate"
                  value={isSsc.endDate}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  sx={{ margin: "7px 0px" }}
                />
                <TextField
                  name="percentage"
                  value={isSsc.percentage}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  sx={{ margin: "7px 0px" }}
                />
                <Button variant="contained" onClick={handleUpdateSkillClick}>Update</Button>
              </>
            ) : (<>
              <Typography variant="h6" sx={{ fontWeight: "500", fontSize: "1em", margin: "7px 0px" }}>
                {isSsc.institution}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "500", fontSize: "1em", margin: "7px 0px" }}>
                Start Date: {isSsc.startDate} End Date: {isSsc.endDate}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "500", fontSize: "1em", margin: "7px 0px" }}>
                Percentage: {isSsc.percentage}
              </Typography>
            </>)
            }

          </Box>
          <Box sx={{ padding: "8px 12px", width: "20%", textAlign: "start" }}>
            <Button variant="contained" sx={{ margin: "8px 6px", backgroundColor: "#cccccc" }} onClick={handleSkillClick}><EditIcon /></Button>
          </Box>

        </Box>
      </Box>
      <Divider />
      <Box sx={{ margin: "24px" }}>
        <Typography variant="h2" sx={{
          fontWeight: "600",
          fontFamily: "Nova Square",
          color: "#000",
          fontSize: "1.5em",

        }}>Skills </Typography>
        <Divider sx={{
          width: "4.5%",
          height: "8px",
          "&::before, &::after": {
            borderColor: "secondary.light",
          },
          backgroundColor: "orange",
          borderRadius: "50px",
          boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
        }} />

        <Box sx={{ display: "flex", justifyContent: "space-between", margin: "24px 0px" }}>

          <Box sx={{ padding: "12px", textAlign: "start" }}>
            {
              skill.map((skill, index) => (

                <Button key={index} variant="contained" sx={{ margin: "8px 6px", backgroundColor: "#ccc" }}>{skill}</Button>
              ))
            }
            {showInput && (
              <Box sx={{ display: 'flex', margin: "8px 6px" }}>
                <TextField
                  variant="outlined"
                  size="small"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Add a skill"
                  sx={{ marginRight: "8px" }}
                />
                <Button variant="contained" onClick={addSkills}>Add</Button>
              </Box>
            )}

            <Box sx={{ padding: "8px 12px", width: "20%", textAlign: "start" }}>
              <Button variant="contained" sx={{ margin: "8px 6px", backgroundColor: "#cccccc" }} onClick={() => setShowInput(!showInput)}><EditIcon /></Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Setting;