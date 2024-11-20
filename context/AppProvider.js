import { SettingsProvider } from './SettingsContext';
import { JournalsProvider } from './JournalsContext';

const AppProvider = ({ children }) => {
  return (
    <SettingsProvider>
      <JournalsProvider>
        {children}
      </JournalsProvider>
    </SettingsProvider>
  );
};

export default AppProvider;
