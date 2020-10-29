import React from 'react';
import { Provider } from 'react-redux';

import { Main as MainPage } from "./pages/Main";

import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
