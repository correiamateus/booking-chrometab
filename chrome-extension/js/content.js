var customStartEvent = document.createEvent('Event');
customStartEvent.initEvent('startTracking', true, false);

var customStopEvent = document.createEvent('Event');
customStopEvent.initEvent('stopTracking', true, false);

chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
  switch(message.type) {
    case 'start' :
      document.dispatchEvent(customStartEvent);
      break;
    case 'stop' :
      document.dispatchEvent(customStopEvent);
      break;
  }
});

