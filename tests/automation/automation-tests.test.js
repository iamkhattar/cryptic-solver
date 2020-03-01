const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const delay = ms => new Promise(res => setTimeout(res, ms));

const url = "http://localhost:3000/";

let chromeoptions = new chrome.Options();
chromeoptions.addArguments("start-maximized");

/**
 * Test to see whether the client loads up
 */
test("Client Load Test", async () => {
  jest.setTimeout(50000);
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeoptions)
    .build();
  try {
    await driver.get(url);
  } finally {
    await driver.quit();
  }
});

/**
 * Navbar Tests
 */
test("Navbar Test", async () => {
  jest.setTimeout(50000);
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeoptions)
    .build();
  try {
    await driver.get(url);
    await driver.findElement(By.id("navbar-login")).click();
    await driver.wait(until.urlContains("/login"), 10000);
    await driver.findElement(By.id("navbar-home")).click();
    await driver.wait(until.urlIs(url), 10000);
  } finally {
    await driver.quit();
  }
});

/**
 * Test to check whether user is redirected to solution page once clue is searched
 */
test("Search Clue Test", async () => {
  jest.setTimeout(50000);
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeoptions)
    .build();
  try {
    await driver.get(url);
    await driver.findElement(By.id("search-clue")).sendKeys("Report Account");
    await driver.findElement(By.id("search-length")).sendKeys("4");
    await driver.findElement(By.id("search-button")).click();
    await driver.wait(until.urlContains("/solution"), 10000);
  } finally {
    await driver.quit();
  }
});

/**
 * Test to check whether Register works
 */
test("Register Test", async () => {
  jest.setTimeout(50000);
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeoptions)
    .build();
  try {
    await driver.get(url);
    await driver.findElement(By.id("navbar-login")).click();
    await driver.findElement(By.id("login-register-link")).click();
    await driver
      .findElement(By.id("register-email"))
      .sendKeys("automation@test.com");
    await driver.findElement(By.id("register-password")).sendKeys("automation");
    await driver
      .findElement(By.id("register-password2"))
      .sendKeys("automation");
    await driver.findElement(By.id("register-button")).click();
    await driver.wait(until.urlIs(url), 10000);
    await driver.findElement(By.id("navbar-history")).isDisplayed();
  } finally {
    await driver.quit();
  }
});

/**
 * Test to check whether login works
 */
test("Login Test", async () => {
  jest.setTimeout(50000);
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeoptions)
    .build();
  try {
    await driver.get(url);
    await driver.findElement(By.id("navbar-login")).click();
    await driver
      .findElement(By.id("login-email"))
      .sendKeys("automation@test.com");
    await driver.findElement(By.id("login-password")).sendKeys("automation");
    await driver.findElement(By.id("login-button")).click();
    await driver.wait(until.urlIs(url), 10000);
    await driver.findElement(By.id("navbar-history")).isDisplayed();
  } finally {
    await driver.quit();
  }
});

/**
 * Test to check whether Logout Works
 */
test("Logout Test", async () => {
  jest.setTimeout(50000);
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeoptions)
    .build();
  try {
    await driver.get(url);
    await driver.findElement(By.id("navbar-login")).click();
    await driver
      .findElement(By.id("login-email"))
      .sendKeys("automation@test.com");
    await driver.findElement(By.id("login-password")).sendKeys("automation");
    await driver.findElement(By.id("login-button")).click();
    await driver.wait(until.urlIs(url), 10000);
    await driver.findElement(By.id("navbar-logout")).click();
    var isElementPresent;
    try {
      await driver.findElement(By.id("navbar-history")).isDisplayed();
      isElementPresent = true;
    } catch (err) {
      isElementPresent = false;
    }
    expect(isElementPresent).toBeFalsy();
  } finally {
    await driver.quit();
  }
});

/**
 * Test to check whether User is redirected to Documentation page on clicking Documentation from Navbar
 */
test("Documentation Page Redirect Test", async () => {
  jest.setTimeout(50000);
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeoptions)
    .build();
  try {
    await driver.get(url);
    await driver.findElement(By.id("navbar-documentation")).click();
    const tabs = await driver.getAllWindowHandles();
    expect(tabs.length).toEqual(2);
  } finally {
    await driver.quit();
  }
});
