@Feature1
Feature: To the login functionality of Gmail application


@regression
Scenario: To validate login with valid username and invalid password
Given To launch the chrome browser and maximise window
When To launch the url of the facebook application
And To pass valid username in email field

Then To close the browser

@smoke
Scenario Outline: To validate the positive and negative combination of login functionality
Given User has to launch the browser and maximise the window
When  user has to hit the facebook url
And User has to pass the data "<emaildatas>" in email field


Then User has to close the browser

Examples:

|emaildatas        |passworddatas |
|Praveen@gmail.com| Inmakes|
|kumar@gmail.com |10015151|
|barath@gmail.com|selenium|



