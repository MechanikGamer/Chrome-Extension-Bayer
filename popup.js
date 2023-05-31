
  
  chrome.storage.sync.get(["materialGroup"], function (data) {
    document.getElementById("material-group").textContent = data.materialGroup;
  });

  chrome.storage.sync.get(["country"], function (data) {
    document.getElementById("country").textContent = data.country;
  });

  chrome.storage.sync.get(["price"], function (data) {
    document.getElementById("price").textContent = data.price;
  });

  chrome.storage.sync.get(["valuta"], function (data) {
    document.getElementById("valuta").textContent = data.valuta;
  });

  chrome.storage.sync.get(["MaterialGroupName"], function (data) {
    document.getElementById("MaterialGroupName").textContent = data.MaterialGroupName;
  });

  
  
  // This function will be injected into the active tab
  function pasteMaterialGroup() {
    chrome.storage.sync.get(["materialGroup"], function (data) {
      // Paste the MaterialGroup value wherever needed on www.howdoc.no
      console.log("Material Group:", data.materialGroup);
    });
    chrome.storage.sync.get(["country"], function (data) {
      // Paste the MaterialGroup value wherever needed on www.howdoc.no
      console.log("county:", data.country);
    });
    chrome.storage.sync.get(["price"], function (data) {
      // Paste the MaterialGroup value wherever needed on www.howdoc.no
      console.log("price:", data.price);
    });
  }

//click copy button
function CopyButton()
{
  console.log('copy clicked popup js')
}
  

