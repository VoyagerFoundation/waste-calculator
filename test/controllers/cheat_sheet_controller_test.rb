require 'test_helper'

class CheatSheetControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get cheat_sheet_show_url
    assert_response :success
  end

end
