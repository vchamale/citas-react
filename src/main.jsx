import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { store } from './store/store';
import { Provider } from 'react-redux';

export const Main = ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
