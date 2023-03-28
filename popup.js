document.getElementById("paste-btn").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: pasteMaterialGroup,
      });
    });
  });
  
  chrome.storage.sync.get(["materialGroup"], function (data) {
    document.getElementById("material-group").textContent = data.materialGroup;
  });

  chrome.storage.sync.get(["country"], function (data) {
    document.getElementById("Country").textContent = data.country;
  });
  
  // This function will be injected into the active tab
  function pasteMaterialGroup() {
    chrome.storage.sync.get(["materialGroup"], function (data) {
      // Paste the MaterialGroup value wherever needed on www.howdoc.no
      console.log("Material Group:", data.materialGroup);
    });
    chrome.storage.sync.get(["Country"], function (data) {
      // Paste the MaterialGroup value wherever needed on www.howdoc.no
      console.log("County:", data.Country);
    });
  }
  