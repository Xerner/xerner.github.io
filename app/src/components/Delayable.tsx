import { useEffect, useState } from "react";

interface IDelayable {
  wait: number;
  children: JSX.Element;
}

export default function Delayable({ wait, children }: IDelayable) {  
  const [hidden, setHidden] = useState(wait && true);

  useEffect(() => {
    if (wait) {
      setTimeout(() => {
        setHidden(false);
      }, wait || 0);
      // return () => {
      // 	clearTimeout(timer);
      // }
    }
  });

  return !hidden ? children : <></>;
}