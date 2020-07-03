import React from 'react';
import client from'./apolloClient'
import { ApolloProvider } from '@apollo/react-hooks';
import Feeds from "./components/Feeds";

const App = () => (
  <ApolloProvider client={client}>
  <div>
  <h2>My first Apollo app 🚀</h2>

    <hr/>

    <Feeds/>

</div>
</ApolloProvider>
);


export default App;