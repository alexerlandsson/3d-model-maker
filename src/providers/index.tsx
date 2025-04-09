import { RotationProvider } from './RotationProvider';
import { ZoomProvider } from './ZoomProvider';
import { ModelProvider } from './ModelProvider';

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <RotationProvider>
      <ZoomProvider>
        <ModelProvider>
          {children}
        </ModelProvider>
      </ZoomProvider>
    </RotationProvider>
  );
};