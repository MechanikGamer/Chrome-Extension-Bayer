// Steps to be done
let Step1 = false;

// GlobalVariables
let MaterialGroup;
let country;
let price;
let valuta;
let MaterialGroupName;
let PR;
let PRNumber;
let buttonState;

//Flags for action Proview
let Nottriggered = 0;
let NottriggeredHD2 = 0;

let MaterialGroupDownloaded;
let CountryDownloaded;


//Download PR from Ariba
function AribaDownloadPR(){
  let DownloadTagPR = document.getElementsByClassName(
    'grayVeryLt noWrap'
  );
  let ChildPR = DownloadTagPR[0].children[0].innerText
  PR = ChildPR
  console.log(PR);
  let numberPR = PR.replace(/[^0-9 ]/g, '');
  PRNumber = numberPR
 
  console.log('PR number is ', numberPR)
  return PR;
  
}

// Material Number from Ariba not Cristal
function AribaDownloadMaterial() {
  let DownloadTag = document.getElementsByClassName(
    'vaT leg-p-b-5 a-arw-concise-fg-row'
  );
  let DownloadChoose = DownloadTag[3];
  let Textout = DownloadChoose.innerText;
  let numb = Textout.match(/\d/g);
  numb = numb.join('');
  MaterialGroup = numb; // Variable for MaterialGroup
  console.log(MaterialGroup);
  Step1 = true;
  return MaterialGroup;
}

//Download Material name no Cristal
function AribaDownloadMaterialName() {
  let DownloadTag = document.getElementsByClassName(
    'vaT leg-p-b-5 a-arw-concise-fg-row'
  );
  let DownloadChoose = DownloadTag[3];
  let Textout = DownloadChoose.innerText;
  let TextnoSpecialCharsGroupName = Textout.replace(/[^a-zA-Z0-9 ]/g, '');
  MaterialGroupName = TextnoSpecialCharsGroupName; // Variable for MaterialGroup
  let IndexSpace = MaterialGroupName.indexOf(" ")
  MaterialGroupName = MaterialGroupName.substring(IndexSpace + 1);
  console.log(MaterialGroupName);
  return MaterialGroupName;
//Dodac wyciecie tylko nazwy

}

//download country name from Ariba
function AribaDownloadCountry()
{
  let DownloadTagCountry = document.getElementsByClassName(
    'vaT leg-p-b-5 a-arw-concise-fg-row'
  );
  let DownloadChooseCountry = DownloadTagCountry[7];
  let TextoutCountry = DownloadChooseCountry.innerText;
  const TextnoSpecialChars = TextoutCountry.replace(/[^a-zA-Z0-9 ]/g, '');
  function getLastWord(TextnoSpecialChars) {
    var n = TextnoSpecialChars.lastIndexOf(" ");
  
    var res = TextnoSpecialChars.substring(n);
    return res;
  }

  let LastWordCountry = getLastWord(TextnoSpecialChars)
  let LastWordlCountryNoSpace = LastWordCountry.replace(/\s/g, '') 
  country = LastWordlCountryNoSpace;
  console.log(LastWordlCountryNoSpace);
  return country;
}


//Download Price
function AribaDownloadPrice()
{
  let DownloadTagPrice = document.getElementsByClassName(
    'grayVeryLt noWrap'
  );
  let ChildPrice = DownloadTagPrice[0].children[2].innerHTML
  let TextoutCountry2 = ChildPrice;

  const TextnoSpecialChars2 = TextoutCountry2.replace(/[^a-zA-Z0-9 ]/g, '');
  function getLastWord(TextnoSpecialChars2) {
    var n = TextnoSpecialChars2.lastIndexOf(" ");
  
    var res = TextnoSpecialChars2.substring(n);
    return res;
  }

  let LastWordCountry = getLastWord(TextnoSpecialChars2)
  //split text 
  let index = TextnoSpecialChars2.indexOf(' ');
    let textModified = TextnoSpecialChars2.substring(0, index);

// Remove last 2 characters of string
textModified = textModified.substring(0, textModified.length - 2);
price = textModified;
// Print result string
return price;
}

//Download Currency
function AribaDownloadCurrency()
{
  let DownloadTagPrice = document.getElementsByClassName(
    'grayVeryLt noWrap'
  );
  let ChildPrice = DownloadTagPrice[0].children[2].innerHTML
  let CurrencyPrice = ChildPrice.indexOf(' ')
  let textModified = ChildPrice.substring(CurrencyPrice);
  console.log(textModified)
  valuta = textModified;
  return valuta;
}


function ButtonStateDownload()
{
    chrome.storage.sync.get(['buttonState'], function (data) {
      buttonState = data.buttonState || 'on';
  });
}






function checkURL() {
    if (window.location.href.includes('eu.ariba.com') &&  buttonState === 'on') {
      AribaDownloadMaterial();
      AribaDownloadCountry();
      AribaDownloadPR();
      AribaDownloadPrice();
      AribaDownloadCurrency();
      AribaDownloadMaterialName()
      chrome.storage.sync.set({ 
        materialGroup: MaterialGroup, 
        country: country, 
        price: price, 
        valuta: valuta,
        PRNumber: PRNumber,
        PR: PR,
        MaterialGroupName: MaterialGroupName});
    } else if (window.location.href.includes('proview') &&  buttonState === 'on') {
      chrome.storage.sync.get(['materialGroup'], function (data) {
        // Paste the MaterialGroup value wherever needed on www.howdoc.com
        console.log('Material Group:', data.materialGroup);
        MaterialGroupDownloaded = data.materialGroup;
        
        chrome.storage.sync.get(["country"], function (data) {
          // Paste the MaterialGroup value wherever needed on www.howdoc.no
          console.log("county:", data.country);
          CountryDownloaded = data.country;
        });
      });
    }
   
  }

checkURL();
setInterval(PasteIn, 500)
setInterval(PasteInHowDoc2, 500)

setInterval(ButtonStateDownload, 300)




function PasteIn()
{
    // if link https://proview-ui.prod.daaa.cloud/taxonomy
    if (window.location.toString().includes("taxonomy") && Nottriggered === 0 && (typeof MaterialGroupDownloaded !== "undefined") &&  buttonState === 'on')
    {
        console.log('Starting TaxonomyFunciton')
        PasteInnHowdocTaxonomy()
        Nottriggered = 1;
    }
    if (window.location.toString().includes("taxonomy") === false)
    {
      Nottriggered = 0;
    }
    
}





function PasteInnHowdocTaxonomy(){
    //function for pasting data into //taxonomy
    let DownloadInputWindow = document.querySelectorAll('[id ^= "mat-input-"]');
    DownloadInputWindow[0].value = '' 
    

    let i = 0;
    let txt = MaterialGroupDownloaded ; /* The text */
    let speed = 50; /* The speed/duration of the effect in milliseconds */
    
    function typeWriter() {
      if (i < txt.length) {
        DownloadInputWindow[0].value += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter()

    //remove label
    let DownloadLabel = document.querySelectorAll('.mat-form-field-label-wrapper')
    DownloadLabel[0].innerHTML = ''
}


//adding variables to HowDoc 2.0
function PasteInHowDoc2()
{
    // if link https://proview-ui.prod.daaa.cloud/how-doc2
    if (window.location.toString().includes("how-doc2") && NottriggeredHD2 === 0 && (typeof MaterialGroupDownloaded !== "undefined"))
    {
        console.log('Starting HowDoc2 Function')
        PasteInnHowdoc2Taxonomy()
        PasteInnHowdocTaxonomyCountry()
        NottriggeredHD2 = 1;
    }
    if (window.location.toString().includes("how-doc2") === false)
    {
      NottriggeredHD2 = 0;
    }
    
}

function PasteInnHowdoc2Taxonomy()
{
  
    //pasting material number
    let DownloadInputHowDoc2 = document.querySelectorAll('.mat-input-element')
    DownloadInputHowDoc2[0].value = '' 
    let i = 0;
    let txt = MaterialGroupDownloaded ; /* The text */
    let speed = 50; /* The speed/duration of the effect in milliseconds */
    
    function typeWriter() {
      if (i < txt.length) {
        DownloadInputHowDoc2[0].value += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter()
}

function PasteInnHowdocTaxonomyCountry()
{
  //pasting country
  let DownloadInputHowDoc2 = document.querySelectorAll('.mat-input-element')
  DownloadInputHowDoc2[1].value = '' 

  let i = 0;
  let txt = CountryDownloaded ; /* The text */
  let speed = 50; /* The speed/duration of the effect in milliseconds */
  
  function typeWriter() {
    if (i < txt.length) {
      DownloadInputHowDoc2[1].value += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter()

}

