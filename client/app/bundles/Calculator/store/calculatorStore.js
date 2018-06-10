import _ from 'lodash';
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';

// See
// https://github.com/gaearon/redux-thunk and http://redux.js.org/docs/advanced/AsyncActions.html
// This is not actually used for this simple example, but you'd probably want to use this
// once your app has asynchronous actions.
import thunkMiddleware from 'redux-thunk';

import reducers from '../reducers';
import { initialStates } from '../reducers';

export default props => {
  // This is how we get initial props Rails into redux.
  const { item_types, screens } = props;
  const { $$calculatorState } = initialStates;

  var initial_items = {};
  _.map(item_types, (item_type) => {
    initial_items[item_type.key]= { amount: 0, key: (item_type.key) };
  });

  // Redux expects to initialize tHelloWorld store using an Object, not an Immutable.Map
  const initialState = {
    $$calculatorStore: $$calculatorState.merge({
      item_types, 
      items: initial_items, 
      screens
    }),
  };
  // console.log('initial state');
  // console.log(initialState);
  const reducer = combineReducers(reducers);
  const composedStore = compose(
    applyMiddleware(thunkMiddleware)
  );
  const storeCreator = composedStore(createStore);
  const store = storeCreator(reducer, initialState);

  return store;
};