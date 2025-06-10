import { createContext, useContext, useState, ReactNode } from 'react';

interface FeatureFlagsContextType {
  isAlphaMode: boolean;
  toggleAlphaMode: () => void;
}

const FeatureFlagsContext = createContext<FeatureFlagsContextType | undefined>(undefined);

export function FeatureFlagsProvider({ children }: { children: ReactNode }) {
  const [isAlphaMode, setIsAlphaMode] = useState(false);

  const toggleAlphaMode = () => {
    setIsAlphaMode(prev => !prev);
  };

  return (
    <FeatureFlagsContext.Provider value={{ isAlphaMode, toggleAlphaMode }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}

export function useFeatureFlags() {
  const context = useContext(FeatureFlagsContext);
  if (context === undefined) {
    throw new Error('useFeatureFlags must be used within a FeatureFlagsProvider');
  }
  return context;
} 