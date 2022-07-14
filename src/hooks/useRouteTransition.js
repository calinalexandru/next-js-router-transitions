import { useEffect, useState, useRef } from 'react';
import usePerformanceTimers from './usePerformanceTimers';

export default function useRouteTransition({ delay, idle }) {
  const delayRef = useRef(delay);
  const [transitionEnd, setTransitionEnd] = useState(false);
  const { getDuration, setStart, setEnd } = usePerformanceTimers();

  useEffect(() => {
    delayRef.current = delay;
  }, [delay]);

  useEffect(() => {
    let t;
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
        delayRef.current > processDuration
          ? delayRef.current - processDuration
          : 0
      );
    }

    return () => {
      clearTimeout(t);
    };
  }, [idle]);

  return transitionEnd;
}
