Feature: Home Page Feature


   As a user I want to be able to write my name in the field

   Scenario: Accesing to main page
      Given User navigates to Angular home page
      Then Home Page is displayed

   Scenario: Writting name in Greeting field
      Given User navigates to Angular home page
      When User introduces 'my Name' in the greeting field
      Then Field display: Hello 'my Name'

   Scenario Outline: Writting names in greeting field
      Given User navigates to Angular home page
      When User introduces '<name>' in the greeting field
      Then Field display: Hello '<name>'

      Examples:
      | name | 
      | Inma  |
      | Inma MS |
      | Inma Martinez |

   Scenario: Deleting name in Gretting field
      Given User navigates to Angular home page
      When User introduces 'my Name' in the greeting field
      And User deletes data from the greeting field
      Then No name is displayed in the greeting field