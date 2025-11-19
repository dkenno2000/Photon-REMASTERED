let fetchingUrl = null;

async function ensureOffscreenDocument() {
  if (await chrome.offscreen.hasDocument()) return;
  await chrome.offscreen.createDocument({
    url: 'offscreen.html',
    reasons: ['DOM_PARSER'],
    justification: 'Parse HTML content to extract description meta tags'
  });
}

async function fetchAndParse(url) {
  fetchingUrl = url;
  await ensureOffscreenDocument();
  
  return new Promise((resolve) => {
    chrome.runtime.sendMessage({
      type: 'parse-html',
      url: url
    }, (response) => {
      resolve(response);
    });
  });
}

function updatePopup(url) {
    if (url.includes("photon-sol.tinyastro.io")) {
        chrome.action.setPopup({ popup: "popup.html" });
    } else {
        chrome.action.setPopup({ popup: "default.html" });
    }
}

const Options = {
  DevMode: false,
  ExtensionEnabled: true,
  ExtensionVersion: 1.25,
  lastRequest: 0
};

const SOL = {
  price: null,
  lastCheck: 0
}

async function setLocalData() {
  await chrome.storage.local.set({ Options });
  await chrome.storage.local.set({ SOL });
}

chrome.runtime.onInstalled.addListener(() => {
  setLocalData();

  chrome.storage.local.set({
    MigratingNotifications: true,
    OpenAllSocialLinks: false,
    KeyboardShortcuts: false,
    HighlightMigratingTokens: true,
    theme: "default"
  });
});

chrome.tabs.onActivated.addListener(async (activeInfo) => {
    const tab = await chrome.tabs.get(activeInfo.tabId);
    updatePopup(tab.url);
    ensureOffscreenDocument();
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete") {
        updatePopup(tab.url);
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getPumpFunDescription") {
    fetchAndParse(request.url)
      .then(sendResponse)
      .catch(error => sendResponse({
        success: false,
        error: error.message
      }));
    return true;
  }
});