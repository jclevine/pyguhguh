Feature: Add and Remove Categoalies
  As a user, I want to be able to add and remove categoalies, so that I can specify what's important to me, which will
  help me fit individual goals into my life.

  Scenario: I have no categoalies yet.
    Given I currently do not have any categoalies
     When I load up the Categoalies page
     Then I should see the Categoalies title
