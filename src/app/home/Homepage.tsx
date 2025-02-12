import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, Avatar } from '@mui/material';

const Homepage: React.FC = () => {
  return (
    <Box sx={{ padding: 4 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Avatar
          alt="C.O.R.E Logo"
          src="/core.webp" 
          sx={{ width: 100, height: 100, margin: '0 auto 16px' }}
        />
        <Typography variant="h5" gutterBottom>
          Welcome to C.O.R.E Community Of Rising Educators 
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Empowering students and educators to achieve excellence
        </Typography>
      </Box>

      {/* Roles Section */}
      <Grid container spacing={4}>
        {[
          { title: 'Students', description: 'Explore courses and track your learning journey.' },
          { title: 'Tutors', description: 'Share your knowledge and guide students.' },
          { title: 'Testmakers', description: 'Create and manage tests for students.' },
          { title: 'Notemakers', description: 'Organize and provide notes for courses.' },
        ].map((role, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {role.title}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {role.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Subjects Section */}
      <Box sx={{ marginTop: 6 }}>
        <Typography variant="h4" gutterBottom textAlign={'center'}>
          Subjects We Offer
        </Typography>
        <Grid container spacing={4}>
          {[
            { title: 'Biology', description: 'Discover the wonders of life and living organisms.', url: 'bio' },
            { title: 'Chemistry', description: 'Explore the science of matter and its interactions.', url: 'chem' },
            { title: 'Math', description: 'Understand the laws that govern the universe by math', url: 'math' },
            { title: 'Psychology', description: 'Dive into the study of mind and behavior.', url: 'psy' },
          ].map((subject, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {subject.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {subject.description}
                  </Typography>
                  <Button variant="contained" color="success" size="medium" href={'/subject/' + subject.url}>
                    View Courses
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>     
    </Box>
  );
};

export default Homepage;
