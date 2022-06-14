//  Properties
const width = window.innerWidth;
const height = window.innerHeight;

var canw = 0; var canh = 0;

const canvas = document.getElementById("image");
const context = canvas.getContext('2d');

//Diferent workspace size for diferent device
if(width>1050 && height>1050){canw = 1000; canh = 1000;
} else {
    if(width>height){canw = height - 50; canh = height - 50;}
    if(width<height){canw = width - 50; canh = width - 50;}
}

canvas.setAttribute("width", canw);
canvas.setAttribute("height", canh);

// Add image on canva
function add_img(src, ctx) {
    img = new Image();
    img.src = src;
    img.onload = function(){
        ctx.drawImage(img,0,0,canw,canh);
    }
}

function getW(){return canw};
function getH(){return canh};


//Handle image upload
const userFile = document.getElementById("userFile");
var place = document.getElementById ("text");

function handleFiles(){
    console.log(userFile.files.length);
    if(!userFile.files.length){
        place.innerHTML = "Nav failu...:(";   
    } else if(userFile.files.length > 1){
        place.innerHTML = "Izvēlies vienu failu pls...:(";   
    } else {
        place.innerHTML = userFile.files[0].name + ": " + userFile.files[0].size + " biti";
        tempUrl = URL.createObjectURL(userFile.files[0]);
        setIMG(tempUrl);
        add_img(tempUrl, context);
    }
}
