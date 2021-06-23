chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request.value)
    sendResponse('我收到了你的消息！');
});