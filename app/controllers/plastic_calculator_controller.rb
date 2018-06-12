class PlasticCalculatorController < ApplicationController
  def calculator
    @calculator_props = { 
      item_types: {
        small_bottle: {
          key: "small_bottle",
          name: "small bottle",
          size: "1mm",  
          plastic_type: "PET", 
          weight: 100,
          description: "small bottle description"
        },
        big_bottle: {
          key: "big_bottle",
          name: "big bottle",
          size: "1mm",  
          plastic_type: "PET", 
          weight: 100,
          description: "big bottle description"
        },
        coffee_cup: {
          key: "coffee_cup",
          name: "coffee cup",
          size: "1mm",  
          plastic_type: "PET", 
          weight: 100,
          description: "coffe cup with plastic cover"
        },
        bin_bags: {
          key: "bin_bags",
          name: "bin bahs",
          size: "1mm",  
          plastic_type: "PET", 
          weight: 100,
          description: "big bin bags"
        }
      },
      screens: {
        weekly: {
          factor: 4,
          elements: {
            small_bottle: {key: "small_bottle", type: "input"}, 
            big_bottle: {key: "big_bottle", type: "input" },
            coffee_cup: {key: "big_bottle", type: "input" }
          }
        }, 
        monthly: {
          factor: 1,
          elements: {
            bin_bags: {key: "bin_bags", type: "input" }
          }
        }
      } 
    }
  end
end
