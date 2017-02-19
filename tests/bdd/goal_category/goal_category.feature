Feature: Add and Remove Gategories
  As a user, I want to be able to add and remove gategories, so that I can specify what's important to me, which will
  help me fit individual goals into my life.

  Scenario: I have no gategories yet.
    Given I currently do not have any gategories
     When I load up the Gategories page
     Then I should see the Gategories title
