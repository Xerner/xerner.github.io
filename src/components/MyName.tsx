import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import PixelSentence from "./PixelSentence";

const colorMap: { [key: number]: string } = {
  0: "#00000000",
  1: "#5f5fc4",
  2: "#001064",
};

interface MyNameProps {
  playAnimation: boolean;
}

export default function MyName(props: MyNameProps) {
  const { playAnimation } = props;
  const [animationClasses] = useState(
    playAnimation
      ? [
          "animate__fadeInRight",
          "animate__fadeInLeft",
          "animate__fadeInUp",
          "animate__fadeInDown",
        ]
      : []
  );
  const [rowDelay, setRowDelay] = useState(playAnimation ? 1 : 0);
  const [rowDelayMaxIncrement] = useState(rowDelay * 0.1);

  useEffect(() => {
    if (!playAnimation) {
      setTimeout(() => {
        setRowDelay(0);
      }, 2000);
    }
  }, [playAnimation]);
  
  const wordObj = {
    colorMap: colorMap,
    upperCaseSize: 10,
    lowerCaseSize: 5,
  };

  const animationObj = {
    animationClasses: animationClasses,
    rowDelay: rowDelay,
    rowDelayMaxIncrement: rowDelayMaxIncrement,
    random: false,
  };

  return (
    <PixelSentence
      sentence="Kenneth Mead"
      wordSpacing={10}
      letterSpacing={2}
      {...wordObj}
      {...animationObj}
    />
  );
}
