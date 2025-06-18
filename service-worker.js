function linkOpener() {
    console.log("click");
    var xw0 = document.getElementById("waterfall").getElementsByClassName("xw0");
    for (var i = 0; i < xw0.length; i++) {
        var link = xw0[i].getElementsByTagName("a")[0].href;
        console.log(link);
        window.open(link,"_blank");
    }
}

chrome.action.onClicked.addListener((tab) => {
    if (tab.url.includes('https://ccgga.me/')) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: linkOpener
        });
    }
});