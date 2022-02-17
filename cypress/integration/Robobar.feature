Feature: Robobar cart


  Scenario: user add one cola
    Given user opens robobar website
    When user adds a cola
    Then total should be €1.25

  Scenario: user add one beer
    Given user opens robobar website
    When user adds a beer
    Then total should be €2.00

  Scenario: user add one wine
    Given user opens robobar website
    When user adds a wine
    Then total should be €3.00

  Scenario: user add two colas
    Given user opens robobar website
    When user adds a cola
    And user adds a cola
    Then total should be €2.50

  Scenario: user add two beers
    Given user opens robobar website
    When user adds a beer
    And user adds a beer
    Then total should be €4.00

  Scenario: user add two wines
    Given user opens robobar website
    When user adds a wine
    And user adds a wine
    Then total should be €6.00

  Scenario: user add one cola and one beer
    Given user opens robobar website
    When user adds a cola
    And user adds a beer
    Then total should be €3.25

  Scenario: user add and cola and one beer and one wine
    Given user opens robobar website
    When user adds a cola
    And user adds a beer
    And user adds a wine
    Then total should be €6.25

  Scenario: user adds alcohol and is underage
    Given user opens robobar website
    When user adds a wine
    Then total should be €3.00
    When user press submit
    And user age is 16
    And user press order
    Then alert is active

  Scenario: adult adds alcohol
    Given user opens robobar website
    When user adds a wine
    Then total should be €3.00
    When user press submit
    And user age is 22
    And user press order
    Then order is confirmed


  Scenario Outline: user adds several drinks
    Given user opens robobar website
    When user adds <cola> cola
    When user adds <beer> beer
    When user adds <wine> wine
    Then total should be €<total>
    Examples:
      | cola | beer | wine | total |
      | 1    | 0    | 0    | 1.25  |
      | 1    | 1    | 1    | 6.25  |

  Scenario Outline: user adds several drinks in one line
    Given user opens robobar website
    When user adds <cola> cola <beer> beer <wine> wine
    Then total should be €<total>
    Examples:
      | cola | beer | wine | total |
      | 1    | 0    | 0    | 1.25  |
      | 0    | 1    | 0    | 2.00  |
      | 0    | 0    | 1    | 3.00  |
      | 1    | 1    | 1    | 6.25  |

  Scenario Outline: user adds several drinks in one line and age
    Given user opens robobar website
    When user adds <cola> cola <beer> beer <wine> wine
    Then total should be €<total>
    When user press submit
    When user age is <age>
    And user press order
    But checkout result is "<expected>"
    Examples:
      | cola | beer | wine | age | total | expected |
      | 1    | 1    | 0    | 10  | 3.25  | fail     |
      | 0    | 1    | 0    | 10  | 2.00  | fail     |
      | 0    | 0    | 1    | 21  | 3.00  | pass     |
      | 1    | 1    | 1    | 22  | 6.25  | pass     |