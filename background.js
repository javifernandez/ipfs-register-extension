browser.runtime.onInstalled.addListener(details => {
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
      browser.tabs.create({"url": "register.html"});

  }
});
