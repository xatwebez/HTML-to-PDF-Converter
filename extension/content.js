chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'convertToPDF') {
    const htmlContent = document.documentElement.outerHTML;
    sendResponse({ htmlContent });
  }
});
