import { useEffect, useState } from 'react';

export default function useSimpleRouteTransition({ delay, children }) {
  const [transitionEnd, setTransitionEnd] = useState(true);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    setTransitionEnd(false);
    const t = setTimeout(() => {
      setDisplayChildren(children);
      setTransitionEnd(true);
    }, delay);

    return () => {
      clearTimeout(t);
    };
  }, [children]);

  return {
    displayChildren,
    transitionEnd,
  };
}
