import { selectDarkMode } from 'features/themeSlice';
import { useAppSelector } from 'hooks/reduxHooks';
import ScrollCarousel from 'components/controllers/ScrollCarousel';
import IfElse from 'components/controllers/IfElse';
import CardBanner from 'components/views/CardBanner';
import ProjectCard from 'components/controllers/ProjectCard';
import GitHubIcon from '@material-ui/icons/GitHub';
import GameJamIcon from '@material-ui/icons/SportsEsports';

export default function GameJamCardsWrapper() {
    const isDarkMode = useAppSelector(selectDarkMode)

    return <div id="project-cards" style={{ height: '100vh' }}>
        <IfElse condition={isDarkMode}>
            <img className="bg-img" src="images/backgrounds/underground-1500x1500.png" alt="City background" />
            <img className="bg-img" src="images/backgrounds/underground-1500x1500.png" alt="City background" />
        </IfElse>
        <div className="card-container">
            <div style={{ height: '20vh' }}></div>
            <div className={isDarkMode ? 'project-card-container' : 'project-card-container'}>
                <CardBanner title="Game Jams" />
                <ScrollCarousel>{GameJamCards(isDarkMode)}</ScrollCarousel>
            </div>
        </div>
    </div>
}

function GameJamCards(theme: any) {
	return [
		<ProjectCard
            key={0}
			repo={{
				name: 'OU-Game-Jam-2021',
				owner: 'Xerner'
			}}
			image={{
				url: 'images/card-images/deepspace.png',
				alt: 'Deepspace icon',
				title: 'Deepspace'
			}}
			name="Deepspace"
			subtitle="Unity | 48 hour Game Jam"
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