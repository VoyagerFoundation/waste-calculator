class PlasticCalculatorController < ApplicationController
  def calculator
    @calculator_props = { 
      bottles: {
        small_bottles: 0,
        big_bottles: 0
      } 
    }
  end
end
