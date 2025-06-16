import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';

export function useLoadedAssets() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const [fontsLoaded] = useFonts({
    // Add your custom fonts here if needed
  });

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Add any additional asset loading here
        if (fontsLoaded) {
          setLoadingComplete(true);
        }
      } catch (e) {
        setError(e as Error);
      }
    }

    loadResourcesAndDataAsync();
  }, [fontsLoaded]);

  return [isLoadingComplete, error] as const;
} 