class PlasticCalculatorController < ApplicationController
  def calculator
    @calculator_props = { 
      item_types: {
        small_bottle: {
          key: "small_bottle",
          name: "Drinks bottles (soft drinks 500ml)",
          size: "500ml",  
          plastic_type: "PET", 
          weight: 19,
          recyclable: true,
          description: "description"
        },
        large_bottle: {
          key: "large_bottle",
          name: "large water bottle", 
          plastic_type: "PET", 
          weight: 41,
          recyclable: true,
          description: "description"
        },
        takeway_tubs: {
          key: "takeway_tubs",
          name: "takeway tubs", 
          plastic_type: "HDPE", 
          weight: 40,
          recyclable: true,
          description: "description"
        },
        veggie_fruit_package: {
          key: "veggie_fruit_package",
          name: "Veggie or fruit package",  
          plastic_type: "PVC", 
          weight: 25,
          recyclable: false,
          description: "description"
        },
        milk_bottle: {
          key: "milk_bottle",
          name: "milk bottle",
          plastic_type: "HDPE", 
          weight: 40,
          recyclable: true,
          description: "description"
        },
        supermarket_bags: {
          key: "supermarket_bags",
          name: "supermarket bag",
          plastic_type: "LDPE", 
          weight: 35,
          recyclable: false,
          description: "description"
        },
        bin_bags: {
          key: "bin_bags",
          name: "bin bahs",  
          plastic_type: "LDPE", 
          weight: 18,
          recyclable: false,
          description: "description"
        }
      },
      screens: {
        weekly: {
          factor: 4,
          elements: {
            small_bottle: {key: "small_bottle", type: "input"}, 
            large_bottle: {key: "large_bottle", type: "input" },
            takeway_tubs: {key: "takeway_tubs", type: "input" },
            veggie_fruit_package: {key: "veggie_fruit_package", type: "input" },
            milk_bottle: {key: "milk_bottle", type: "input" },
            supermarket_bags: {key: "supermarket_bags", type: "input" },
          },
          groups: {
            food: {
              key: "food",
              name: "Food",
              elements: ["small_bottle","large_bottle", "takeway_tubs", "veggie_fruit_package", "milk_bottle", "supermarket_bags"],
            },
            kitchen: {
              key: "kitchen",
              name: "Kitchen",
              elements: [],
            },
          }
        }, 
        monthly: {
          factor: 1,
          elements: {
            bin_bags: {key: "bin_bags", type: "input" }
          },
          groups: {
            kitchen: {
              key: "kitchen",
              name: "Kitchen",
              elements: ["bin_bags"],
            },
            bathroom: {
              key: "bathroom",
              name: "Bathroom",
              elements: [],
            }
          }
        }
      } 
    }
  end
end
