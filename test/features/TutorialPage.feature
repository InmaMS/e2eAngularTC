Feature: Tutorial Feature

    As a user I want to have the option to navigate from home page to Tutorial page and navigate for the diferent sections of this page

    Scenario: Navigate from Home Page to Tutorial Page
        Given User starts Angular home page
        When User select 'Learn:Tutorial' option from the main page
        Then The Tutorial Page is displayed