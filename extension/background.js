chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("Message received in background script:", request);
  if (request.action === 'convertToPDF') {
    chrome.scripting.executeScript({
      target: { tabId: request.tabId },
      function: () => {
        const pdf = new jsPDF();
        pdf.addHTML(document.body, function () {
          pdf.save('webpage.pdf');
        });
      }
    });
  }
});
