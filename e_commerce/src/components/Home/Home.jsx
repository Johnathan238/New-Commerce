import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AlternateEmailTwoToneIcon from '@material-ui/icons/AlternateEmailTwoTone';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
// import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(10),
    paddingTop: theme.spacing(1),
  },
}));

// const sections = [
//   { title: 'Technology', url: '#' },
//   { title: 'Design', url: '#' },
//   { title: 'Culture', url: '#' },
//   { title: 'Business', url: '#' },
//   { title: 'Politics', url: '#' },
//   { title: 'Opinion', url: '#' },
//   { title: 'Science', url: '#' },
//   { title: 'Health', url: '#' },
//   { title: 'Style', url: '#' },
//   { title: 'Travel', url: '#' },
// ];

const mainFeaturedPost = {
  title: 'NO PAIN NO GAIN',
  description:
    "Marck is a passionate and ambitious trainer in the fitness industry. His passion for fitness started a year after he began working out. He initially started working out because he was tired of being skinny and decided to make a change to his life. Fast forward to a year later and the changes he saw were tremendous, and that inspired him to get into the industry with hopes of helping as many people as he can do the same thing he did. Marck’s main goal is to help as many people as he can accomplish their desired body goals or reach a point where they are comfortable with how they look AND feel. Fitness to Marck is more than just physical or how you look but more so of how you feel mentally because mental health is extremely important in life especially in today’s age. Marck is currently pursuing his BA in Psychology which will benefit him a lot by giving him the resources of being able to understand people a lot better, by understanding how people’s mind works, Marck will be able to motivate YOU more efficiently.Remember, train smart, not hard,",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
};

const featuredPosts = [
  {
    title: 'My 2 year body transformation SKINNY to RIPPED',
    date: 'Nov 12',
    description:
      `Hey guys thanks for tuning in and welcome back to the channel. I put this video together because I wanted to show you all my progress for the 2 years that I have been doing fitness and with hopes that this video MOTIVATES ANYONE WATCHING, it was supposed to be a 3 year in August but i decided to do this now since #Corona had all gyms shut down since March so it was no point of waiting to make the video all the way then. But anyway I hope you enjoy please don't forget to LIKE COMMENT SUBSCRIBE SHARE. Thank you!!`,
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80',
    imageText: 'My 2 year body transformation',
  },
  // {
  //   title: 'Post title',
  //   date: 'Nov 11',
  //   description:
  //     `Hey guys thanks for tuning in and welcome back to the channel. I put this video together because I wanted to show you all my progress for the 2 years that I have been doing fitness and with hopes that this video MOTIVATES ANYONE WATCHING, it was supposed to be a 3 year in August but i decided to do this now since #Corona had all gyms shut down since March so it was no point of waiting to make the video all the way then. But anyway I hope you enjoy please don't forget to LIKE COMMENT SUBSCRIBE SHARE. Thank you!!`,
  //   image: 'https://source.unsplash.com/random',
  //   imageText: 'Image Text',
  // },
];

// const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:`
    'Prodigy Fitness Trainer 🏋🏽‍♂ ️',
    Fitness Trainer,
    𝐀𝐂𝐄-𝐂𝐏𝐓 | 𝟐𝟏 | 𝐍𝐘𝐂,
    I help Men & Women with their fitness goals!
    📍NYC Fitness Trainer,
    🎯1-on-1 training,
    💻Online Coaching'`,
  archives: [
    { title: 'Gmail', icon: AlternateEmailTwoToneIcon, url: 'mailto:prodigyfitness21@gmail.com' },
    { title: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/_prodigy.fitness/?hl=en' },
    { title: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com/_prodigyfitness' },
  ],
  // social: [
  //   { name: 'Gmail', icon: AlternateEmailTwoToneIcon, url: 'mailto:prodigyfitness21@gmail.com',  },
  //   { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/_prodigy.fitness/?hl=en' },
  //   { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com/_prodigyfitness'},
  // ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* <Header title="Blog" sections={sections} /> */}
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* <Main title="From the firehose" posts={posts} /> */}
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              // social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}