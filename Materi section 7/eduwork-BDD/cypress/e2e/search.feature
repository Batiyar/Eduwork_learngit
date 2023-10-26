Feature: Search Engine
  As a user, I want to find data by typing in the search bar

  Scenario: Performing a basic search on the homepage
    Given I am on the homepage
    When I click the search bar in the upper right corner of the page
    And I type the word "online"
    And I press the Enter key
    Then I should see results related to the word "online"