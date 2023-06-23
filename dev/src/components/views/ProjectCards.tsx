import GitHubIcon from '@material-ui/icons/GitHub';
import GameJamIcon from '@material-ui/icons/SportsEsports';
import IfElse from 'components/controllers/IfElse';
import ProjectCard from 'components/controllers/ProjectCard';
import ScrollCarousel from 'components/controllers/ScrollCarousel';
import { selectDarkMode } from 'features/themeSlice';
import { useAppSelector } from 'hooks/reduxHooks';
import CardBanner from 'components/views/CardBanner';

export default function ProjectCardsWrapper() {
    const isDarkMode = useAppSelector(selectDarkMode)

    return <div id="project-cards" style={{ height: '100vh' }} className="d-flex justify-content-center align-items-center">
        <IfElse condition={isDarkMode}>
            <img className="bg-img" src="images/backgrounds/purple-city-8000-2250-modified.jpg" alt="City background" />
            <img className="bg-img" src="images/backgrounds/blue-city-8000-2250-modified.jpg" alt="City background" />
        </IfElse>
        <div className="card-container">
            {/* <div style={{ height: '10vh' }}></div> */}
            <div className='project-card-container h-100'>
                <CardBanner title="Projects" />
                <ScrollCarousel>{ProjectCards(isDarkMode)}</ScrollCarousel>
            </div>
        </div>
    </div>
}

function ProjectCards(theme: any) {
	return [
		<ProjectCard
            key={0}
			repo={{
				name: 'Smart-City-Dashboard',
				owner: 'Jaren-Taylor'
			}}
			image={{
				url: 'images/card-images/card_smart-city-dashboard.png',
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
            key={1}
            repo={{ name: 'steamy-bot', owner: 'Xerner' }}
			image={{
				url: 'images/card-images/card_steamy-bot.png',
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
            key={2}
            repo={{ name: 'Pokemon-Battler-Unity', owner: 'Xerner' }}
			image={{
				url: 'images/card-images/card_pokemon.png',
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
            key={3}
            repo={{ name: '', owner: 'Xerner' }}
			isPrivate
			image={{
				url: 'images/card-images/card_react.png',
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
            key={4}
            repo={{ name: '', owner: 'Xerner' }}
			isPrivate
			image={{
				url: 'images/card-images/card_visual-studio.png',
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
            key={5}
            repo={{ name: '', owner: 'Xerner' }}
			isPrivate
			image={{
				url: 'images/card-images/card_excel.png',
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
            key={6}
			repo={{ name: '', owner: 'Xerner' }}
			image={{
				url: 'images/card-images/card_react.png',
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
