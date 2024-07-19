import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import '@/globals.css';

import { ThemeContextProvider } from '@/context/theme-context';

import { DashboardLayout } from '@/layouts/dashboard-layout';
import { SettingsLayout } from '@/layouts/settings-layout';

import { SettingsIndexPage } from './settings';
import { DashboardIndexPage } from './dashboard';

const DashboardRoutes: React.FC = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<DashboardIndexPage />} />
      </Routes>
    </DashboardLayout>
  );
};

const SettingsRoutes: React.FC = () => {
  return (
    <SettingsLayout>
      <Routes>
        <Route path="/" element={<SettingsIndexPage />} />
      </Routes>
    </SettingsLayout>
  );
};

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <ThemeContextProvider>
        <BrowserRouter basename="/app">
          <Routes>
            <Route path="/dashboard/*" element={<DashboardRoutes />} />
            <Route path="/settings/*" element={<SettingsRoutes />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </React.StrictMode>,
  );
}
