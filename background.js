// https://stackoverflow.com/a/34553860
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: "invert.js"});
});