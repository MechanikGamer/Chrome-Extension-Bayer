// Steps to be done
let Step1 = false;

// GlobalVariables
let MaterialGroup;
let country;

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

function checkURL() {
    if (window.location.href.includes('eu.ariba.com')) {
      AribaDownloadMaterial();
      AribaDownloadCountry();
      chrome.storage.sync.set({ materialGroup: MaterialGroup, country: country});
    } else if (window.location.href.includes('proview')) {
      chrome.storage.sync.get(['materialGroup'], function (data) {
        // Paste the MaterialGroup value wherever needed on www.howdoc.no
        console.log('Material Group:', data.materialGroup);
      });
    }
  }

checkURL();

