Feature: SignUp for user
  In order to use the application user has to signup

  Scenario: SignUp user
    Given I have FirstName "Vishwa"
    When I write FirstName in FirstName Field
    Given I have EmailID  "vishwa01@gmail.com"
    When I write EmailID in EmailID Field
    Given I have password  "12345"
    When I write password in password Field
    When I select "I am investor"
    And I press "SUBMIT"
    Then I should be moved to next page
