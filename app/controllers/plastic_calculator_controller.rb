class PlasticCalculatorController < ApplicationController
  def calculator
    @calculator_props = { 
      item_types: {
        small_bottle: {
          key: "small_bottle",
          name: "small bottle",
          weight: 10, 
          size: "1mm",  
          plastic_type: "PET", 
          weight: 100,
          description: "small bottle description"
        }
      } 
    }
  end
end
