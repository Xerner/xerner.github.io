import { useTheme } from '@material-ui/core';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { useAsync } from 'react-async-hook';
import languageColors from '../config/languageColors.json';
import token from '../config/token.json';

const languageColors2: { [str: string]: string } = languageColors;

export interface IGithubRepo {
  repoName: string;
  repoOwner: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ul: {
      listStyle: 'none  !important',
      paddingLeft: 0,
      margin: 0,
      marginTop: "8px",
    },
    a: {
      alignItems: 'center'
    },
    linkSecondary: {
      color: theme.palette.type === 'dark' ? theme.palette.grey[400] : theme.palette.grey[500]
    },
    progress: {
      height: 8,
      borderRadius: 6,
      overflow: 'hidden',
      display: "flex",
      backgroundColor: theme.palette.grey[700]
    }
  })
);

const fetchLanguages = async (repoName: string, repoOwner: string) =>
  (
    await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/languages`, {
      headers: {
        Authorization: `token ${token.publicRepoAccessOnlyToken}`
      }
    })
  ).json();

export default function Languages(props: IGithubRepo) {
  const { repoName, repoOwner } = props;
  const languages = useAsync(fetchLanguages, [repoName, repoOwner]);
  const classes = useStyles();
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
  const percentages = Object.values<number>(languages.result).map((val: number) =>
    val === 0 ? 0 : (val / maxvalue) * 100
  );
  const percentagesStr = percentages.map((percentage: number) =>
    Math.log10(percentage) < 2 ? percentage.toPrecision(2) : percentage.toString()
  );

  console.log(percentages)
  const percentBars = (
    <div>
      <span className={classes.progress}>
        {percentages.map((percentage: number, index: number) => (
          <span
            style={{ width: `${percentage}%`, backgroundColor: languageColors2[languageNames[index]] }}
          />
        ))}
      </span>
    </div>
  );

  const languageDots = (
    <ul className={classes.ul}>
      {languageNames.map((name: string, index: number) => (
        <li className="d-inline">
          <div className="flex-items-center d-inline-flex me-3">
            <svg
              className="octicon me-2"
              fill={languageColors2.hasOwnProperty(name) ? languageColors2[name] : theme.palette.type === "dark" ? "#fff" : theme.palette.grey[400]}
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
            </svg>
            <span className="fw-bold me-1">{name}</span>
            <span className={classes.linkSecondary}>{percentagesStr[index]}%</span>
          </div>
        </li>
      ))}
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
