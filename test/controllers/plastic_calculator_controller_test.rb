require 'test_helper'

class PlasticCalculatorControllerTest < ActionDispatch::IntegrationTest
  test "should get calculator" do
    get plastic_calculator_calculator_url
    assert_response :success
  end

end
