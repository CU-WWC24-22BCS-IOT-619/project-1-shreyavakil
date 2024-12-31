import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Dashboard from './components/Dashboard';
import './styles.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Cryptocurrency Portfolio Analyzer</h1>
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
