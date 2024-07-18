import { SettingsLayout } from '@/layouts/settings-layout';
import { SettingsMainPage } from '@/pages/settings-page';
import { Route, Routes } from 'react-router-dom';

export const SettingsRoutes: React.FC = () => {
  return (
    <SettingsLayout>
      <Routes>
        <Route path="/" element={<SettingsMainPage />} />
      </Routes>
    </SettingsLayout>
  );
};
