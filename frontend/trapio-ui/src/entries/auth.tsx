import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import '@/globals.css';

import { ThemeContextProvider } from '@/context/theme-context';
import { LoginPage } from '@/pages/login-page';
import { SignupPage } from '@/pages/signup-page';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <ThemeContextProvider>
        <BrowserRouter basename="/auth">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </React.StrictMode>,
  );
}
