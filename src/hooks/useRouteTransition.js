import { useEffect, useState } from 'react';
import usePerformanceTimers from './usePerformanceTimers';

export default function useRouteTransition({ delay, idle }) {
  let t;
  const [transitionEnd, setTransitionEnd] = useState(false);
  const { getDuration, setStart, setEnd } = usePerformanceTimers();

  useEffect(() => {
    if (!idle) {
      setTransitionEnd(false);
      setStart(performance.now());
    } else {
      setEnd(performance.now());
      const processDuration = getDuration();
      t = setTimeout(
        () => {
          setTransitionEnd(true);
        },
        delay > processDuration ? delay - processDuration : 0
      );
    }

    return () => {
      clearTimeout(t);
    };
  }, [idle, delay]);

  return transitionEnd;
}
