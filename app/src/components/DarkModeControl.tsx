import { Tooltip } from '@material-ui/core';
import { CSSProperties, useContext } from 'react';
import { isMobileContext } from '../context';
// import BrightnessIcon from '@material-ui/icons/Brightness4';
// import BrightnessHighIcon from '@material-ui/icons/Brightness5';

interface DarkModeControlProps {
  isDarkMode: boolean;
  onClick: Function;
  style?: CSSProperties;
  className?: string;
}

// const DEFAULT_RADIUS = 96;

export default function DarkModeControl(props: DarkModeControlProps) {
  const { isDarkMode, onClick, style, className } = props;
  const isMobile: boolean = useContext(isMobileContext);

  const handleClick = () => {
    onClick(!isDarkMode);
  };

  return (
    <div style={{ ...style, zIndex: 100, display: 'inline' }}>
      {/* <IconButton style={{position: "absolute", top: height ? height/2 : DEFAULT_RADIUS/2, left: width ? width/2 : DEFAULT_RADIUS/2, color: "#00000022"}}>
        { isDarkMode ? <BrightnessIcon fontSize="large" /> : <BrightnessHighIcon fontSize="large" /> }
      </IconButton> */}
      <Tooltip title="Toggle Dark Mode">
        <input
          type="image"
          src={isDarkMode ? 'images/moon.png' : 'images/sun-1080.png'}
          alt="Dark Mode Controller"
          className={className}
          style={{
            width: isMobile ? 48 : 96,
            height: isMobile ? 48 : 96,
            // cursor: "pointer"
          }}
          onClick={handleClick}
        />
      </Tooltip>
    </div>
  );
}
