require 'test_helper'

class MicroblogControllerTest < ActionDispatch::IntegrationTest
  test "should get start" do
    get microblog_start_url
    assert_response :success
  end

end
