import { CardMedia, Chip, Dialog, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
// import CardActions from '@material-ui/core/CardActions';
import Languages from '../Languages';
import { CSSProperties, useState } from 'react';
// import { isMobile } from 'functions/isMobile';
import clsx from 'clsx';
// import { animated, useSpring } from 'react-spring';
// import { useState } from 'react';
import IfElse from '../util/IfElse';

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
				transition: 'box-shadow 500ms cubic-bezier(0.33, 1, 0.68, 1) !important',
				'-webkit-transition': 'box-shadow 500ms cubic-bezier(0.33, 1, 0.68, 1) !important',
				'&:hover': {
					boxShadow: `6px 6px ${theme.palette.primary.main}, -6px -6px ${theme.palette.primary.light}`
				}
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
		<div className={clsx('project-card', classes.projectCard)}>
			{/* Title and Body */}
			<div id="project-card-description-and-image" className="project-card-description-and-image">
				<div id="project-card-description-wrapper" className="project-card-description-wrapper">
					<div id="project-card-description" className="project-card-description card-orange">
						{/* Title */}
						<Typography id="project-card-title" className="project-card-title">
							{name}
						</Typography>

						{/* Subtitle */}
						{subtitle !== undefined && subtitle !== '' && (
							<Typography id="project-card-subtitle" color="textSecondary">
								{subtitle}
							</Typography>
						)}

						{/* Desc */}
						<Typography id="project-card-body" variant="body1" component="p">
							{desc}
						</Typography>
					</div>
				</div>

				{/* Image(s) */}
				<div id="project-card-image" className="project-card-image card-orange">
					<IfElse condition={_image !== undefined && _image.url !== ''}>
						<div id="project-card-image">
							<CardMedia
								component="img"
								classes={cardMediaClasses}
								alt={_image?.alt}
								image={_image?.url}
								title={_image?.title}
								style={imageStyle}
							/>
						</div>
						<div
							id="project-card-no-image"
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							<Typography color="textSecondary" align="center">
								No Image
							</Typography>
						</div>
					</IfElse>
				</div>
			</div>

			{/* Languages & Chips */}
			<div id="project-card-languages" className="project-card-languages card-orange">
				<div id="project-card-chips" className="project-card-chips">
					{chips.map((chip, index) => (
						<Chip key={index} size="small" label={chip} className="project-card-chip" />
					))}
				</div>
				{isPrivate !== undefined ? (
					<Languages repoName={repo.name} repoOwner={repo.owner} />
				) : (
					<Typography variant="body1" color="textSecondary" style={{ fontStyle: 'italic' }}>
						Private repository
					</Typography>
				)}
			</div>

			<div id="project-card-icon-buttons" className="project-card-icon-buttons">
				{iconButtons !== undefined && (
					<Grid container spacing={2}>
						{iconButtons.map((iconButton, index) => (
							<Grid item key={index} className="card-orange">
								{iconButton}
							</Grid>
						))}
					</Grid>
				)}
			</div>
			<Dialog onClose={handleClose} open={mediaOpen}></Dialog>
		</div>
	);
}
