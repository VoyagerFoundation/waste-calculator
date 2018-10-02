export function calculateWaste(items_dict, selected_items_ids){
  
  var waste = { 
    total_monthly: 0,
    total_yearly: 0, 
    by_group: {},
    by_type: {},
  }

  var iterator = selected_items_ids.entries();

  for (const value of iterator) {
    var selected_item = value[1];
    var factor = 1;
    let element_key = selected_item.id;

    var item = items_dict.find(function(el){ 
      return el.get('id') == element_key; 
    });

    var default_calc_mode = item.get('default_calc_mode');
    var factor = ( 'weekly' == default_calc_mode ) ? 4 : 1;
    var weight = item.get('weight_gram');
    var item_weight_monthly = weight * selected_item.amount * factor;
    waste.total_monthly += item_weight_monthly
    
    //prepare aggregations
    setAggregationItemValue(waste.by_group,'waste_group_name',item, item_weight_monthly);
    setAggregationItemValue(waste.by_type,'plastic_type',item, item_weight_monthly);
  }

  //calculate persiods
  waste.total_yearly = waste.total_monthly * 12;
  return waste;
}

function setAggregationItemValue(aggregation, proprty_name, item, item_weight_monthly){
  var currentVal =  aggregation.hasOwnProperty(item.get(proprty_name)) ? aggregation[item.get(proprty_name)] : 0;
  aggregation[item.get(proprty_name)] = item_weight_monthly + currentVal;
}