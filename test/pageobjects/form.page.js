import Page from "./page.js";
class FormPage extends Page {
  //define multiple selectors using getter methods
  get header() {
    return $("#wb-cont"); //uses Element with certain text selector
  }
  // Email Selector
  get inputEmail() {
    return $("#mail"); //uses CSS query selector
  }
  get submit() {
    //Using nth child
    return $("input.btn:nth-child(9)");
  }
  // get error text
  get errorText() {
    return $("#errors-validation-example > h2:nth-child(1)");
  }
  // gets the title, and opens options
  get title() {
    return $("#title1");
  }
  // gets the third option for the title dropdown
  get titleEsquire() {
    return $("#title1 > option:nth-child(3)");
  }
  // gets the first name field
  get firstName() {
    return $("#fname1");
  }
  // gets the last name field
  get lastName() {
    return $("#lname1");
  }
  // gets the Telephone number field
  get phoneNumber() {
    return $("#tel1");
  }
  // gets the postal code field
  get postalCode() {
    return $("#pcodeca1");
  }
  // gets the email address field
  get email() {
    return $("#email1");
  }
  //Gets the file button
  get file() {
    return $("#file1");
  }
  // gets the I agree checkbox
  get iAgree() {
    return $("#agree1");
  }
  // gets one of the pet checkboxes
  get catCheckbox() {
    return $("input#animal2");
  }
  // gets one of the Citizenship status Radio
  get citizenRadio() {
    return $("#status2");
  }
  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to enter in a valid email
   */
  async emailInput() {
    await this.emailInput.setValue(input);
    await this.submit.click();
  }
  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("");
  }
}
export default new FormPage();
