chrome.webRequest.onHeadersReceived.addListener(
    function (details) {
        console.log('onHeadersReceived', details) //请求baidu .png文件时会拦截
        //onHeadersReceived {frameId: 0, initiator: "chrome-extension://agkllkkjbhclhjnlebdbdagkagfgcecj", method: "GET", parentFrameId: -1, requestId: "72074", …}

        sendMessageToContentScript({
            type: 'test',
            value: JSON.stringify(details)
        }, function (response) {
            console.log('来自content的回复：' + response);
        });
        return {
            cancel: true
        };
    }, {
        urls: ['http://localhost:3006/nccloud/riart/login/verfiy.do']
    },
    ['responseHeaders', 'extraHeaders']
);

function sendMessageToContentScript(message, callback) {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
            if (callback) callback(response);
        });
    });
}