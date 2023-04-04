$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Sample.feature");
formatter.feature({
  "name": "To the login functionality of Gmail application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature1"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User has to launch the browser and maximise the window",
  "keyword": "Given "
});
formatter.step({
  "name": "user has to hit the facebook url",
  "keyword": "When "
});
formatter.step({
  "name": "User has to pass the data \"\u003cemaildatas\u003e\" in email field",
  "keyword": "And "
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emaildatas",
        "passworddatas"
      ]
    },
    {
      "cells": [
        "Praveen@gmail.com",
        "Inmakes"
      ]
    },
    {
      "cells": [
        "kumar@gmail.com",
        "10015151"
      ]
    },
    {
      "cells": [
        "barath@gmail.com",
        "selenium"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User has to launch the browser and maximise the window",
  "keyword": "Given "
});
formatter.match({
  "location": "Fblogin.user_has_to_launch_the_browser_and_maximise_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "Fblogin.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"Praveen@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "Fblogin.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Fblogin.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User has to launch the browser and maximise the window",
  "keyword": "Given "
});
formatter.match({
  "location": "Fblogin.user_has_to_launch_the_browser_and_maximise_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "Fblogin.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"kumar@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "Fblogin.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Fblogin.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and negative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User has to launch the browser and maximise the window",
  "keyword": "Given "
});
formatter.match({
  "location": "Fblogin.user_has_to_launch_the_browser_and_maximise_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "Fblogin.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"barath@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "Fblogin.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Fblogin.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});