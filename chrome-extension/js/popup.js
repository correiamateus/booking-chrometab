window.onload = function() {
  document.getElementById('start').onclick = function() {
    chrome.extension.sendMessage({
      type: 'start'
    });
    chrome.browserAction.setBadgeText({text: "rec"});
    window.close();
  };

  document.getElementById('stop').onclick = function() {
    chrome.extension.sendMessage({
      type: 'stop'
    });
    chrome.browserAction.setBadgeText({text: ""});
    window.close();
  };
}
