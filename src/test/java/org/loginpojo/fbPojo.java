package org.loginpojo;

import org.junit.demo.BaseClassjunit;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class fbPojo extends BaseClassjunit {

	public fbPojo() {
		PageFactory.initElements(driver, this);
		
	}
		public WebElement getEmail() {
		return email;
	}

//	public WebElement getPassword() {
//		return password;
//	}

	public WebElement getLoginBtn() {
		return loginBtn;
	}
		//WebElement email = driver. findElement (By. id ("identifierId") ) ;
		@FindBy (id="ap_email")
		private WebElement email;
		
	//	@FindBy (xpath = "//input[@class='_2IX_2- VJZDxU']" )
	//	private WebElement password;

		@FindBy (name = "login")
		private WebElement loginBtn;
		
		
	
}
