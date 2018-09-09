AdminUser.create!([
  {email: "admin@example.com", password:'Password'}
])
Fact.create!([
  {title: "What is plastic?", category: "plastic", description: "Plastic is a synthetic material made from repeating units of carbon compounds called polymers which are made of monomers. The chains of monomers can be arranged in different ways creating different types of plastics. "},
  {title: "What is used to make it?", category: "plastic", description: "<p>Traditionally we use oil but we can get the same effect from renewable sources. However the structure of the plastics are the same so although we can create more, getting rid of them is still a major problem.&nbsp;</p><p dir=\"ltr\">About 4 percent of the world&rsquo;s petroleum is used to make plastic, and another 4 percent is used to power plastic manufacturing processes</p>"},
  {title: "Types of Plastics?", category: "plastic", description: "<p>We class each plastic under certain codes although there can be differences within these &ldquo;family&rdquo; types creating polymers of differing strengths and qualities.</p><table><tbody><tr><td><p dir=\"ltr\">Code</p></td><td><p dir=\"ltr\">Name</p></td><td><p dir=\"ltr\">Biodegradable?</p></td></tr><tr><td><p dir=\"ltr\">PET</p></td><td><p dir=\"ltr\">Polyethylene Terephthalate</p></td><td><p dir=\"ltr\">No</p></td></tr><tr><td><p dir=\"ltr\">HDPE</p></td><td><p dir=\"ltr\">High Density Polyethylene</p></td><td><p dir=\"ltr\">500 Years</p></td></tr><tr><td><p dir=\"ltr\">PVC</p></td><td><p dir=\"ltr\">Polyvinyl Chloride</p></td><td><p dir=\"ltr\">500 Years</p></td></tr><tr><td><p dir=\"ltr\">LDPE</p></td><td><p dir=\"ltr\">Low Density Polyethylene</p></td><td><p dir=\"ltr\">500 Years</p></td></tr><tr><td><p dir=\"ltr\">PP</p></td><td><p dir=\"ltr\">Polypropylene</p></td><td><p dir=\"ltr\">No</p></td></tr><tr><td><p dir=\"ltr\">PS</p></td><td><p dir=\"ltr\">Polystyrene</p></td><td><p dir=\"ltr\">No</p></td></tr><tr><td><p dir=\"ltr\">OTHER</p></td><td><br></td><td><br></td></tr></tbody></table><p data-empty=\"true\"><br></p><p><br></p>"},
  {title: "Why do we use them?", category: "plastic", description: "<p>Plastics have a high strength to weight ratio and is moldable to nearly any form. Plastics are also chemically inert meaning that they do not react to chemicals, like soaps, bleaches, cleaning products. This also makes them very difficult to biodegrade.&nbsp;</p>"},
  {title: "What's the difference between biodegradation and photodegradation?", category: "plastic", description: "<p>Biodegradation is the process in which dirt and the bacteria in dirt can break down a substance.&nbsp;</p><p dir=\"ltr\">Photodegradation is the process in which sunlight causes substances to weather and break down. Plastics typically photodegrade quicker than they biodegrade, however this causes microplastics to be released, often into water, either in our oceans or rivers. Most trash is buried and thus we should concern ourselves with both types of degradation.</p>"}
])
WasteGroup.create!([
  {id: 1, name: "kitchen"},
  {id: 2, name: "food"},
  {id: 3, name: "bathroom"}
])
PlasticItem.create!([
  {id: 1, name: "Washing up bottles", weight_gram: "92.0", recyclable: true, description: "", plastic_type: "HDPE", default_calc_mode: "weekly", waste_group_id: 1},
  {id: 2, name: "Kitchen Sponges/abrasive pads", weight_gram: "32.0", recyclable: false, description: "", plastic_type: "PP", default_calc_mode: "weekly", waste_group_id: 1},
  {id: 3, name: "Cleaning spray", weight_gram: "58.0", recyclable: true, description: "", plastic_type: "HDPE", default_calc_mode: "monthly", waste_group_id: 1},
  {id: 4, name: "Laundry detergent bottles", weight_gram: "112.0", recyclable: true, description: "", plastic_type: "HDPE", default_calc_mode: "monthly", waste_group_id: 1},
  {id: 5, name: "Laundry softener", weight_gram: "70.0", recyclable: true, description: "", plastic_type: "HDPE", default_calc_mode: "monthly", waste_group_id: 1},
  {id: 6, name: "Cling wrap (per m)", weight_gram: "1.1", recyclable: false, description: "", plastic_type: "PVC", default_calc_mode: "weekly", waste_group_id: 1},
  {id: 7, name: "Sandwich bags", weight_gram: "8.0", recyclable: false, description: "", plastic_type: "LDPE", default_calc_mode: "weekly", waste_group_id: 1},
  {id: 8, name: "Bin bags", weight_gram: "18.0", recyclable: false, description: "", plastic_type: "LDPE", default_calc_mode: "weekly", waste_group_id: 1},
  {id: 9, name: "Straws", weight_gram: "0.1", recyclable: false, description: "", plastic_type: "PP", default_calc_mode: "weekly", waste_group_id: 2},
  {id: 10, name: "Takeaway tubs", weight_gram: "40.0", recyclable: true, description: "", plastic_type: "HDPE", default_calc_mode: "weekly", waste_group_id: 2},
  {id: 11, name: "Vegetable and fruit packets", weight_gram: "25.0", recyclable: false, description: "", plastic_type: "PVC", default_calc_mode: "weekly", waste_group_id: 2},
  {id: 12, name: "Milk bottles (4 pint)", weight_gram: "40.0", recyclable: true, description: "", plastic_type: "HDPE", default_calc_mode: "weekly", waste_group_id: 2},
  {id: 13, name: "Drinks bottles (soft drinks 500ml)", weight_gram: "19.0", recyclable: true, description: "", plastic_type: "PET", default_calc_mode: "weekly", waste_group_id: 2},
  {id: 14, name: "Water Bottles (L)", weight_gram: "41.0", recyclable: true, description: "", plastic_type: "PET", default_calc_mode: "weekly", waste_group_id: 2},
  {id: 15, name: "Supermarket bags", weight_gram: "35.0", recyclable: true, description: "", plastic_type: "LDPE", default_calc_mode: "weekly", waste_group_id: 2},
  {id: 16, name: "Toothpaste", weight_gram: "65.0", recyclable: true, description: "", plastic_type: "LDPE", default_calc_mode: "weekly", waste_group_id: 3},
  {id: 17, name: "Toothbrushes", weight_gram: "17.5", recyclable: false, description: "", plastic_type: "PP", default_calc_mode: "monthly", waste_group_id: 3},
  {id: 18, name: "Bleach", weight_gram: "112.0", recyclable: true, description: "", plastic_type: "HDPE", default_calc_mode: "monthly", waste_group_id: 3},
  {id: 19, name: "Cleaning spray", weight_gram: "58.0", recyclable: true, description: "", plastic_type: "HDPE", default_calc_mode: "monthly", waste_group_id: 3},
  {id: 20, name: "Shower gel", weight_gram: "40.0", recyclable: true, description: "", plastic_type: "HDPE", default_calc_mode: "monthly", waste_group_id: 3},
  {id: 21, name: "Soap bottle", weight_gram: "40.0", recyclable: true, description: "", plastic_type: "HDPE", default_calc_mode: "monthly", waste_group_id: 3},
  {id: 22, name: "Shampoo", weight_gram: "40.0", recyclable: true, description: "", plastic_type: "HDPE", default_calc_mode: "monthly", waste_group_id: 3}
])
