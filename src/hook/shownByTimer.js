import { useState, useEffect } from "react";

export const useShownByTimer = (duration, dependences) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      for (let dep of dependences) dep ? setIsShown(true) : setIsShown(false);
    }, duration);
    return () => clearTimeout(timerId);
  }, [...dependences]);

  return isShown
};
