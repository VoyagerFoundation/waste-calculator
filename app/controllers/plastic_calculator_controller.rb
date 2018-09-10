class PlasticCalculatorController < ApplicationController
  def random_fact
    ids = Fact.pluck(:id)
    Fact.find(ids.sample)
  end
  
  def calculator
    @fact = random_fact

    items_dictionary = PlasticItem.all.map{ |item|
      {
        :id => item.id, 
        :name => item.name,
        :recyclable => item.recyclable, 
        :description => item.description,
        :plastic_type => item.plastic_type,
        :default_calc_mode => item.default_calc_mode,
        :waste_group_name => item.waste_group.name,
        :weight_gram => item.weight_gram
      }
    }

    @calculator_props = {
      item_types_json: items_dictionary.to_json, 
      intervals_json: ['weekly', 'monthly'].to_json,
      groups_json: WasteGroup.all.to_json
    }

  end
end
