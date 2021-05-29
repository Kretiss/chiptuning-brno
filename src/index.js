import React from 'react';
import { render } from 'react-snapshot';
import App from './App';
import reportWebVitals from "./reportWebVitals";

render(
  <App />,
  document.getElementById('root')
);


function sendToGoogleAnalytics({name, delta, value, id}) {
  window.gtag('event', name, {
    // Built-in params:
    value: delta,
    // Custom params:
    metric_id: id,
    metric_value: value,
    metric_delta: delta,
  });
}

reportWebVitals(sendToGoogleAnalytics);
