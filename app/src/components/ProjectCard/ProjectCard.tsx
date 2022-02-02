import { Box, CardMedia, Chip, Dialog, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Languages from '../Languages';
import { CSSProperties, useState } from 'react';
// import { isMobile } from 'functions/isMobile';
import clsx from 'clsx';
// import { animated, useSpring } from 'react-spring';
// import { useState } from 'react';

interface IProjectCard {
	isPrivate?: boolean;
	repo: IProjectCardRepo;
	name: string;
	subtitle?: string;
	chips: string[];
	desc: JSX.Element | string;
	image?: IProjectCardImage | IProjectCardImage[];
	imageStyle?: CSSProperties;
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

const useStyles = () =>
	makeStyles((theme: Theme) =>
		createStyles({
			projectCard: {
				backgroundColor: theme.palette.background.paper,
				border: `1px solid ${theme.palette.primary.main}`,
				transition: 'box-shadow 500ms cubic-bezier(0.33, 1, 0.68, 1) !important',
				'-webkit-transition': 'box-shadow 500ms cubic-bezier(0.33, 1, 0.68, 1) !important',
				'&:hover': {
					boxShadow: `6px 6px ${theme.palette.primary.main}, -6px -6px ${theme.palette.primary.light}`
				}
			},
			title: {
				fontSize: 24
				// marginBottom: 4
			},
			languages: {
				backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100]
			},
			actions: {
				flex: 0,
				borderLeft: `1px solid ${theme.palette.primary.dark}`
			},
			mediaContainer: {
				borderLeft: `1px solid ${theme.palette.primary.dark}`,
				width: 200,
				display: 'flex',
				alignItems: 'center'
			},
			chips: {
				display: 'flex',
				// justifyContent: 'flex-start',
				flexWrap: 'wrap',
				'& > *': {
					margin: theme.spacing(0.5)
				},
				paddingTop: 0,
				paddingBottom: 4
			}
		})
	)();

const useCardMediaStyles = makeStyles((theme: Theme) =>
	createStyles({
		media: {
			objectFit: 'contain'
		}
	})
);

// const AnimatedCard = animated(Card);

export default function ProjectCard(props: IProjectCard) {
	const { repo, name, subtitle, chips, desc, isPrivate, image, imageStyle, iconButtons } = props;
	const classes = useStyles();
	const cardMediaClasses = useCardMediaStyles();
	const [mediaOpen, setMediaOpen] = useState(false);

	const handleClose = () => setMediaOpen(false);

	const _image = image && Array.isArray(image) ? image[0] : image;

	return (
		// + ' shadow-split'
		<div className={clsx('project-card', classes.projectCard)}>
			<div className='project-card-details'>
				<CardContent>
					{/* Title */}
					<Typography className={classes.title}>{name}</Typography>

					{/* Subtitle */}
					{subtitle !== undefined && subtitle !== '' && (
						<Typography className="mb-2" color="textSecondary">
							{subtitle}
						</Typography>
					)}

					{/* Desc */}
					<Typography variant="body1" component="p">
						{desc}
					</Typography>
				</CardContent>

				{/* Chips */}
				<CardContent className={classes.chips}></CardContent>

				{/* Languages & Chips */}
				<CardContent className={classes.languages}>
					<div className={classes.chips}>
						{chips.map((chip, index) => (
							<Chip key={index} size="small" label={chip} />
						))}
					</div>
					{isPrivate !== undefined ? (
						<Languages repoName={repo.name} repoOwner={repo.owner} />
					) : (
						<Typography variant="body1" color="textSecondary" style={{ fontStyle: 'italic' }}>
							Private repository
						</Typography>
					)}
				</CardContent>
			</div>
			{/* Image(s) */}
			{_image !== undefined && _image.url !== '' ? (
				<div className={classes.mediaContainer}>
					<CardMedia
						component="img"
						classes={cardMediaClasses}
						alt={_image.alt}
						image={_image.url}
						title={_image.title}
						style={imageStyle}
					/>
				</div>
			) : (
				<Box
					className={classes.mediaContainer}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<Typography color="textSecondary" align="center">
						No Image
					</Typography>
				</Box>
			)}
			{iconButtons !== undefined && (
				<Grid container direction="column" className={classes.actions}>
					{iconButtons.map((iconButton, index) => (
						<Grid item key={index}>
							{iconButton}
						</Grid>
					))}
				</Grid>
			)}
			<Dialog onClose={handleClose} open={mediaOpen}></Dialog>
		</div>
	);
}
