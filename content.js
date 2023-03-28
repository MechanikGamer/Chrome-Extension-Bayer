// Steps to be done
let Step1 = false;

// GlobalVariables
let MaterialGroup;
let country;
let price;
let valuta;

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






function checkURL() {
    if (window.location.href.includes('eu.ariba.com')) {
      AribaDownloadMaterial();
      AribaDownloadCountry();
      AribaDownloadPrice();
      AribaDownloadCurrency();
      chrome.storage.sync.set({ materialGroup: MaterialGroup, country: country, price: price, valuta: valuta});
    } else if (window.location.href.includes('proview')) {
      chrome.storage.sync.get(['materialGroup'], function (data) {
        // Paste the MaterialGroup value wherever needed on www.howdoc.com
        console.log('Material Group:', data.materialGroup);
      });
    }
  }

checkURL();

