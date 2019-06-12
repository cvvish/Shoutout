const { Given, When, Then, After, Before } = require("cucumber");

Before(async function(testCase) {
  return await this.openSignupPage();
});

After(async function() {
  return await this.closeSignupPage();
});

Given("I have a FirstName {string}", function(firstName) {
  this.setFirstName(firstName);
});

When("I write the FirstName in the FirstName field", async function() {
  return await this.writeFirstName();
});

Given("I have a EmailId {string}", function(emailId) {
  this.setEmailId(emailId);
});

When("I write the EmailId in the EmailId field", async function() {
  return await this.writeEmailID();
});

Given("I have a password {string}", function(password) {
  this.setpassword(password);
});

When("I write the password in the password field", async function() {
  return await this.writepassword();
});

When("I click I am investor", async function() {
  return await this.setInvestor();
});

When("I click enter", async function() {
  return await this.submit();
});

Then("I expect to move to next page", async function() {
  return await this.checkNewPage();
});