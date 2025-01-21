import React, { useState } from 'react';
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  Button,
  Input,
  FormControl,
  FormHelperText,
  CircularProgress,
  Collapse,
  IconButton
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

const Skills = () => {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [openTask, setOpenTask] = useState(null);

  // Updated tasks data with relevant programming challenges
  const tasks = [
    {
      id: 1,
      task: 'Implement Authentication Flow',
      score: 92,
      description: 'Develop a secure authentication system using JWT tokens, including login, registration, and password reset functionality.'
    },
    {
      id: 2,
      task: 'Create RESTful API',
      score: 88,
      description: 'Design and implement a RESTful API with proper endpoints, status codes, and error handling for a CRUD application.'
    },
    {
      id: 3,
      task: 'Database Schema Design',
      score: 90,
      description: 'Create an optimized database schema with proper normalization, indexing, and relationships for a complex application.'
    },
    {
      id: 4,
      task: 'Frontend State Management',
      score: 85,
      description: 'Implement efficient state management using Redux or Context API for a large-scale React application.'
    },
    {
      id: 5,
      task: 'CI/CD Pipeline Setup',
      score: 87,
      description: 'Configure a continuous integration and deployment pipeline using tools like Jenkins or GitHub Actions.'
    },
    {
      id: 6,
      task: 'Unit Testing Implementation',
      score: 91,
      description: 'Write comprehensive unit tests using Jest and React Testing Library to achieve 80%+ code coverage.'
    },
    {
      id: 7,
      task: 'Performance Optimization',
      score: 89,
      description: 'Implement performance optimizations including code splitting, lazy loading, and memoization techniques.'
    },
    {
      id: 8,
      task: 'API Documentation',
      score: 93,
      description: 'Create comprehensive API documentation using Swagger or Postman for better developer experience.'
    }
  ];

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === 'text/plain') {
      setFile(selectedFile);
      setUploadError('');
    } else {
      setUploadError('Please upload a valid .txt file');
    }
  };

  const handleUpload = () => {
    if (!file) {
      setUploadError('Please select a file to upload');
      return;
    }

    setIsUploading(true);
    setUploadSuccess(false);
    setUploadError('');

    // Simulate file upload process
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);
      setFile(null);
    }, 2000);
  };

  const toggleDescription = (taskId) => {
    setOpenTask(openTask === taskId ? null : taskId);
  };

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Programming Skills Assessment
        </Typography>

        {/* Code Upload Section */}
        <Box mb={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Upload Your Code
            </Typography>
            <FormControl fullWidth error={!!uploadError}>
              <Input
                type="file"
                inputProps={{ accept: '.txt' }}
                onChange={handleFileChange}
                disabled={isUploading}
              />
              {uploadError && <FormHelperText>{uploadError}</FormHelperText>}
            </FormControl>
            <Box mt={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpload}
                disabled={isUploading || !file}
                startIcon={isUploading ? <CircularProgress size={20} /> : null}
              >
                {isUploading ? 'Uploading...' : 'Upload Code'}
              </Button>
              {uploadSuccess && (
                <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
                  Code uploaded successfully!
                </Typography>
              )}
            </Box>
          </Paper>
        </Box>

        {/* Skills Table */}
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Task</TableCell>
                <TableCell align="right">Score</TableCell>
                <TableCell>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task) => (
                <React.Fragment key={task.id}>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {task.task}
                    </TableCell>
                    <TableCell align="right">{task.score}%</TableCell>
                    <TableCell>
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => toggleDescription(task.id)}
                      >
                        {openTask === task.id ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                      </IconButton>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                      <Collapse in={openTask === task.id} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                          <Typography variant="body2" color="text.secondary" gutterBottom>
                            {task.description}
                          </Typography>
                          <Button
                            variant="outlined"
                            color="primary"
                            onClick={handleUpload}
                            disabled={isUploading}
                            startIcon={isUploading ? <CircularProgress size={20} /> : null}
                            sx={{ mt: 1 }}
                          >
                            Upload Your Code
                          </Button>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default Skills;
