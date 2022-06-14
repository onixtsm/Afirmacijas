function ConstAfirmacija() {
    
    this.imgURL = "notSet";
    this.text = {
        topTxt : {
            text: "notSet",
            y: 0  
        },
        botTxt : {
            text: "notSet",
            y: 0  
        },
        size: {
            top: "notSet",
            bot: "notSet"
        }
    }
    this.borderCol = "notSet";
}  
const igors = new ConstAfirmacija();

function getIMG(){return igors.imgURL};
function setIMG(url){igors.imgURL = url};

function getTop(){return [igors.text.topTxt.text, igors.text.topTxt.y, igors.text.size.top]};  
function getBot(){return [igors.text.botTxt.text, igors.text.botTxt.y, igors.text.size.bot]};

function setTopTxt(txt){igors.text.topTxt = txt};
function setBotTxt(txt){igors.text.botTxt = txt};

function setTopSize(i){igors.text.size.top = i};
function setBotSize(i){igors.text.size.bot = i};

function getBorder(){return igors.borderCol};
function setBorder(col){igors.borderCol = col};
