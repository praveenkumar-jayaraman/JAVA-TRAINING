package org.stepdefinition;

import org.junit.demo.BaseClassjunit;
import org.loginpojo.fbPojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Fblogin extends BaseClassjunit {

	
      fbPojo f;
      
	@When("To pass valid username in email field")
	public void to_pass_valid_username_in_email_field() {
	  fbPojo f = new fbPojo();
	  passText("praveen@59gmail.com", f.getEmail());
	}
	@Given("User has to launch the browser and maximise the window")
	public void user_has_to_launch_the_browser_and_maximise_the_window() {
		 launchBrowser();
		  windowMaximize();
	}

	@When("user has to hit the facebook url")
	public void user_has_to_hit_the_facebook_url() {
		launchUrl("https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3F%26ext_vrnc%3Dhi%26tag%3Dgooghydrabk1-21%26ref%3Dnav_signin%26adgrpid%3D60571832564%26hvpone%3D%26hvptwo%3D%26hvadid%3D486453138860%26hvpos%3D%26hvnetw%3Dg%26hvrand%3D7412863786635466591%26hvqmt%3De%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D9061925%26hvtargid%3Dkwd-296458795081%26hydadcr%3D14452_2154371%26gclid%3DEAIaIQobChMIhv7K5vHO_AIV8oJLBR3bOQm2EAAYASAAEgIda_D_BwE&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&");
	}
		@When("User has to pass the data {string} in email field")
	public void user_has_to_pass_the_data_in_email_field(String em) {
      f = new fbPojo();
      passText(em, f.getEmail());
	}

//	@When("User has to pass the data {string} in password field")
//	public void user_has_to_pass_the_data_in_password_field(String string) {
	 
//	}

	@Then("User has to close the browser")
	public void user_has_to_close_the_browser() {
	   closeEntireBrowser();
	}
	
}
