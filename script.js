
//Show/Hide smth
function showYourself(a){document.getElementsByClassName("banana")[a-1].classList.toggle("hidden");}

//Strecth smth
function changeType(a){document.getElementById(a).classList.toggle("bigBoi");}

//Used to save image
function saveFile(exportSize){downloadCanvas(exportSize);}

//Clear canvas
function clearCanvas(elem){
    var ctx = elem.getContext("2d");
    ctx.clearRect(0, 0, elem.width, elem.height);
}

//Clear single canvas 
function clear(id){
    clearCanvas(document.getElementById(id));
}

//Clear all
function clearAll(){
    clearCanvas(document.getElementById("image"));
    clearCanvas(document.getElementById("border"));
    clearCanvas(document.getElementById("text"));
    clearCanvas(document.getElementById("textBlur"));
}

//Handle image upload
const userFile = document.getElementById("userFile");
var place = document.getElementById ("text");


function convertHex(hexCode, opacity = 1){ //stolen code src="https://gist.github.com/danieliser/b4b24c9f772066bcf0a6.js"
    var hex = hexCode.replace('#', '');

    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    var r = parseInt(hex.substring(0,2), 16),
        g = parseInt(hex.substring(2,4), 16),
        b = parseInt(hex.substring(4,6), 16);

    /* Backward compatibility for whole number based opacity values. */
    if (opacity > 1 && opacity <= 100) {
        opacity = opacity / 100;   
    }
    var rgba = [r, g, b, opacity];
    return rgba;
}


const borderlayer = document.getElementById("border");

borderlayer.setAttribute("width", canw);
borderlayer.setAttribute("height", canh);

const ctxb = borderlayer.getContext("2d");

var color = document.getElementById("colorpicker").value;

document.getElementById("colorpicker").addEventListener("change", function(){
    color = this.value;
    igors.borderCol = color;
    setBorder(color, ctxb, canw);
});

function setBorder(borderColour, ctxborder, width){  

    borderWidth = width/15;

    ctxborder.fillStyle = setGradient(0, 0, 0, borderWidth, borderColour);
    ctxborder.fillRect(0, 0, width, borderWidth); //top

    ctxborder.fillStyle = setGradient(0, 0, borderWidth, 0, borderColour);
    ctxborder.fillRect(0, 0, borderWidth, width); //left

    ctxborder.fillStyle = setGradient(0, width, 0, width-borderWidth, borderColour);
    ctxborder.fillRect(0, width-borderWidth, width, borderWidth); //bottom

    ctxborder.fillStyle = setGradient(width, 0, width-borderWidth, 0, borderColour);
    ctxborder.fillRect(width-borderWidth, 0, borderWidth, width); //right
}

function setGradient(x, y, x1, y1, color){
    var rgba = convertHex(color, 1);
    var r = rgba[0], g = rgba[1], b = rgba[2];
    var gradient = ctxb.createLinearGradient(x, y, x1, y1);
    gradient.addColorStop(0, `rgba(${r},${g},${b},1)`);
    //gradient.addColorStop(0.35, `rgba(${r},${g},${b},.95)`);
    gradient.addColorStop(0.7, `rgba(${r},${g},${b},.2)`);
    gradient.addColorStop(1, `rgba(${r},${g},${b},0)`);
    return gradient;
}


//Text bs

const maxWidth = canw * 0.9;

//Text Layer
const textLayer = document.getElementById("text");

textLayer.setAttribute("width", canw);
textLayer.setAttribute("height", canh);

const txtctx = textLayer.getContext("2d");

// Text Blur layer
const textBlurLayer = document.getElementById("textBlur");

textBlurLayer.setAttribute("width", canw);
textBlurLayer.setAttribute("height", canh);

const blurctx = textBlurLayer.getContext("2d");

function drawText(text, fontSize, x, y, txtCon, blurCon){
    //Text settings
    txtCon.textAlign = 'center';    
    txtCon.font = '700 '+fontSize + 'px Arial';
    txtCon.fillStyle = '#FFFFFF';
    
    txtCon.shadowColor = 'red';
    txtCon.shadowBlur = 40;

    txtCon.fillText(text, x, y, maxWidth);

    //Blur settings
    blurCon.textAlign = 'center';    
    blurCon.font = '700 '+fontSize + 'px Arial';
    blurCon.fillStyle = '#FFFFFF';
    
    blurCon.shadowColor = 'red';
    blurCon.shadowBlur = 20;

    blurCon.fillText(text, x, y, maxWidth);
    //blurCon.filter = 'blur(30px)';
    //blurCon.textAlign = 'center';    
    //blurCon.font = '700 '+fontSize + 'px Arial';
    //blurCon.fillStyle = '#FF0000';
    //blurCon.fillText(text, x, y, maxWidth);

}

//TODO: Add form where user inputs text
igors.text.topTxt = "VASARA BŪS PIEDZĪVOJUMU";
igors.text.botTxt = "PILNA"
igors.text.size.top = 80;
igors.text.size.bot = 130;

drawText("VASARA BŪS PIEDZĪVOJUMU", igors.text.size.top, canw/2, canh*0.1, txtctx, blurctx);
drawText("PILNA", igors.text.size.bot, canw/2, canh*0.9, txtctx, blurctx);
