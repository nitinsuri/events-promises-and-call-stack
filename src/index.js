import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import PromiseCart from './PromiseCart';
import output from './reducer';
import Beers from './Beers';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <App />
    <PromiseCart />
    <Beers />
  </StrictMode>
);
