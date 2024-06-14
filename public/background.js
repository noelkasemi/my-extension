chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension Installed");
  });
  
  chrome.history.search({text: '', maxResults: 10}, (results) => {
    chrome.storage.local.set({frequentSites: results});
  });
  