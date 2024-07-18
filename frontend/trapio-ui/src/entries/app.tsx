import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import '@/globals.css';

import { ThemeContextProvider } from '@/context/theme-context';
import { DashboardRoutes } from '@/routes/dashboard-routes';
import { SettingsRoutes } from '@/routes/settings-routes';

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
