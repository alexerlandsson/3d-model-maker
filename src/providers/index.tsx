import { RotationProvider } from './RotationProvider';

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <RotationProvider>
      {children}
    </RotationProvider>
  );
};