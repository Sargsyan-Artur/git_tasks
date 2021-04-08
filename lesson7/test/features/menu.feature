

# Background: User is logged in 
    
  
#   Background: Verify user can sign in 
    # @LogIn
@all
Feature: Youtube

Background: 
    Given I open "https://www.youtube.com/" url
    Then I should see maximize window  
    # @login
    # Scenario: LogIn
    # # Given I open "https://www.youtube.com/" url
    # # Then I should see maximize window  
    #     When I wait until "signIn" is clickable
    #     Then I click "signIn" 
    #     When I wait until "eamil_input" is present
    #     Then I enter log "yuriAlekseyevichGagarinCosmos@gmail.com" in "eamil_input"
    #     Then I click "next_button" 
    #     When I wait "2" seconds
    #     Then I enter pass "yurik123" in "pass_input"
    #     When I wait until "nex_button_pass" is present
    #     Then I click "nex_button_pass" 
    #     When I wait "3" seconds

  
    @homepage
    Scenario: Check dark theme is visible
    # Given I open "https://www.youtube.com/" url
        When I wait until "avatar" is clickable
        Then I click "avatar"
        When I wait until "dark_icon" is clickable
        Then I click "dark_icon"
        When I wait until "dark_theme__button" is clickable
        Then I click "dark_theme__button"
        When I wait "2" seconds
        Then I should see black device_color

    # @username
    # Scenario: Should Check username is visible
        # Given I open "https://www.youtube.com/" url
        When I wait until "avatar" is clickable
        Then I click "avatar"
        When I wait until "account_name" is visible

    @updating
    Scenario: Confirm that the list of captured videos has been changed after updating
        Then I should see changed videos after updating
    
    @AddVideosWatchLater
    Scenario: Add some videos to watch later, should check they were added
        When I add "4" videos to watch later then i sould see them in watch later
    
    @LikeVideosWatchLater
    Scenario: Like first video, should check they are added
        When I like first video then i should see in liked videos
        
