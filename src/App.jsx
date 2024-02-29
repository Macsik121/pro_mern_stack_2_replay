import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const continents = ['Russia', 'Africa', 'Europe', 'USA', 'lwh'];
  return (
    <div>
      {continents.map((item, i) => <div key={i}>Hello, {item}!</div>)}
    </div>
  );
}

ReactDOM.createRoot(
  document.getElementById('root'),
).render(<App />);

if (module.hot) {
  module.hot.accept(function (err) {
    console.log('An error occurred while accepting new version');
  });
}
