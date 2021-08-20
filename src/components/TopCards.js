import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    backgroundColor: '#303030',
    color: '#fff'
  },
  media: {
    height: 400,
  },
});

export default function TopCards() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Ffd6be3c6-31de-4709-8089-32f35427f74c.jpg?fit=scale-down&source=next&width=700"
          title="Headline Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Live Updates of the 2020 Election
          </Typography>
          <Typography variant="body2" color="#303030" component="p">
            Stay tuned for live updates on the 2020 Presidential Election
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="inherit">
          4.1M Engagements
        </Button>
        <Button size="small" color="inherit">
          3.7M Shares
        </Button>
      </CardActions>
    </Card>
    </Grid>
           <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.cnet.com/a/img/p23Uh9TR6CL5IM8KvLjX8sZAdvM=/940x0/2021/08/20/c7483157-7676-4005-9899-b6c229715f8f/teslarobot1.png"
          title="Headline Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Meet TeslaBot, a humanoid bot using Tesla's vehicle AI
          </Typography>
          <Typography variant="body2" color="#303030" component="p">
            Tesla's Elon Musk made the announcement on Thursday. What does this mean for the evolution of AI?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="inherit">
          1.5M Engagements
        </Button>
        <Button size="small" color="inherit">
          1M Shares
        </Button>
      </CardActions>
    </Card>
    </Grid>
           <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="data:image/jpeg;base64,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"
          title="Headline Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            COVID-19 FAQ: What's up with the booster shots?
          </Typography>
          <Typography variant="body2" color="#303030" component="p">
            Given health officials' newest recommendations, what does that mean for vaccine skeptics and those who are already fully vaccinated against COVID-19?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="inherit">
          1M Engagements
        </Button>
        <Button size="small" color="inherit">
          960K Shares
        </Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
  );
}
