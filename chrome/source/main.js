chrome.runtime.onInstalled.addListener(function() {
    
    chrome.contextMenus.create({
        id: "visit-original-site",
        title: "visit original site",
        documentUrlPatterns: ["http://www.msn.com/*", "https://www.msn.com/*"],
        contexts:["all"],
    });

    chrome.contextMenus.onClicked.addListener(function(info, tab) {

        if (info.menuItemId === 'visit-original-site') {

            chrome.tabs.executeScript(tab.id, { 
                file: 'source/onContextMenuClick.js'
            });

        }

    });

});