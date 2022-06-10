var chance;

function randomEqualFunny(){
    chance = (Math.floor(Math.random()*100) + 1);
    console.log(chance)
    if(chance < 31)         {showYourself(1)}
    else if(chance < 61)    {showYourself(2)}
    else if(chance < 98)    {showYourself(3)}
    else                    {showYourself(4)}
}

function showYourself(a){
    document.getElementsByClassName("banana")[a-1].classList.toggle("hidden");
}

function changeType(a){
    document.getElementById(a).classList.toggle("bigBoi");
}

const randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
document.documentElement.style.setProperty('--main-bg-color', randomColor);

function handleFiles(){
    var userFile = document.getElementById("userFile");
    var place = document.getElementById ("text");
    console.log(userFile.files.length);
    if(!userFile.files.length){
        place.innerHTML = "Nav failu...:(";   
    } else if(userFile.files.length > 1){
        place.innerHTML = "Izvēlies vienu failu pls...:(";   
    } else {
       const img = document.createElement("img");
       img.src = URL.createObjectURL(userFile.files[0]);
       img.height = 500;
       place.innerHTML = " ";
       place.appendChild(img);
    }
}
