import { useContext } from 'react';
import DarkModeControl from './DarkModeControl';
import { isMobileContext } from "../context";

interface ControlsProps {
  darkMode: boolean;
  setDarkMode: Function;
  hasPixelFont: boolean;
  setHasPixelFont: Function;
}

export default function Controls(props: ControlsProps) {
  const { setDarkMode } = props;
  // const [open, setOpen] = useState(false);
  const isMobile_ = useContext(isMobileContext);

  // const toggleDrawer = (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) =>
  //   setOpen(isOpen);

  // const rotationHeight = 2500;
  // const rotationWidth = 2500;
  // const sunDiameter = 96;

  return (
    <DarkModeControl
      onClick={setDarkMode}
      style={{ position: 'absolute', top: isMobile_ ? 10 : 100, left: isMobile_ ? 10 : "10%" }}
      // className="spin"
    />
    // <div style={{ width: '100%', position: 'absolute', overflow: 'hidden', padding: sunDiameter }}>
    //   <div
    //     style={{
    //       position: 'relative',
    //       top: 50,
    //       left: `calc(50% - (${rotationWidth}px / 2))`,
    //       height: rotationHeight,
    //       width: rotationWidth,
    //       transform: 'rotate(0deg)',
    //       // border: '1px solid white',
    //       borderRadius: '50%',
    //       // zIndex: 10,
    //       overflow: 'hidden'
    //     }}
    //     // className="spin"
    //   >
    //     <DarkModeControl
    //       onClick={setDarkMode}
    //       style={{ position: 'absolute', top: 0, left: `calc(50% - (${sunDiameter}px / 2))` }}
    //       // className="spin"
    //     />
    //     {/* <img
    //       src="images/sun-1080.png"
    //       alt="Sun"
    //       width="96"
    //       height="96"
    //       style={{ position: 'absolute', top: 0, left: `calc(50% - (${sunDiameter}px / 2))` }}
    //       // className="spin"
    //     /> */}
    //     {/* <img
    //       src="images/sun-1080.png"
    //       alt="Sun"
    //       width="96"
    //       height="96"
    //       style={{ position: 'absolute', top: rotationHeight-sunDiameter / 2, left: `calc(50% - (${sunDiameter}px / 2))` }}
    //       // className="spin"
    //     />
    //     <img
    //       src="images/sun-1080.png"
    //       alt="Sun"
    //       width="96"
    //       height="96"
    //       style={{ position: 'absolute', top: `calc(50% - (${sunDiameter}px / 2))`, left: -sunDiameter / 2 }}
    //       // className="spin"
    //     />
    //     <img
    //       src="images/sun-1080.png"
    //       alt="Sun"
    //       width="96"
    //       height="96"
    //       style={{ position: 'absolute', top: `calc(50% - (${sunDiameter}px / 2))`, left: rotationWidth-sunDiameter / 2 }}
    //       // className="spin"
    //     /> */}
    //   </div>
    // </div>
  );
}
