import { Box, CardMedia, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Languages from './Languages';

interface IProjectCard {
  isPrivate?: boolean;
  repo: IProjectCardRepo;
  name: string;
  subtitle: string;
  desc: JSX.Element | string;
  image?: IProjectCardImage;
  iconButtons?: JSX.Element[];
}

interface IProjectCardImage {
  url: string;
  alt?: string;
  title?: string;
  imageFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}

interface IProjectCardRepo {
  name: string;
  owner: string;
}

//const CARD_WIDTH = 576;
const CARD_HEIGHT = 265;
const CONTENT_WIDTH = "60%"
const IMAGE_HEIGHT = 400;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      borderBottom: `4px solid ${
        theme.palette.type === 'dark' ? 'purple' : theme.palette.primary.light
      }`,
      height: CARD_HEIGHT,
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      width: CONTENT_WIDTH,
    },
    media: {
      backgroundColor: 'gainsboro',
      width: "40%"
    },
    title: {
      fontSize: 24,
      marginBottom: 4
    },
    languages: {
      padding: '12px 12px',
      backgroundColor:
        theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100]
    }
  })
);

export default function ProjectCard(props: IProjectCard) {
  const { repo, name, subtitle, desc, isPrivate, image, iconButtons } = props;

  const classes = useStyles();

  return (
    <Grid item className="w-100 rise-anim">
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent>
            <Typography className={classes.title}>{name}</Typography>
            <Typography className="mb-2" color="textSecondary">
              {subtitle}
            </Typography>
            <Typography variant="body1" component="p" className="mb-2">
              {desc}
            </Typography>
            {isPrivate && (
              <Typography
                variant="body1"
                color="textSecondary"
                className="mt-4"
                style={{ fontStyle: 'italic' }}
              >
                Private repository
              </Typography>
            )}
          </CardContent>
          {!isPrivate && (
            <div className={classes.languages}>
              <Languages repoName={repo.name} repoOwner={repo.owner} />
            </div>
          )}
          <CardActions>
            {iconButtons !== undefined && (
              <Grid container justifyContent="flex-end" alignContent="center">
                {iconButtons.map((iconButton) => (
                  <Grid item>{iconButton}</Grid>
                ))}
              </Grid>
            )}
          </CardActions>
        </div>
        {image ? (
          <CardMedia
            component="img"
            className={classes.media}
            alt={image.alt}
            image={image.url}
            height={IMAGE_HEIGHT}
            title={image.title}
            style={{ objectFit: image.imageFit ? image.imageFit : 'cover' }}
          />
        ) : (
          <Box style={{ height: 140, paddingTop: 70 }}>
            <Typography color="textSecondary" align="center">
              No Image
            </Typography>
          </Box>
        )}
      </Card>
    </Grid>
  );
}
