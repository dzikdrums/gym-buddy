import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import { worker } from 'mocks/browser';
import { BrowserRouter as Router } from 'react-router-dom';

worker.start();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Root />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
