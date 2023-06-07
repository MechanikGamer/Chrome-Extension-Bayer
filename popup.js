let MaterialGroup;
let Country;
let Price; 
  
 
 
  chrome.storage.sync.get(["materialGroup"], function (data) {
    document.getElementById("material-group").textContent = data.materialGroup;
    MaterialGroup = data.materialGroup
  });

  chrome.storage.sync.get(["country"], function (data) {
    document.getElementById("country").textContent = data.country;
    Country = data.country
  });

  chrome.storage.sync.get(["price"], function (data) {
    document.getElementById("price").textContent = data.price;
    Price = data.price
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

  //button copy at Material
  let DownloadButtonCopyMaterial = document.getElementById("buttonmaterial")
  DownloadButtonCopyMaterial.addEventListener("click", CopyMaterialFunction);

  function CopyMaterialFunction()
  {
    DownloadButtonCopyMaterial.classList.add("active")
    navigator.clipboard.writeText(MaterialGroup);
    setTimeout(function(){
      DownloadButtonCopyMaterial.classList.remove("active")
    },2500)
  }

  //button copy at Country
  let DownloadButtonCopyCountry = document.getElementById("buttoncountry")
  DownloadButtonCopyCountry.addEventListener("click", CopyCountryFunction);

  function CopyCountryFunction()
  {
    DownloadButtonCopyCountry.classList.add("active")
    navigator.clipboard.writeText(Country);
    setTimeout(function(){
      DownloadButtonCopyCountry.classList.remove("active")
    },2500)
  }

  //Button copy at Price
  let DownloadButtonCopyPrice = document.getElementById("buttonprice")
  DownloadButtonCopyPrice.addEventListener("click", CopyPriceFunction);

  function CopyPriceFunction()
  {
    DownloadButtonCopyPrice.classList.add("active")
    navigator.clipboard.writeText(Price);
    // setTimeout(function(){
    //   DownloadButtonCopyPrice.classList.remove("active")
    // },2500)
  }


