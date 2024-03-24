import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import output from './reducer';

import App from './App';
import PromiseCart from './PromiseCart';
const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <App />
    <PromiseCart />
  </StrictMode>
);
