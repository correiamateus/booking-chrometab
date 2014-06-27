chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
  switch(request.type) {
    case 'start':
      chrome.tabs.getSelected(null, function (tab) {
        chrome.tabs.sendMessage(tab.id, { type : 'start' });
      });
      break;

    case 'stop':
      chrome.tabs.getSelected(null, function (tab) {
        chrome.tabs.sendMessage(tab.id, { type : 'stop' });
      });
      break;
  }

  return true;
});
