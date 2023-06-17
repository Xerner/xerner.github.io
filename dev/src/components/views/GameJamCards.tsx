import { selectDarkMode } from 'features/themeSlice';
import { useAppSelector } from 'hooks/reduxHooks';
import ScrollCarousel from 'components/controllers/ScrollCarousel';
import IfElse from 'components/controllers/IfElse';
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
                <div className="card-banner">
                    <img src="images/title-banner-left.png" alt="title-banner-left" className="pixel card-banner-image" />
                    <h1
                        className="pixel-font card-title card-light-green text-center"
                        style={{ fontFamily: 'futura', border: 'none' }}
                    >
                        Game Jams
                    </h1>
                    <img src="images/title-banner-right.png" alt="title-banner-right" className="pixel card-banner-image" />
                </div>

                <ScrollCarousel>{GameJamCards(isDarkMode)}</ScrollCarousel>
            </div>
        </div>
    </div>
}

function GameJamCards(theme: any) {
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