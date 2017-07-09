Feature: Pop up a Action Modal from record line of territories list
  Admin User needs to see a panel when clicks on
   the row of table that list all territories.
    On this panel needs to have two buttons (Edit , ...)

Scenario: User clicks in the row
 Given I'm on the list of all approved territories
 When I click in line record
 Then a panel action should Pops up as a modal

Actions:
  - Listen click event to Pops up modal
  * Create a component to be a Action Model
     - Create a component and load it on other page
     * Load a data to inside component
        * mock a array and loop over it
