import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: 345,
    // boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important",
    "&:hover": {
      boxShadow: "0 8px 15px rgb(0, 0, 0, 0.2) !important",
    },
  },
  media: {
    height: 140,
  },
}));

interface _props {
  href: string;
  name: string;
  desc: string;
  width?: number;
  children?: any;
  image?: imageProps;
}

interface imageProps {
  url: string;
  alt?: string;
  title?: string;
}

export default function ProjectCard(props: _props) {
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.root}>
        {props.image ? (
          <CardMedia
            component="img"
            alt={props.image.alt}
            height="140"
            image={props.image.url}
            title={props.image.title}
          />
        ) : (
          <Box style={{ height: 140, paddingTop: 70 }}>
            <Typography color="textSecondary" align="center">
              No Image
            </Typography>
          </Box>
        )}
        <CardContent>
          <Typography gutterBottom variant="h5">
            <a href={props.href}>{props.name}</a>
          </Typography>
          <Typography variant="body1" component="p">
            {props.desc}
          </Typography>
        </CardContent>
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
  );
}
