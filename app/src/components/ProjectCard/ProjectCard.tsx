import { Chip, Typography, Tooltip, useTheme } from '@material-ui/core';
import { CSSProperties } from 'react';
import Languages from '../Languages';
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

export default function ProjectCard(props: IProjectCard) {
	const { repo, name, subtitle, chips, desc, isPrivate, image, imageStyle, iconButtons } = props;
	const theme = useTheme();
	const _image = image && Array.isArray(image) ? image[0] : image;

	const cardPrefix = name + '-project-card-';

	return (
		<div className="project-card">
			{/* Title and Body */}
			<div id={cardPrefix + 'project-card-top'} className="project-card-top card-green">
				<div id={cardPrefix + 'description'} className="project-card-description">
					{/* Title */}
					<Typography id={cardPrefix + 'title'} variant="h3" className="pixel-font">
						{name}
					</Typography>

					{/* Subtitle */}
					{subtitle !== undefined && subtitle !== '' && (
						<Typography id={cardPrefix + 'subtitle'} variant="subtitle2" style={{color: theme.palette.grey[100]}} className="pixel-font">
							{subtitle}
						</Typography>
					)}

					{/* Desc */}
					<Typography id={cardPrefix + 'body'} variant="body1" component="p" className="pixel-font">
						{desc}
					</Typography>
				</div>

				{/* Image(s) and Actions */}
				<div id={cardPrefix + 'project-card-image-and-actions'} className="project-card-image-and-actions">
					<div id={cardPrefix + 'image-wrapper'} className="project-card-image-wrapper card-green">
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

					{/* Actions */}
					<div id={cardPrefix + 'action'} className="project-card-actions">
						<div className="project-card-actions-background-wrapper">
							<div className="project-card-actions-background"></div>
						</div>
						{iconButtons !== undefined &&
							iconButtons.map((iconButton, index) => (
								<Tooltip key={index} title={iconButton.title} color="primary" arrow>
									<a className="project-card-action" href={iconButton.href} rel="noreferrer" target="_blank">
										{iconButton.icon}
									</a>
								</Tooltip>
							))}
					</div>
				</div>
			</div>

			{/* Languages */}
			<div id={cardPrefix + 'languages'} className="project-card-languages card-dark-green">
				{/* Languages & Chips */}
				<div id={cardPrefix + 'chips'} className="project-card-chips">
					{chips.map((chip, index) => (
						<Chip
							key={index}
							size="small"
							label={chip}
							className="pixel-font project-card-chip"
							style={{ fontSize: '1.25rem', color: "white" }}
						/>
					))}
				</div>
				<IfElse condition={isPrivate === true}>
					<Typography variant="body1" color="textSecondary" style={{ fontStyle: 'italic' }}>
						Private repository
					</Typography>
					<Languages repoName={repo.name} repoOwner={repo.owner} />
				</IfElse>
			</div>
		</div>
	);
}
