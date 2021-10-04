import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    // backgroundColor: theme.palette[500],
    // color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(10),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    // color: '#ffffff',
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgb(202,233,255,0.42947601403842783)',
    // background: 'linear-gradient(90deg, #62b6cb 30%, #cae9ff 90%)',
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(10),
      paddingRight: 0,
    },
  },
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography>
            {/* <Link variant="subtitle1" href="#">
              {post.linkText}
            </Link> */}
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};