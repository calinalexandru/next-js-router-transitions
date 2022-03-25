let start = undefined;
let end = undefined;
export default function usePerformanceTimers() {
  function setStart(time) {
    start = time;
  }

  function setEnd(time) {
    end = time;
  }

  function getDuration() {
    if ([start, end].includes(undefined) || end - start <= 0) return 0;
    const duration = end - start;
    setStart(undefined);
    setEnd(undefined);
    return duration;
  }

  return {
    setStart,
    setEnd,
    getDuration,
  };
}
