import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ApolloProvider, ApolloClient, InMemoryCache, and createHttpLink components
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
// import middleware function to retrieve token
import { setContext } from '@apollo/client/link/context';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

// establish new link to GraphQL server at '/graphql'
const httpLink = createHttpLink({
  uri: '/graphql',
});

// use setContext() to retrive token from localStorage
// set HTTP request headers of every request to include token
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// instantiate Apollo Client instance and create connection to API endpoint
const client = new ApolloClient({
  // combine authLink and httpLink to retrieve token and set request headers
  link: authLink.concat(httpLink),
  // instantiate a new cache object
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
            <Routes>
              <Route 
                path='/' 
                element={<SearchBooks />} 
              />
              <Route 
                path='/saved' 
                element={<SavedBooks />} 
              />
              <Route 
                path='*'
                element={<h1 className='display-2'>Wrong page!</h1>} 
              />
            </Routes>
        </>
      </Router>
    </ApolloProvider>
    
  );
}

export default App;
