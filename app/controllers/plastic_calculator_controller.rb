class PlasticCalculatorController < ApplicationController
  def random_fact
    ids = Fact.pluck(:id)
    Fact.find(ids.sample)
  end
  
  def calculator
    @fact = random_fact

    @calculator_props = {
      item_types_json: PlasticItem.all.to_json, 
      intervals_json: ['weekly', 'monthly'].to_json,
      groups_json: WasteGroup.all.to_json
    }


    # @calculator_props = { 
    #   item_types: {
    #     small_bottle: {
    #       key: "small_bottle",
    #       name: "Drinks bottles (soft drinks 500ml)",
    #       size: "500ml",  
    #       plastic_type: "PET", 
    #       weight: 19,
    #       recyclable: true,
    #       description: "description",
    #       type: "input"
    #     },
    #     large_bottle: {
    #       key: "large_bottle",
    #       name: "large water bottle", 
    #       plastic_type: "PET", 
    #       weight: 41,
    #       recyclable: true,
    #       description: "description",
    #       type: "input"
    #     },
    #     takeway_tubs: {
    #       key: "takeway_tubs",
    #       name: "takeway tubs", 
    #       plastic_type: "HDPE", 
    #       weight: 40,
    #       recyclable: true,
    #       description: "description",
    #       type: "input"
    #     },
    #     veggie_fruit_package: {
    #       key: "veggie_fruit_package",
    #       name: "Veggie or fruit package",  
    #       plastic_type: "PVC", 
    #       weight: 25,
    #       recyclable: false,
    #       description: "description",
    #       type: "input"
    #     },
    #     milk_bottle: {
    #       key: "milk_bottle",
    #       name: "milk bottle",
    #       plastic_type: "HDPE", 
    #       weight: 40,
    #       recyclable: true,
    #       description: "description",
    #       type: "input"
    #     },
    #     supermarket_bags: {
    #       key: "supermarket_bags",
    #       name: "supermarket bag",
    #       plastic_type: "LDPE", 
    #       weight: 35,
    #       recyclable: false,
    #       description: "description",
    #       type: "input"
    #     },
    #     toothpaste: {
    #       key: "toothpaste",
    #       name: "tooth paste",  
    #       plastic_type: "LDPE", 
    #       weight: 65,
    #       recyclable: false,
    #       description: "description",
    #       type: "input"
    #     },
    #     toothbrush: {
    #       key: "toothbrush",
    #       name: "tooth brush",  
    #       plastic_type: "PP", 
    #       weight: 17.5,
    #       recyclable: false,
    #       description: "description",
    #       type: "input"
    #     },
    #     bleach: {
    #       key: "bleach",
    #       name: "bleach",  
    #       plastic_type: "HDPE", 
    #       weight: 112,
    #       recyclable: true,
    #       description: "description",
    #       type: "input"
    #     },
    #     cleaning_spray: {
    #       key: "cleaning_spray",
    #       name: "cleaning spray",  
    #       plastic_type: "HDPE", 
    #       weight: 58,
    #       recyclable: true,
    #       description: "description",
    #       type: "input"
    #     },
    #     shower_gel: {
    #       key: "shower_gel",
    #       name: "shower gel",  
    #       plastic_type: "HDPE", 
    #       weight: 40,
    #       recyclable: true,
    #       description: "description",
    #       type: "input"
    #     },
    #     soap_bottle: {
    #       key: "soap_bottle",
    #       name: "soap bottle",  
    #       plastic_type: "HDPE", 
    #       weight: 40,
    #       recyclable: true,
    #       description: "description",
    #       type: "input"
    #     },
    #     shampoo: {
    #       key: "shampoo",
    #       name: "shampoo",  
    #       plastic_type: "HDPE", 
    #       weight: 40,
    #       recyclable: true,
    #       description: "description",
    #       type: "input"
    #     },
    #     wash_up_bottles: {
    #       key: "wash_up_bottles",
    #       name: "washing up bottles",  
    #       plastic_type: "HDPE", 
    #       weight: 92,
    #       recyclable: true,
    #       description: "description",
    #       type: "input"
    #     },
    #     sponge: {
    #       key: "sponge",
    #       name: "kitchen sponge",  
    #       plastic_type: "PP", 
    #       weight: 32,
    #       recyclable: false,
    #       description: "description",
    #       type: "input"
    #     },
    #     loundry_detergent_bottle: {
    #       key: "loundry_detergent_bottle",
    #       name: "loundry detergent bottle",  
    #       plastic_type: "HDPE", 
    #       weight: 112,
    #       recyclable: true,
    #       description: "description",
    #       type: "input"
    #     },
    #     softener: {
    #       key: "softener",
    #       name: "loundry softener bottle",  
    #       plastic_type: "HDPE", 
    #       weight: 70,
    #       recyclable: true,
    #       description: "description",
    #       type: "input"
    #     },
    #     cling_wrap: {
    #       key: "cling_wrap",
    #       name: "cling wrap (per meter)",  
    #       plastic_type: "PVC", 
    #       weight: 1.1,
    #       recyclable: false,
    #       description: "description",
    #       type: "input"
    #     },
    #     sandwich_bags: {
    #       key: "sandwich_bags",
    #       name: "sandwich bags",  
    #       plastic_type: "LDPE", 
    #       weight: 8,
    #       recyclable: false,
    #       description: "description",
    #       type: "input"
    #     },
    #     bin_bags: {
    #       key: "bin_bags",
    #       name: "bin bags",  
    #       plastic_type: "LDPE", 
    #       weight: 18,
    #       recyclable: false,
    #       description: "description",
    #       type: "input"
    #     },
    #     straws: {
    #       key: "straws",
    #       name: "straws",  
    #       plastic_type: "PP", 
    #       weight: 0.1,
    #       recyclable: false,
    #       description: "description",
    #       type: "input"
    #     },
    #   },
    #   screens: {
    #     weekly: {
    #       factor: 4,
    #       groups: {
    #         food: {
    #           key: "food",
    #           name: "Food",
    #           elements: ["small_bottle","large_bottle", "takeway_tubs", "veggie_fruit_package", "milk_bottle", "supermarket_bags", "straws"],
    #         },
    #         kitchen: {
    #           key: "kitchen",
    #           name: "Kitchen",
    #           elements: ["wash_up_bottles", "sponge", "cling_wrap", "sandwich_bags","bin_bags"],
    #         },
    #       }
    #     }, 
    #     monthly: {
    #       factor: 1,
    #       groups: {
    #         kitchen: {
    #           key: "kitchen",
    #           name: "Kitchen",
    #           elements: ["loundry_detergent_bottle","softener"],
    #         },
    #         bathroom: {
    #           key: "bathroom",
    #           name: "Bathroom",
    #           elements: ["toothpaste", "toothbrush", "bleach", "cleaning_spray", "shower_gel", "soap_bottle", "shampoo"],
    #         }
    #       }
    #     }
    #   } 
    # }
  end
end
