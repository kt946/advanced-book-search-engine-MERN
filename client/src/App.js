import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ApolloProvider, ApolloClient, InMemoryCache, and createHttpLink components
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

// establish new link to GraphQL server at '/graphql'
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

// instantiate Apollo Client instance and create connection to API endpoint
const client = new ApolloClient({
  link: httpLink,
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
