import { Chip, Tooltip } from '@material-ui/core';
import { CSSProperties } from 'react';
import Languages from './Languages';
import IfElse from './IfElse';

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
    const _image = image && Array.isArray(image) ? image[0] : image;
    const cardPrefix = name + '-project-card-';

    return (
        <div className="project-card">
            {/* Title and Body */}
            <div
                id={cardPrefix + 'project-card-top'}
                className="project-card-top green-30-bg green-20-shadow d-flex justify-content-between"
            >
                <div id={cardPrefix + 'info'} className="project-card-info  h-100">
                    {/* Title */}
                    <div className="project-card-title green-35-bg green-20-shadow p-3">
                        <h3 id={cardPrefix + 'title'}>
                            {name}
                        </h3>
                        {/* Subtitle */}
                        {subtitle !== undefined && subtitle !== '' && (
                            <div id={cardPrefix + 'subtitle'} className="text-secondary">
                                {subtitle}
                            </div>
                        )}
                    </div>

                    <div className="p-3 h-100">
                        

                        {/* Desc */}
                        <div id={cardPrefix + 'body'} className="project-card-description">
                            {desc}
                        </div>
                    </div>
                </div>

                {/* Image */}
                {/* <div id={cardPrefix + 'image-wrapper'} className="project-card-image-wrapper"> */}
                <IfElse condition={_image !== undefined && _image.url !== ''}>
                    <img
                        id={cardPrefix + 'image'}
                        className="project-card-image green-35-bg green-20-border-left"
                        alt={_image?.alt}
                        src={_image?.url}
                        title={_image?.title}
                        style={imageStyle}
                    />
                    <div
                        id={cardPrefix + 'no-image'}
                        className="project-card-image green-35-bg green-20-border-left"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <div className="text-secondary text-center">
                            No Image
                        </div>
                    </div>
                </IfElse>
                {/* </div> */}
            </div>

            {/* Languages and Buttons*/}
            <div className="green-35-bg">
                <div id={cardPrefix + 'languages'} className="project-card-languages">
                    {/* Languages & Chips */}
                    <div id={cardPrefix + 'chips'} className="project-card-chips">
                        {chips.map((chip, index) => (
                            <Chip
                                key={index}
                                size="small"
                                label={chip}
                                className="project-card-chip"
                                style={{ color: 'white' }}
                            />
                        ))}
                    </div>
                    <IfElse condition={isPrivate === true}>
                        <div className="text-secondary">
                            Private repository
                        </div>
                        <Languages repoName={repo.name} repoOwner={repo.owner} />
                    </IfElse>
                </div>

                {/* Actions */}
                <div id={cardPrefix + 'action'} className="project-card-actions">
                    {/* TODO: Add a disabled button with a disabled icon for when no actions are available */}
                    {iconButtons !== undefined &&
                        iconButtons.map((iconButton, index) => (
                            <Tooltip key={index} title={iconButton.title} color="primary" arrow>
                                <a className="project-card-action py-2" href={iconButton.href} rel="noreferrer" target="_blank">
                                    {iconButton.icon}
                                </a>
                            </Tooltip>
                        ))}
                </div>
            </div>
        </div>
    );
}
