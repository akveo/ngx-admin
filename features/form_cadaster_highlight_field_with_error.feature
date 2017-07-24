Feature: Highlight cadaster form field  when there is an error
  User needs to know when there is an error into the form
     and which field is with error.

Scenario: User write and erase a field
 Given I'm filling out the indcation or cadaster form
 When I type inside a field and empty it again
 Then the field should become highlighted to sinalize the error

Actions:
  - Change fields to be required
  - Check each field to be valid
     * Create a class to change the backgroud of field
     * Add class if field contens error
       
