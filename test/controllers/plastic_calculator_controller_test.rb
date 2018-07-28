require 'test_helper'

class PlasticCalculatorControllerTest < ActionDispatch::IntegrationTest
  test "should get calculator" do
    get '/'
    assert_response :success
  end

end
