import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { store } from './store/store';
import { Provider } from 'react-redux';

const token = import.meta.env.VITE_TOKEN;
const space = import.meta.env.VITE_SPACE_ID;

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `https://graphql.contentful.com/content/v1/spaces/${space}/`,
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export const Main = ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
);
