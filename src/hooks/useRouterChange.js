import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function useRouterChange() {
  const [idle, setIdle] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setIdle(false);
    };
    const handleStop = () => {
      setIdle(true);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return idle;
}
