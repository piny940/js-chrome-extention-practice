const test = document.querySelector('body');
console.log(test);
test.addEventListener('click', function () {
    console.log('clicked');
    console.log(chrome.tabs);
    // chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
    //     chrome.tabs.executeScript(tabs[0].id, { code: `document.getSelection().toString()` }, (result) => {
    //         alert(result);
    //     });
    // });
});
