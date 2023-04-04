function PasteInn()
{
    // if link https://proview-ui.prod.daaa.cloud/taxonomy
    if (window.location.toString().includes("taxonomy"))
    {
        console.log('Starting TaxonomyFunciton')
        PasteInnHowdocTaxonomy()
    }
}





function PasteInnHowdocTaxonomy(){
    //function for pasting data into //taxonomy
    let DownloadInputWindow = document.querySelectorAll('[id ^= "mat-input-"]');
    DownloadInputWindow[0].value = '' 
    

    DownloadInputWindow[0].value = '25260900' //testowy material zmienic na zawartosc z pobranego

    //remove label
    let DownloadLabel = document.querySelectorAll('.mat-form-field-label-wrapper')
    DownloadLabel[0].innerHTML = ''
}