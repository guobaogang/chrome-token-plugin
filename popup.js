document.querySelector('#set_token').addEventListener('click', function (e) {
    setCookie();
    /* sendMessageToContentScript({
        type: 'set',
        value: '你好，我是popup！'
    }, function (response) {
        console.log('来自content的回复：' + response);
    }); */
})

function setCookie() {
    var param = {
        url: 'http://localhost:3006/',
        name: 'plugin-test',
        value: 'plugin-test',
        path: '/'
    };
    chrome.cookies.set(param, function(){
        console.log('set cookie success')
    });
}

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