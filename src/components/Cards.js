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

export default function Cards() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Green_Arrow_Up.svg/1200px-Green_Arrow_Up.svg.png"
          title="Green Up Arrow"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Twitter Engagements - Up 150%
          </Typography>
          <Typography variant="body2" color="#303030" component="p">
            The company's Twitter account has seen an uptick in engagement from readers. This can be attributed to successful coverage of the local election. The leading demographic is 18-25 year olds.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="inherit">
          Share
        </Button>
        <Button size="small" color="inherit">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Grid>
           <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Green_Arrow_Up.svg/1200px-Green_Arrow_Up.svg.png"
          title="Green Up Arrow"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Facebook Engagements - Up 120%
          </Typography>
          <Typography variant="body2" color="#303030" component="p">
            The company's Facebook account has seen an uptick in engagement from readers. This can be attributed to successful coverage of the local election. The leading demographic is currently 35-50 year olds.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="inherit">
          Share
        </Button>
        <Button size="small" color="inherit">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Grid>
           <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Green_Arrow_Up.svg/1200px-Green_Arrow_Up.svg.png"
          title="Green Up Arrow"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            YouTube Engagements - Up 75%
          </Typography>
          <Typography variant="body2" color="#303030" component="p">
            The company's YouTube account has seen a gradual uptick in engagement from viewers. This can be attributed to successful coverage of the local election as well as the weekly livestreams. The leading demographic is currently 35-50 year olds.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="inherit">
          Share
        </Button>
        <Button size="small" color="inherit">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Grid>
           <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Arrow_Blue_Up_001.svg/2048px-Arrow_Blue_Up_001.svg.png"
          title="Green Up Arrow"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Instagram Engagements - Up 25%
          </Typography>
          <Typography variant="body2" color="#303030" component="p">
            The company's Instagram has seen a slight increase in engagement, but is not up to par with the target rate of 100%. There has been little attention paid to the content posted, and the demographic is slowly changing. The leading demographic is 18-24 year olds.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
  );
}