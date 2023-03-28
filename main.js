//Steps to be done
let Step1 = false;

//GlobalVariables
let MaterialGroup;



//Download Material Number from Ariba not Cristal
function AribaDownloadMaterial()
{
    let DownloadTag = document.getElementsByClassName('vaT leg-p-b-5 a-arw-concise-fg-row');
    let DownloadChoose = DownloadTag[3];
    let Textout = DownloadChoose.innerText
    let numb = Textout.match(/\d/g);
    numb = numb.join("");
    MaterialGroup = numb  //Variable for MaterialGroup
    console.log(MaterialGroup)
    Step1 = true;
}



//Download Country From Ariba


//Download Price from Ariba