import { isMobile } from 'functions/isMobile';
import useIsDarkMode from 'hooks/useIsDarkMode';
import { CSSProperties } from 'react';
import { useEffect, useState } from 'react';
import PixelSentence from './PixelSentence';

interface MyNameProps {
  playAnimation: boolean;
  style?: CSSProperties;
}

const animations = [
  ['animate__fadeIn'],
  ['animate__fadeInRight', 'animate__fadeInLeft', 'animate__fadeInUp', 'animate__fadeInDown'],
  ['animate__backInDown', 'animate__backInLeft', 'animate__backInRight', 'animate__backInUp']
];

export default function MyName(props: MyNameProps) {
  const { playAnimation, style } = props;
  const [animationClasses] = useState(playAnimation ? animations[1] : []);
  const [rowDelay, setRowDelay] = useState(playAnimation ? 1 : 0);
  const [rowDelayMaxIncrement] = useState(rowDelay * 0.1);
  const isDarkMode = useIsDarkMode()

  var colorMap: { [key: number]: string } ={
    0: "#00000000",
    1: isDarkMode ? "#aaaaaa" : "#dddddd",//theme.palette.type === "dark" ? theme.palette.primary.main : theme.palette.primary.light,
    2: isDarkMode ? "#666666" : "#aaaaaa",//theme.palette.type === "dark" ? theme.palette.primary.main : theme.palette.primary.light,
  };

  useEffect(() => {
    if (!playAnimation) {
      setTimeout(() => {
        setRowDelay(0);
      }, 2000);
    }
  }, [playAnimation]);

  const isMobile_ = isMobile();
  const upperCaseSize = isMobile_ ? 3 : 10;
  const lowerCaseSize = isMobile_ ? 1.5 : 5;
  const wordSpacing_ = isMobile_ ? 2 : 10;
  const letterSpacing_ = isMobile_ ? 1 : 2;

  const animationObj = {
    animationClasses: animationClasses,
    rowDelay: rowDelay,
    rowDelayMaxIncrement: rowDelayMaxIncrement,
    random: false
  };

  return (
    <div style={{ padding: 20, ...style }}>
      <PixelSentence
        sentence="Kenneth Mead"
        wordSpacing={wordSpacing_}
        letterSpacing={letterSpacing_}
        colorMap={colorMap}
        upperCaseSize={upperCaseSize}
        lowerCaseSize={lowerCaseSize}
        {...animationObj}
      />
    </div>
  );
}
