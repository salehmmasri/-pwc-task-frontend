import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from "./componants/Home";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>

    </ChakraProvider>
  );
}

export default App;
