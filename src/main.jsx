import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const token = import.meta.env.VITE_TOKEN;
const space = import.meta.env.VITE_SPACE_ID;

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `https://graphql.contentful.com/content/v1/spaces/${space}/`,
  headers: {
    Authorization: `Bearer ${token}`
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
