let MaterialGroup;
let Country;
let Price; 
let PR;
let PRNumber;
  
chrome.storage.sync.get(["PRNumber"], function (data) {
  document.getElementById("prnumber").textContent = data.PRNumber;
  PRNumber = data.PRNumber
});

 
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
    let SpanBanner2 = document.getElementById("copied2banner")
    SpanBanner2.classList.add("copied-info")
    SpanBanner2.innerHTML = `\n            \n            <span>\n    <img src="copiedinfo.png" />    </span>`
    navigator.clipboard.writeText(MaterialGroup);

    setTimeout(function(){
      SpanBanner2.classList.remove("copied-info")
      SpanBanner2.innerHTML = `\n            \n            <span>\n     </span>`
    },2500)
  }

  //button copy at Country
  let DownloadButtonCopyCountry = document.getElementById("buttoncountry")
  DownloadButtonCopyCountry.addEventListener("click", CopyCountryFunction);

  function CopyCountryFunction()
  {
    let SpanBanner3 = document.getElementById("copied3banner")
    SpanBanner3.classList.add("copied-info")
    SpanBanner3.innerHTML = `\n            \n            <span>\n    <img src="copiedinfo.png" />    </span>`
    navigator.clipboard.writeText(Country);
    setTimeout(function(){
      SpanBanner3.classList.remove("copied-info")
      SpanBanner3.innerHTML = `\n            \n            <span>\n     </span>`
    },2500)
  }

  //Button copy at Price
  let DownloadButtonCopyPrice = document.getElementById("buttonprice")
  DownloadButtonCopyPrice.addEventListener("click", CopyPriceFunction);

  function CopyPriceFunction()
  {
    let SpanBanner4 = document.getElementById("copied4banner")
    SpanBanner4.classList.add("copied-info")
    SpanBanner4.innerHTML = `\n            \n            <span>\n    <img src="copiedinfo.png" />    </span>`
    navigator.clipboard.writeText(Price);
    setTimeout(function(){
      SpanBanner4.classList.remove("copied-info")
      SpanBanner4.innerHTML = `\n            \n            <span>\n     </span>`
    },2500)
  }

  //button copy PR
  let DownloadButtonCopyPR = document.getElementById("buttonpr")
  DownloadButtonCopyPR.addEventListener("click", CopyPRFunction);

  function CopyPRFunction()
  {
    let SpanBanner1 = document.getElementById("copied1banner")
    SpanBanner1.classList.add("copied-info")
    SpanBanner1.innerHTML = `\n            \n            <span>\n    <img src="copiedinfo.png" />    </span>`
    navigator.clipboard.writeText('PR' + PRNumber);

    setTimeout(function(){
      SpanBanner1.classList.remove("copied-info")
      SpanBanner1.innerHTML = `\n            \n            <span>\n     </span>`
    },2500)
  }



  


