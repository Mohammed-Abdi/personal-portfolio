chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Example async operation
  someAsyncFunction(request)
    .then((result) => {
      sendResponse({ success: true, data: result });
    })
    .catch((error) => {
      sendResponse({ success: false, error: error.message });
    });

  // Return true to keep the message channel open for async response
  return true;
});
