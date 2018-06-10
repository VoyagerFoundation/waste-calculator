import React from 'react';
import ReactOnRails from 'react-on-rails';
import { Provider } from 'react-redux';

import createStore from '../store/calculatorStore';
import CalculatorWidget from '../components/CalculatorWidget';
import Calculator from '../containers/Calculator';


// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const CalculatorApp = (props, _railsContext) => {
  const store = createStore(props);
  const reactComponent = (
    <Provider store={store}>
      <Calculator />
    </Provider>
  );
  return reactComponent;
};

export default CalculatorApp;

// This is how react_on_rails can see the HelloWorldApp in the browser.
ReactOnRails.register({ CalculatorApp });

