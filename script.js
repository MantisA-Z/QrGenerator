let inp = document.getElementById('usr_inp');
let btn = document.getElementById('btn');
let container = document.getElementById('container');
let imgElement;

async function generateQr(){
    if(imgElement){
        imgElement.remove();
    }
    let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inp.value}`;
    let raw_data = await fetch(url);
    //let data = await raw_data.json();
    imgElement = document.createElement('img');
    imgElement.src = raw_data.url;
    container.insertBefore(imgElement, btn);
    console.log(raw_data.url);
};