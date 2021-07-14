import {
  Box,
  Button,
  CardMedia,
  Grid,
  Link,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import React from "react";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      maxWidth: 345,
      borderBottom: `4px solid ${
        theme.palette.type === "dark" ? "purple" : theme.palette.primary.light
      }`,
      // boxShadow: `0 3px 0px ${
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
  });
});

interface _props {
  href: string;
  name: string;
  desc: string;
  width?: number;
  children?: any;
  image?: imageProps;
  learnMoreUrl?: string;
}

interface imageProps {
  url: string;
  alt?: string;
  title?: string;
}

export default function ProjectCard(props: _props) {
  const classes = useStyles();

  return (
    <Grid item className="rise-anim">
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
            <Link href={props.href} underline="none" color="textPrimary">
              {props.name}
            </Link>
          </Typography>
          <Typography variant="body1" component="p" color="textSecondary">
            {props.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Tooltip title="Todo" color="primary" arrow>
            <Button color="primary">Share</Button>
          </Tooltip>
          {props.learnMoreUrl && <Button color="primary">Learn More</Button>}
        </CardActions>
      </Card>
    </Grid>
  );
}
