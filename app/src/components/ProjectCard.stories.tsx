import GitHubIcon from '@material-ui/icons/GitHub';
import ShareIcon from '@material-ui/icons/Share';
import GameJamIcon from '@material-ui/icons/SportsEsports';
import { IconButton, Tooltip } from '@material-ui/core';
import { Meta } from '@storybook/react';
import ProjectCard from './ProjectCard';

export default {
  component: ProjectCard,
  title: 'Components/ProjectCard',
} as Meta;

export const ProjectExample: React.VFC<{}> = () => <ProjectCard
repo={{ name: 'Smart-City-Dashboard', owner: 'Jaren-Taylor' }}
image={{
  url: 'images/smart-city-dashboard.png',
  alt: 'Smart City Dashboard screenshot',
  title: 'Smart City Dashboard'
}}
name="Smart City Dashboard"
subtitle="Unity | Senior Project"
desc="A city builder and simulator with the ability to integrate smart technologies in the city"
iconButtons={[
  <Tooltip title="Itch.io page" color="primary" arrow>
    <IconButton href="https://mrmeik.itch.io/smart-city-dashboard">
      <GameJamIcon color="primary" />
    </IconButton>
  </Tooltip>,
  <Tooltip title="Github" color="primary" arrow>
    <IconButton href="https://github.com/Xerner/OU-Game-Jam-2021">
      <GitHubIcon color="primary" />
    </IconButton>
  </Tooltip>,
  <Tooltip title="Share" color="primary" arrow>
    <IconButton color="primary">
      <ShareIcon color="primary" />
    </IconButton>
  </Tooltip>
]}
/>;