import { DashboardLayout } from '@/layouts/dashboard-layout';
import { DashboardMainPage } from '@/pages/dashboard-main-page';
import { Route, Routes } from 'react-router-dom';

export const DashboardRoutes: React.FC = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<DashboardMainPage />} />
      </Routes>
    </DashboardLayout>
  );
};
