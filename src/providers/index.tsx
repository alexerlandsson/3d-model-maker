import { RotationProvider } from './RotationProvider';
import { ZoomProvider } from './ZoomProvider';

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <RotationProvider>
      <ZoomProvider>
        {children}
      </ZoomProvider>
    </RotationProvider>
  );
};