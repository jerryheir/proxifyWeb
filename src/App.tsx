import React from 'react';
import { Provider } from "react-redux";
import { store } from "./Store";
import Routes from './Navigation/Routes';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
