
// Construct final canva
function constructFinalCanva(canva, size){
    var ctx = canva.getContext('2d');
    
    add_img(getIMG(), ctx);
    setBorder(getBorder(), ctx, size);
    setText(getTop(), ctx, size);
    setText(getBot(), ctx, size);

}

// Creates final canva and exports it
function downloadCanvas(size){

    //Create final canva element
    var new_canvas = document.createElement("canvas");
    new_canvas.id = "finalCopy";
    new_canvas.width = size;
    new_canvas.height = size;
        
    constructFinalCanva(new_canvas, size);

    let canvasUrl = new_canvas.toDataURL();
    
    //Download canva
    var temp = document.createElement("a");
    temp.href = canvasUrl;
    temp.download = "afirmacija";
    temp.click();
    temp.remove;
}

//Merge multiple canvas
function mergeCanvas(imageID, borderID, textID, textBlurID, ctx, size){
    var baseCanva = document.getElementById(imageID);
    var border = document.getElementById(borderID);
    var text = document.getElementById(textID);
    var textBlur = document.getElementById(textBlurID);

    ctx.drawImage(baseCanva, 0, 0, size, size);
    ctx.drawImage(border, 0, 0, size, size);
    ctx.drawImage(textBlur, 0, 0, size, size);
    ctx.drawImage(text, 0, 0, size, size);
}
