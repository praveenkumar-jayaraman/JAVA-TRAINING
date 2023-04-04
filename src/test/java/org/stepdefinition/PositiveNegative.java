package org.stepdefinition;

import org.junit.demo.BaseClassjunit;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PositiveNegative extends BaseClassjunit {
	
	@Given("To launch the chrome browser and maximise window")
	public void to_launch_the_chrome_browser_and_maximise_window() {
	  launchBrowser();
	  windowMaximize();
	}

	@When("To launch the url of the facebook application")
	public void to_launch_the_url_of_the_facebook_application() {
		 launchUrl("https://accounts.google.com/v3/signin/identifier?dsh=S-603489007%3A1673931360581404&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AeAAQh4_q9TFPda3msoNHArwFNTMdtcweOcgWGITT4OdfCeScz92nkWdpEANwmH6vdlwiVgQ70CZwQ");
		  
	}

	

	@Then("To close the browser")
	public void to_close_the_browser() {
	 closeEntireBrowser();
	}

	
	
	

}
