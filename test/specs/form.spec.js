import FormPage from "../pageobjects/form.page.js";
describe("Form validation selectors practice", () => {
  //Opens the form page and finds the h1
  it('should find an h1 with the text "Form validation" ', async () => {
    await FormPage.open();
    await expect(FormPage.header).toHaveText(
      expect.stringContaining("Form validation")
    );
  });
  //Checks to see if the appropriate message appears.
  it("should display appropriate message when submitted without meeting the minimum criteria", async () => {
    //Maximizes the window for easier access
    await browser.maximizeWindow();
    //Scrolls element into view
    await FormPage.submit.scrollIntoView();
    await browser.pause(1000);
    //Checks to see if the button exists
    await FormPage.submit.waitForExist();
    //Clicks on the button
    await FormPage.submit.click();
    //Receives the error message
    await expect(FormPage.errorText).toHaveText(
      expect.stringContaining(
        "The form could not be submitted because 9 errors were found."
      )
    );
  });
  //Selects the Esquire from the title required field
  it("should select Esquire from title(s)", async () => {
    //Scrolls element into view
    await FormPage.title.scrollIntoView();
    //Waits for the object to be Clickable
    await FormPage.title.waitForClickable();
    //Clicks the object
    await FormPage.title.click();
    //Checks if the option in the dropdown is clickable
    await FormPage.titleEsquire.waitForDisplayed();
    //Clicks the option
    await FormPage.titleEsquire.click();
    //Checks to see if the Esquire option is selected
    await expect(FormPage.titleEsquire).toBeSelected();
  });
  // Fills in first name required field
  it("should input a first name on the First Name part of the form", async () => {
    //Scrolls element into view
    await FormPage.firstName.scrollIntoView();
    //Waits for the object to be Clickable
    await FormPage.firstName.waitForClickable();
    //Clicks the object
    await FormPage.firstName.click();
    //Sets the value to be Sean
    await FormPage.firstName.setValue("Sean");
    //Checks to see if the correct value is inputed
    await expect(FormPage.firstName).toHaveValue(
      expect.stringContaining("Sean")
    );
  });
  // Fills in last name required field
  it("should input a last name on the Last Name part of the form", async () => {
    //Scrolls element into view
    await FormPage.lastName.scrollIntoView();
    //Waits for the object to be Clickable
    await FormPage.lastName.waitForClickable();
    //Clicks the object
    await FormPage.lastName.click();
    //Sets the value to be Peterson
    await FormPage.lastName.setValue("Peterson");
    //Checks to see if the correct value is inputed
    await expect(FormPage.lastName).toHaveValue(
      expect.stringContaining("Peterson")
    );
  });
  //Fills in Phone number required field
  it("should input a phone number on the Telephone number part of the form", async () => {
    //Scrolls element into view
    await FormPage.phoneNumber.scrollIntoView();
    //Waits for the object to be Clickable
    await FormPage.phoneNumber.waitForClickable();
    //Clicks the object
    await FormPage.phoneNumber.click();
    //Sets the value to be 999-999-9999
    await FormPage.phoneNumber.setValue("999-999-9999");
    //Checks to see if the correct value is inputed
    await expect(FormPage.phoneNumber).toHaveValue(
      expect.stringContaining("999-999-9999")
    );
  });
  //Fills in Canadian postal code required field
  it("should input a Canadian postal code on the Postal code (Canada) part of the form", async () => {
    //Scrolls element into view
    await FormPage.postalCode.scrollIntoView();
    //Waits for the object to be Clickable
    await FormPage.postalCode.waitForClickable();
    //Clicks the object
    await FormPage.postalCode.click();
    //Sets the value to be H0H 0H0
    await FormPage.postalCode.setValue("H0H 0H0");
    //Checks to see if the correct value is inputed
    await expect(FormPage.postalCode).toHaveValue(
      expect.stringContaining("H0H 0H0")
    );
  });
  //Fills in email address bonus
  it("should input a email on the Email Address part of the form", async () => {
    //Scrolls element into view
    await FormPage.email.scrollIntoView();
    //Waits for the object to be Clickable
    await FormPage.email.waitForClickable();
    //Clicks the object
    await FormPage.email.click();
    //Sets the value to be tech@gmail.com
    await FormPage.email.setValue("tech@gmail.com");
    //Checks to see if the correct value is inputed
    await expect(FormPage.email).toHaveValue(
      expect.stringContaining("tech@gmail.com")
    );
  });
  //Select file - Leave for later!
  xit("Adding a file", async () => {
    //Scrolls element into view
    await FormPage.file.scrollIntoView();
    //Selects a file to add to the website
    const path = require('path')
    const filePath = path.join(__dirname, '../data/file.pages')
    const remoteFilePath = await browser.uploadFile(filePath)
    await FormPage.file.setValue(remoteFilePath)
    await browser.pause(2000)
  });
  //Selects that I agree -checkbox-
  it('Select the "I agree" check box', async () => {
    //Scrolls element into view
    await FormPage.iAgree.scrollIntoView();
    //Waits for the object to be Clickable
    await FormPage.iAgree.waitForClickable();
    //Clicks the object
    await FormPage.iAgree.click();
    //Checks to see if the checkbox has been selected
    await expect(FormPage.iAgree).toBeSelected();
  });
  //Selects a favorite pet -multiselect- required field
  it("Select the Cat option on the Favorite Pets check box", async () => {
    //Scrolls element into view
    await FormPage.catCheckbox.scrollIntoView();
    //Waits for the object to be Clickable
    await FormPage.catCheckbox.waitForClickable();
    //Clicks the object
    await FormPage.catCheckbox.click();
    //Checks to see if the checkbox has been selected
    await expect(FormPage.catCheckbox).toBeSelected();
  });
  //Selects Citizenship -Radio- status required field
  it("Select the Permanent resident on the Citizenship staus set of Radios", async () => {
    //Scrolls element into view
    await FormPage.citizenRadio.scrollIntoView();
    //Waits for the object to be Clickable
    await FormPage.citizenRadio.waitForClickable();
    //Clicks the object
    await FormPage.citizenRadio.click();
    //Checks to see if the radio has been selected
    await expect(FormPage.citizenRadio).toBeSelected();
  });
  //Submit the form that is completed - should get one error - for File
  it("should display message saying that 1 error has been found", async () => {
    // await FormPage.submit.scrollIntoView();
    // await browser.pause(1000)
    // await FormPage.submit.waitForExist();
    // await FormPage.submit.click();
    //Scrolls element into view
    //await FormPage.errorText.scrollIntoView();
    //Receives the error message
    await expect(FormPage.errorText).toHaveText(
      expect.stringContaining(
        "The form could not be submitted because 1 error was found."
      )
    );
  });
});
