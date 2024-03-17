import { ReactChild, ReactChildren, useEffect, useState } from "react";

interface IDelayable {
  wait: number;
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[] | string;
}

export default function Delayable(props: IDelayable) {
  const { wait, children } = props;
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

  return !hidden ? <>{children}</> : null;
}