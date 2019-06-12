const { setWorldConstructor } = require("cucumber");
const { expect } = require("chai");
const puppeteer = require("puppeteer");

const PAGE = "http://localhost:3000/register";
const FirstNameSelector='#first_name';
const EmailIdSelector='#email_id';
const PasswordSelector='#password';
const DropDownSelector='#user_type';
class TodoWorld {
  constructor() {
    this.firstName = "";
    this.emailId="",
    this.password=""
  }

  async openSignupPage() {
    this.browser = await puppeteer.launch();
    this.page = await this.browser.newPage();
    await this.page.goto(PAGE);
  }

  setFirstName(firstName)
  {
    this.firstName = firstName;
  }

  setFirstName(emailId)
  {
    this.emailId = emailId;
  }

  setpassword(password)
  {
    this.password = password;
  }
  async writeFirstName() {
    await page.type(FirstNameSelector, this.firstName);
  }

  async writeEmailID() {
    await page.type(EmailIdSelector, this.emailId);
  }

  async writeEmailID() {
    await page.type(PasswordSelector, this.password);
  }

  async setInvestor() {
    await page.select(DropDownSelector,'Investor');
  }

  async submit() {
    await this.inputElement.press("Enter");
  }

   setInvestor() {
   const destinationURL='http://localhost:3000/login';
    const currentPage=page.url()
 }

  async closeSignupPage() {
    await this.browser.close();
  }
}

setWorldConstructor(TodoWorld);