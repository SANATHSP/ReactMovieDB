import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const ImageCard = ({ movie }) => {
  return (
    <Card sx={{ color:'GrayText', maxWidth: 345, maxHeight: 550 }} >
      <CardMedia
        component="img"
        height="450"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {movie.title}
        </Typography>
        <Link to={`/moviedetails/${movie.id}`}>
          <Button 
          size="large"
           variant='filled'
            fullWidth color="success"
            sx={{ width: '100%' }}>
            Learn More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ImageCard;
