import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import store from './redux/store';

//Chakra UI
import { ChakraProvider } from '@chakra-ui/react';
import themeLight from './theme/light';
import themeDark from './theme/dark';

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider theme={themeLight}>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </ChakraProvider>
  </Provider>,
  document.getElementById('root')
);

