import React, { PropTypes } from 'react';
import CalculatorWidget from '../components/CalculatorWidget';
import { connect } from 'react-redux';
import Immutable from 'immutable';

const Calculator = (props) => {
  const { items, waste, groups, display_items } = props; 

  return (
    <CalculatorWidget {...{
      items,
      display_items, 
      waste,
      groups
    }} />
  );
};

function select(state) {
  const store = state.$$calculatorStore;

  if( store instanceof Error ){
    return {};
  } 

  var item_list = listToObject(store.get('item_types'));
  var waste_groups = listToObject(store.get('groups'));
  
  var items_by_id = byID(item_list);
  var display_items = organizeByWasteTypeAndCalcInterval(item_list,waste_groups);

  return { 
    items_by_id: items_by_id,
    display_items:  display_items,
    items: store.get('items'), 
    waste: store.get('waste'),
    groups: waste_groups, 
  };
}

function listToObject(items){
  var items_arr = [];
  items.forEach(function(i){
    items_arr.push(i.toObject());
  });
  return items_arr;
}

function byID(arr){
  return _.keyBy(arr, function(i){
    return i.id;
  });
}

function organizeByWasteTypeAndCalcInterval(items, waste_groups){
  if(!items) return {};
  var result = {};

  var filter_one = 'waste_group_name';
  var filter_two = 'default_calc_mode';

  var filters_one = _.uniq(
      _.map(items, function(i){ 
      return i[filter_one]
    })
  );

  filters_one.forEach(function(group){
    var filtered_items_group = _.filter(items,[filter_one, group]);

    result[group] = _.groupBy(filtered_items_group, 
      function(fi){ 
        return fi[filter_two]; 
      }
    );
  });

  return result;
}

Calculator.propTypes = {
  dispatch: PropTypes.func.isRequired, 
  items_by_id: PropTypes.instanceOf(Object).isRequired,
  display_items: PropTypes.instanceOf(Object).isRequired,
  waste: PropTypes.instanceOf(Object).isRequired,
};

export default connect(select)(Calculator);