// // content.js

// // Steps to be done
// let Step1 = false;

// // GlobalVariables
// let MaterialGroup;

// // Download Material Number from Ariba not Cristal
// function AribaDownloadMaterial() {
//   let DownloadTag = document.getElementsByClassName(
//     'vaT leg-p-b-5 a-arw-concise-fg-row'
//   );
//   let DownloadChoose = DownloadTag[3];
//   let Textout = DownloadChoose.innerText;
//   let numb = Textout.match(/\d/g);
//   numb = numb.join('');
//   MaterialGroup = numb; // Variable for MaterialGroup
//   console.log(MaterialGroup);
//   Step1 = true;
// }

// function checkURL() {
//   if (window.location.href.includes('www.ariba.com')) {
//     AribaDownloadMaterial();
//     chrome.storage.sync.set({ materialGroup: MaterialGroup });
//   } else if (window.location.href.includes('www.howdoc.no')) {
//     chrome.storage.sync.get(['materialGroup'], function (data) {
//       // Paste the MaterialGroup value wherever needed on www.howdoc.no
//       console.log('Material Group:', data.materialGroup);
//     });
//   }
// }

// checkURL();

// content.js

// Steps to be done
let Step1 = false;

// GlobalVariables
let MaterialGroup;

// Download Material Number from Ariba not Cristal
function AribaDownloadMaterial() {
  // ...
}

function checkURL() {
  // ...
}

checkURL();

