import { useEffect, useState } from 'react';
import usePerformanceTimers from './usePerformanceTimers';

export default function useRouteTransition({ delay, idle }) {
  const [buffering, setBuffering] = useState(idle);
  const { getDuration, setStart, setEnd } = usePerformanceTimers();

  useEffect(() => {
    if (!idle) setStart(performance.now());
    else setEnd(performance.now());
    const t = setTimeout(
      () => {
        setBuffering(idle);
      },
      idle ? delay - getDuration() : 0
    );

    return () => {
      clearTimeout(t);
    };
  }, [delay, idle, getDuration, setStart, setEnd]);

  return buffering;
}
