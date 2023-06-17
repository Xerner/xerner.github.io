// import GameJamCards from 'components/ProjectCard/GameJamCards';
// import GitHubIcon from '@material-ui/icons/GitHub';
import Stars from 'components/views/Stars';
import CloudsAndSun from './CloudsAndSun';
import ProjectCards from './ProjectCards';
import GameJamCards from './GameJamCards';

export default function MainContent() {
	return (
			<div className="d-flex flex-column justify-content-center">
				<Stars />
                <CloudsAndSun />
				<ProjectCards />
				<GameJamCards />
				{/* <footer>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Tooltip title="My Github" color="primary" arrow>
								<IconButton href="https://github.com/Xerner">
									<GitHubIcon />
								</IconButton>
							</Tooltip>
						</Grid>
					</Grid>
				</footer> */}
			</div>
	);
}
