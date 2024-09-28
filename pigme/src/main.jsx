import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyles from './styles/GlobalStyles.jsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import { RecoilRoot } from 'recoil';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecoilRoot>
      <GlobalStyles />
      <RouterProvider router={router} />
    </RecoilRoot>
  </StrictMode>
);
