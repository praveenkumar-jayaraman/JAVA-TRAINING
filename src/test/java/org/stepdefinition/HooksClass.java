package org.stepdefinition;

import org.junit.demo.BaseClassjunit;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HooksClass extends BaseClassjunit {

	
	@Before
	
	private void precondition() {
  launchBrowser();
  windowMaximize();


	}
	
	
	@After
	
	private void postcondition() {
closeEntireBrowser();


	}
	
	
	
	
	
}
