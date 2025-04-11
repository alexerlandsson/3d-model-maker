import { RotationProvider } from './RotationProvider';
import { ZoomProvider } from './ZoomProvider';
import { ModelProvider } from './ModelProvider';
import { CanvasProvider } from './CanvasProvider';

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <RotationProvider>
      <ZoomProvider>
        <ModelProvider>
          <CanvasProvider>
            {children}
          </CanvasProvider>
        </ModelProvider>
      </ZoomProvider>
    </RotationProvider>
  );
};