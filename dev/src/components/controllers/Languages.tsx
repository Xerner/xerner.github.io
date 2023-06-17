import { useTheme } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { useAsync } from 'react-async-hook';
import languageColors from 'config/languageColors.json';
import token from 'config/token.json';

const languageColors2: { [str: string]: string } = languageColors;

export interface IGithubRepo {
	repoName: string;
	repoOwner: string;
}

const fetchLanguages = async (repoName: string, repoOwner: string) =>
	(
		await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/languages`, {
			headers: {
				Authorization: `token ${'g' + token.readonlyToken.substring(2)}`
			}
		})
	).json();

export default function Languages(props: IGithubRepo) {
	const { repoName, repoOwner } = props;
	const languages = useAsync(fetchLanguages, [repoName, repoOwner]);
	const theme = useTheme();

	if (languages.loading) {
		return (
			<>
				<Typography color="textSecondary" style={{ fontStyle: 'italic' }}>
					Loading
				</Typography>
			</>
		);
	} else if (languages.error) {
		return (
			<>
				<Typography color="textSecondary" style={{ fontStyle: 'italic' }}>
					Error fetching languages
				</Typography>
			</>
		);
	} else if (languages.result.message !== undefined) {
		return (
			<>
				<Typography color="textSecondary" style={{ fontStyle: 'italic' }}>
					Repository: {languages.result.message}
				</Typography>
			</>
		);
	}

	const languageNames = Object.keys(languages.result);
	const maxvalue = sum(Object.values(languages.result));
	const percentages = Object.values<number>(languages.result).map((val: number) => (val === 0 ? 0 : (val / maxvalue) * 100));
	const percentagesStr = percentages.map((percentage: number) =>
		Math.log10(percentage) < 2 ? percentage.toPrecision(2) : percentage.toString()
	);

	const percentBars = (
		<div>
			<span className="project-card-progress">
				{percentages.map((percentage: number, index: number) => {
					var langName = languageNames[index];
					var backgroundColor = languageColors2.hasOwnProperty(langName) ? languageColors2[langName] : theme.palette.grey[400];
					return (
						<span
							key={index}
							style={{
								width: `${percentage}%`,
								backgroundColor: backgroundColor
							}}
							className="project-card-language-bar"
						/>
					);
				})}
			</span>
		</div>
	);

	const languageDots = (
		<ul className="project-card-languages-ul">
			{languageNames.map((name: string, index: number) => {
				var backgroundColor = languageColors2.hasOwnProperty(name) ? languageColors2[name] : theme.palette.grey[400];

				return (
					<li className="d-inline" key={index}>
						<div className="project-card-languages-chip flex-items-center d-inline-flex me-3">
							<div className="octicon" style={{ backgroundColor: backgroundColor }}></div>
							{/* <svg
								className="octicon me-2"
								fill={backgroundColor}
								viewBox="0 0 16 16"
								version="1.1"
								width="16"
								height="16"
								aria-hidden="true"
							>
								<path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
							</svg> */}
							<span className="pixel-font project-card-languages-name">{name}</span>
							<span className="pixel-font" style={{ color: theme.palette.grey[400] }}>
								{percentagesStr[index]}%
							</span>
						</div>
					</li>
				);
			})}
		</ul>
	);

	return (
		<>
			{percentBars}
			{languageDots}
		</>
	);
}

function sum(arr: number[]): number {
	var sum: number = 0;
	arr.forEach((value) => (sum += value));
	return sum;
}
