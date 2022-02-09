import { Chip, Typography, IconButton, Tooltip } from '@material-ui/core';
// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Languages from '../Languages';
import { CSSProperties } from 'react';
// import clsx from 'clsx';
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
	iconButtons?: IProjectCardActionButton[];
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

interface IProjectCardActionButton {
	title: React.ReactElement | string;
	icon: React.ReactElement;
	href: string;
}

// const useStyles = () =>
// 	makeStyles((theme: Theme) =>
// 		createStyles({
// 			projectCard: {
// 				// transition: 'box-shadow 500ms cubic-bezier(0.33, 1, 0.68, 1) !important',
// 				// '-webkit-transition': 'box-shadow 500ms cubic-bezier(0.33, 1, 0.68, 1) !important',
// 				// '&:hover': {
// 				// 	boxShadow: `6px 6px ${theme.palette.primary.main}, -6px -6px ${theme.palette.primary.light}`
// 				// }
// 			}
// 		})
// 	)();

export default function ProjectCard(props: IProjectCard) {
	const { repo, name, subtitle, chips, desc, isPrivate, image, imageStyle, iconButtons } = props;
	// const classes = useStyles();

	const _image = image && Array.isArray(image) ? image[0] : image;

	const cardPrefix = name + '-project-card-';

	return (
		<div className="project-card card-green-thicc">
			{/* Title and Body */}
			<div id={cardPrefix + 'description-and-image'} className="project-card-description-and-image">
				<div id={cardPrefix + 'description-wrapper'} className="project-card-description-wrapper">
					<div id={cardPrefix + 'description'} className="project-card-description">
						{/* Title */}
						<Typography id={cardPrefix + 'title'} variant="h3" className="pixel-font">
							{name}
						</Typography>

						{/* Subtitle */}
						{subtitle !== undefined && subtitle !== '' && (
							<Typography id={cardPrefix + 'subtitle'} variant="subtitle2" color="textSecondary" className="pixel-font">
								{subtitle}
							</Typography>
						)}

						{/* Desc */}
						<Typography id={cardPrefix + 'body'} variant="body1" component="p" className="pixel-font">
							{desc}
						</Typography>
					</div>
				</div>

				{/* Image(s) */}
				<div id={cardPrefix + 'image-wrapper'} className="project-card-image-wrapper card-green-2">
					<IfElse condition={_image !== undefined && _image.url !== ''}>
						<img
							id={cardPrefix + 'image'}
							className="project-card-image"
							alt={_image?.alt}
							src={_image?.url}
							title={_image?.title}
							style={imageStyle}
						/>
						<div
							id={cardPrefix + 'no-image'}
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

			{/* Languages & Actions */}
			<div id={cardPrefix + 'languages-and-actions'} className="project-card-languages-and-actions">
				<div id={cardPrefix + 'languages'} className="project-card-languages inset-card-green-shallow-thicc">
					{/* Languages & Chips */}
					<div id={cardPrefix + 'chips'} className="project-card-chips">
						{chips.map((chip, index) => (
							<Chip
								key={index}
								size="small"
								label={chip}
								className="pixel-font project-card-chip"
								style={{ fontSize: '1.25rem' }}
							/>
						))}
					</div>
					<IfElse condition={isPrivate !== undefined}>
						<Languages repoName={repo.name} repoOwner={repo.owner} />
						<Typography variant="body1" color="textSecondary" style={{ fontStyle: 'italic' }}>
							Private repository
						</Typography>
					</IfElse>
				</div>

				{/* Actions */}
				<IfElse condition={iconButtons !== undefined && iconButtons.length > 0}>
					<div id={cardPrefix + 'action'} className="project-card-actions">
						{iconButtons !== undefined &&
							iconButtons.map((iconButton, index) => (
								<Tooltip key={index} title={iconButton.title} color="primary" arrow>
									<IconButton
										// style={{
										// 	// color: theme.palette.primary.light
										// }}
										className="project-card-action"
										size="small"
										href={iconButton.href}
										target="_blank"
									>
										{iconButton.icon}
									</IconButton>
								</Tooltip>
							))}
					</div>
				</IfElse>
			</div>
		</div>
	);
}
