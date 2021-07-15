import {
  Box,
  Button,
  CardMedia,
  Grid,
  IconButton,
  Link,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import GitHubIcon from '@material-ui/icons/GitHub';

interface _props {
  href: string;
  name: string;
  desc: string;
  width?: number;
  image?: imageProps;
  buttons?: buttonProps;
  githubUrl: string;
}

interface buttonProps {
  text?: string;
  icon?: JSX.Element;
  url: string;
}

interface imageProps {
  url: string;
  alt?: string;
  title?: string;
  height?: number;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 300,
    borderBottom: `4px solid ${
      theme.palette.type === "dark" ? "purple" : theme.palette.primary.light
    }`,
    // boxShadow: `0 5px 0px ${
    //   theme.palette.type === "dark"
    //     ? "rgb(159, 31, 239, 0.6)"
    //     : "rgb(0, 0, 0, 0.2)"
    // } !important`,
    // "&:hover": {
    //   boxShadow: `0 8px 15px 3px ${
    //     theme.palette.type === "dark"
    //       ? "rgb(159, 31, 239, 0.6)"
    //       : "rgb(0, 0, 0, 0.2)"
    //   } !important`,
    // },
  },
  media: {
    height: 140,
  },
  img: {
    height: 140,
  }
}));

export default function ProjectCard(props: _props) {
  const { href, name, desc, image, buttons } = props
  const classes = useStyles();

  return (
    <Grid item className="rise-anim">
      <Card className={classes.root}>
        {image ? (
          <CardMedia
            component="img"
            alt={image.alt}
            height={140}
            image={image.url}
            title={image.title}
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
            <Link href={href} underline="none" color="textPrimary">
              {name}
            </Link>
          </Typography>
          <Typography variant="body1" component="p" color="textSecondary">
            {desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Tooltip title="Todo" color="primary" arrow>
            <Button color="primary">Share</Button>
          </Tooltip>
          <IconButton color="primary" ><GitHubIcon/></IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
