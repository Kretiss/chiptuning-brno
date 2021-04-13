import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
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
