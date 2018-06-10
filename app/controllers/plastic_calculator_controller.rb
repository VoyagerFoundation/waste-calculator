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
        },
        big_bottle: {
          key: "big_bottle",
          name: "big bottle",
          weight: 10, 
          size: "1mm",  
          plastic_type: "PET", 
          weight: 100,
          description: "big bottle description"
        },
        coffee_cup: {
          key: "coffee_cup",
          name: "coffee cup",
          weight: 10, 
          size: "1mm",  
          plastic_type: "PET", 
          weight: 100,
          description: "coffe cup with plastic cover"
        },
        bin_bags: {
          key: "bin_bags",
          name: "bin bahs",
          weight: 10, 
          size: "1mm",  
          plastic_type: "PET", 
          weight: 100,
          description: "big bin bags"
        }
      },
      screens: {
        weekly: {
          elements: ["small_bottle","big_bottle","coffee_cup"]
        }, 
        monthly: {
          elements: ["bin_bags"]
        }
      } 
    }
  end
end
