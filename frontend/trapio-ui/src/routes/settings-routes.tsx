import { SettingsMainPage } from '@/pages/settings-main-page';
import { Route, Routes } from 'react-router-dom';

export const SettingsRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SettingsMainPage />} />
    </Routes>
  );
};
