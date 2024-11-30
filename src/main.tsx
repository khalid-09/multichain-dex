import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import SmoothScrolling from './components/smooth-scrolling.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SmoothScrolling>
      <App />
    </SmoothScrolling>
  </StrictMode>
);
