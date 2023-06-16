import ProjectCard from './ProjectCard';
import { IconButton, Tooltip } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import ShareIcon from '@material-ui/icons/Share';
import GameJamIcon from '@material-ui/icons/SportsEsports';

export default function GameJamCards(theme: any) {
	return [
		<ProjectCard
			repo={{
				name: 'OU-Game-Jam-2021',
				owner: 'Xerner'
			}}
			image={{
				url: 'images/deepspace.png',
				alt: 'Deepspace icon',
				title: 'Deepspace'
			}}
			name="Deepspace"
			subtitle="Unity | 48 hour Game Jam!"
			chips={['Unity', 'C#', 'Bosca Ceoil', 'Aseprite']}
			desc="A daring battle between a space engineer and an evil robot"
			iconButtons={[
				{
					title: 'Oakland University 2021 Game Jam!',
					href: 'https://itch.io/jam/ou-winter-2021-game-jam/entries',
					icon: <GameJamIcon />
				},
				{ title: 'Github', href: 'https://github.com/Xerner/OU-Game-Jam-2021', icon: <GitHubIcon /> }
			]}
		/>
	];
}
