import GitHubIcon from '@material-ui/icons/GitHub';
import GameJamIcon from '@material-ui/icons/SportsEsports';
import IfElse from 'components/controllers/IfElse';
import ProjectCard from 'components/controllers/ProjectCard';
import ScrollCarousel from 'components/controllers/ScrollCarousel';
import { selectDarkMode } from 'features/themeSlice';
import { useAppSelector } from 'hooks/reduxHooks';

export default function ProjectCardsLayout() {
    const isDarkMode = useAppSelector(selectDarkMode)

    return <div id="project-cards" style={{ height: '100vh' }}>
        <IfElse condition={isDarkMode}>
            <img className="bg-img" src="images/backgrounds/purple-city-8000-2250-modified.jpg" alt="City background" />
            <img className="bg-img" src="images/backgrounds/blue-city-8000-2250-modified.jpg" alt="City background" />
        </IfElse>
        <div className="card-container">
            <div style={{ height: '20vh' }}></div>
            <div className={isDarkMode ? 'project-card-container' : 'project-card-container'}>
                <div className="card-banner">
                    <img src="images/title-banner-left.png" alt="title-banner-left" className="pixel card-banner-image" />
                    <h1
                        className="pixel-font card-title card-light-green text-center"
                        style={{ fontFamily: 'futura', border: 'none' }}
                    >
                        Projects
                    </h1>
                    <img src="images/title-banner-right.png" alt="title-banner-right" className="pixel card-banner-image" />
                </div>

                <ScrollCarousel>{ProjectCards(isDarkMode)}</ScrollCarousel>
            </div>
        </div>
    </div>
}

function ProjectCards(theme: any) {
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
				{ title: 'Itch.io page', href: 'https://mrmeik.itch.io/smart-city-dashboard', icon: <GameJamIcon /> },
				{ title: 'Github', href: 'https://github.com/Xerner/OU-Game-Jam-2021', icon: <GitHubIcon /> },
				{ title: 'Github', href: 'https://github.com/Xerner/OU-Game-Jam-2021', icon: <GitHubIcon /> }
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
			iconButtons={[{ title: 'Github', href: 'https://github.com/Xerner/steamy-bot', icon: <GitHubIcon /> }]}
		/>,

		<ProjectCard
			repo={{ name: 'Pokemon-Battler-Unity', owner: 'Xerner' }}
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
				{ title: 'Pokebattler Client', href: 'https://github.com/Xerner/pokebattler', icon: <GitHubIcon /> },
				{ title: 'Pokebattler Server', href: 'https://github.com/Xerner/pokebattler-server', icon: <GitHubIcon /> }
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
			iconButtons={[]}
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
			iconButtons={[]}
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
			iconButtons={[]}
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
			iconButtons={[{ title: 'Xerner.github.io', href: 'https://github.com/Xerner/xerner.github.io', icon: <GitHubIcon /> }]}
		/>
	];
}
