import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';

// const useStyles = makeStyles({
//   card: {
//     display: 'flex',
//   },
//   cardDetails: {
//     flex: 1,
//   },
//   cardMedia: {
//     width: 160,
//   },
// });

const useStyles = makeStyles((theme) => ({
  // mainGrid: {
  //   marginTop: theme.spacing(4),
  //   marginLeft: theme.spacing(5),
  //   // paddingLeft: theme.spacing(5)
  //   // paddingTop: theme.spacing(1.5),
  // },
    card: {
      display: 'flex',
      // paddingLeft: 50,
      // width: 300,
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
}));

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="https://docs.google.com/forms/d/e/1FAIpQLSe_GMrl59g4LeierD0XkO2S5yLU6P8b4ItKtrvmfRnj4p4SmA/viewform" target="_blank">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography component="h3" variant="h5">
                {post.title1}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description2}
              </Typography>
               <Link variant="subtitle1" href="https://youtu.be/_caukWh354s" target="_blank">
                Head to my Youtube Channel ! 
              </Link>
              {/* <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography> */}
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};