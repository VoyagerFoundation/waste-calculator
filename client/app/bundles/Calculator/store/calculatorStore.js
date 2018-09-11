import _ from 'lodash';
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';

// See
// https://github.com/gaearon/redux-thunk and http://redux.js.org/docs/advanced/AsyncActions.html
// This is not actually used for this simple example, but you'd probably want to use this
// once your app has asynchronous actions.
import thunkMiddleware from 'redux-thunk';

import reducers from '../reducers';
import { initialStates } from '../reducers';
import { groupItemsByGroupAndPeriod } from '../reducers/calculatorReducer';

export default props => {
  // This is how we get initial props Rails into redux.
  const { item_types_json, intervals_json, groups_json } = props;
  const { $$calculatorState } = initialStates;
  // Redux expects to initialize store using an Object, not an Immutable.Map
  var item_types = JSON.parse(item_types_json);
  var groups = JSON.parse(groups_json);
  var intervals = JSON.parse(intervals_json);

  var initial_items = {};

  const initialState = {
    $$calculatorStore: $$calculatorState.merge({
      item_types: item_types, 
      items: initial_items, 
      groups,
      intervals
    }),
  }; 

  const reducer = combineReducers(reducers);
  const composedStore = compose(
    applyMiddleware(thunkMiddleware)
  );
  const storeCreator = composedStore(createStore);
  const store = storeCreator(reducer, initialState);

  return store;
};