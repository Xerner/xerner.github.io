import ProjectCard from './ProjectCard';
import { IconButton, Tooltip } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import ShareIcon from '@material-ui/icons/Share';
import GameJamIcon from '@material-ui/icons/SportsEsports';

export default function ProjectCards(theme: any) {
	return [
		<ProjectCard
			repo={{
				name: 'Smart-City-Dashboard',
				owner: 'Jaren-Taylor'
			}}
			image={{
				url: 'images/smart-city-dashboard.png',
				alt: 'Smart City Dashboard screenshot',
				title: 'Smart City Dashboard'
			}}
			name="Smart City Dashboard"
			subtitle="City Simulation | Senior Project"
			chips={['Unity', 'C#', 'Google Maps API', 'Agile', 'Determination']}
			desc="A city builder and simulator with the ability to integrate smart technologies in the city"
			iconButtons={[
				<Tooltip title="Itch.io page" color="primary" arrow>
					<IconButton
						style={{
							color: theme.palette.primary.light
						}}
						href="https://mrmeik.itch.io/smart-city-dashboard"
					>
						<GameJamIcon />
					</IconButton>
				</Tooltip>,
				<Tooltip title="Github" color="primary" arrow>
					<IconButton
						style={{
							color: theme.palette.primary.light
						}}
						href="https://github.com/Xerner/OU-Game-Jam-2021"
					>
						<GitHubIcon />
					</IconButton>
				</Tooltip>,
				<Tooltip title="Share" color="primary" arrow>
					<IconButton
						style={{
							color: theme.palette.primary.light
						}}
					>
						<ShareIcon />
					</IconButton>
				</Tooltip>
			]}
		/>,

		<ProjectCard
			repo={{ name: 'steamy-bot', owner: 'Xerner' }}
			image={{
				url: 'images/steamy-bot.png',
				alt: 'Smart City Dashboard screenshot',
				title: 'Smart City Dashboard'
			}}
			name="Steamy Bot"
			subtitle="Discord Bot"
			chips={['Node.js', 'Discord.js']}
			desc="Yet another Discord music bot that plays songs from youtube"
			iconButtons={[
				<Tooltip title="Github" color="primary" arrow>
					<IconButton
						style={{
							color: theme.palette.primary.light
						}}
						href="https://github.com/Xerner/steamy-bot"
					>
						<GitHubIcon />
					</IconButton>
				</Tooltip>,
				<Tooltip title="Share" color="primary" arrow>
					<IconButton
						style={{
							color: theme.palette.primary.light
						}}
					>
						<ShareIcon />
					</IconButton>
				</Tooltip>
			]}
		/>,

		<ProjectCard
			repo={{ name: 'pokebattler', owner: 'Xerner' }}
			image={{
				url: 'images/pokemon.png',
				alt: 'Pokemon screenshot',
				title: 'Pokemon'
			}}
			isPrivate
			name="Pokemon Battler"
			subtitle="Video Game"
			chips={['GameMaker Studio 2', 'MongoDB', 'Mongoose', 'Node.js', 'TCP/IP']}
			desc="An autochess style Pokemon battler with a centralized multiplayer server"
			iconButtons={[
				<Tooltip title="Pokebattler Client" color="primary" arrow>
					<IconButton
						style={{
							color: theme.palette.primary.light
						}}
						href="https://github.com/Xerner/pokebattler"
					>
						<GitHubIcon />
					</IconButton>
				</Tooltip>,
				<Tooltip title="Pokebattler Server" color="primary" arrow>
					<IconButton
						style={{
							color: theme.palette.primary.light
						}}
						href="https://github.com/Xerner/pokebattler-server"
					>
						<GitHubIcon />
					</IconButton>
				</Tooltip>,
				<Tooltip title="Share" color="primary" arrow>
					<IconButton
						style={{
							color: theme.palette.primary.light
						}}
					>
						<ShareIcon />
					</IconButton>
				</Tooltip>
			]}
		/>,

		<ProjectCard
			repo={{ name: '', owner: 'Xerner' }}
			isPrivate
			image={{
				url: 'images/react.svg',
				alt: 'React',
				title: 'React'
			}}
			imageStyle={{ padding: 12 }}
			name="Work Request System"
			subtitle="React Front-End"
			chips={['React', 'Bootstrap', 'Material UI', 'IIS']}
			desc="A mockup front-end work request management system"
			iconButtons={[
				<Tooltip title="Share" color="primary" arrow>
					<IconButton
						style={{
							color: theme.palette.primary.light
						}}
					>
						<ShareIcon />
					</IconButton>
				</Tooltip>
			]}
		/>,

		<ProjectCard
			repo={{ name: '', owner: 'Xerner' }}
			isPrivate
			image={{
				url: 'images/visual-studio-icon.png',
				alt: 'Visual Studio',
				title: 'Visual Studio'
			}}
			name="Carbon Canister Working Capacity Testing Analysis"
			subtitle="Data Mining &amp; Analysis"
			chips={['C#', '.Net 4.6.5', 'Windows Form', 'Excel']}
			desc="Data mining, analysis, and reporting of carbon canister GWC or BWC testing"
			iconButtons={[
				<Tooltip title="Share" color="primary" arrow>
					<IconButton
						style={{
							color: theme.palette.primary.light
						}}
					>
						<ShareIcon />
					</IconButton>
				</Tooltip>
			]}
		/>,
		<ProjectCard
			repo={{ name: '', owner: 'Xerner' }}
			isPrivate
			image={{
				url: 'images/excel-icon.png',
				alt: 'Excel VBA',
				title: 'Excel VBA'
			}}
			name="Excel Pareto Chart Generator"
			subtitle="Excel VBA Addin"
			chips={['Excel', 'VBA']}
			desc="Quick and easy way for an Excel user to generate a Pareto chart with table-structured data"
			iconButtons={[
				<Tooltip title="Share" color="primary" arrow>
					<IconButton
						style={{
							color: theme.palette.primary.light
						}}
					>
						<ShareIcon />
					</IconButton>
				</Tooltip>
			]}
		/>,

		<ProjectCard
			repo={{ name: '', owner: 'Xerner' }}
			image={{
				url: 'images/react.svg',
				alt: 'React',
				title: 'React'
			}}
			imageStyle={{ padding: 12 }}
			isPrivate
			name="This Website 🎉"
			subtitle="React Front-end"
			chips={['React', 'Material-UI']}
			desc="A super-mega-awesome website that changes colors if you click the sun :O"
			iconButtons={[
				<Tooltip title="Xerner.github.io" color="primary" arrow>
					<IconButton
						style={{
							color: theme.palette.primary.light
						}}
						href="https://github.com/Xerner/xerner.github.io"
					>
						<GitHubIcon />
					</IconButton>
				</Tooltip>,
				<Tooltip title="Share" color="primary" arrow>
					<IconButton
						style={{
							color: theme.palette.primary.light
						}}
					>
						<ShareIcon />
					</IconButton>
				</Tooltip>
			]}
		/>
	];
}
