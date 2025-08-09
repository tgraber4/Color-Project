var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;

class Color {
    constructor(colorStyleName) {
        this.colorStyleName = colorStyleName;
        this.gotten = false;
    }

    updateCoords(startx, starty, endx, endy) {
        this.startx = startx;
        this.starty = starty;
        this.endx = endx;
        this.endy = endy;
        this.currentx = startx;
        this.currenty = starty;
    }
    getStartx() {
        return this.startx;
    }

    getStarty() {
        return this.starty;
    }

    getEndx() {
        return this.endx;
    }

    getEndy() {
        return this.endy;
    }

    getCurrentx() {
        return this.currentx;
    }

    getCurrenty() {
        return this.currenty;
    }

    setCurrentx(inputx) {
        this.currentx = inputx
    }

    setCurrenty(inputy) {
        this.currenty = inputy
    }

    setGotten() {
        this.gotten = true;
    }

    getGotten() {
        return this.gotten;
    }

    resetGotten() {
        this.gotten = false;
    }

    placeColor() {
        ctx.fillStyle = this.colorStyleName;
        ctx.fillRect(this.startx, this.starty, 20, 20);
        ctx.fillStyle = this.colorStyleName;
        ctx.fillRect(this.endx, this.endy, 20, 20);
        ctx.fillStyle = "white";
        ctx.fillRect(this.endx + 4, this.endy + 4, 12, 12);
    }
}

/*
To-Do List
- add hidden path to level 7
- test level 8

- add home screen
- add popup that the level has hidden pathes

*/


var colorInfo = {};
// colorInfo["color-name"] = new Color();
colorInfo["purple"] = new Color("purple");
colorInfo["red"] = new Color("red");
colorInfo["green"] = new Color("green");
colorInfo["blue"] = new Color("blue");
colorInfo["orange"] = new Color("orange");
colorInfo["pink"] = new Color("pink");
colorInfo["brown"] = new Color("brown");

var colorsInPlay = ["purple", "red", "green", "blue", "orange", "pink", "brown"];

// resets true/false value for gotten variables
var resetGottenValues = function () {
    for (var i = 0; i < colorsInPlay.length; i++) {
        colorInfo[colorsInPlay[i]].resetGotten();
    }
}

// add to this for each level
var colorsInList = [];
colorsInList.push(["purple", "orange", "green", "red", "blue", "pink"]); // level 1
colorsInList.push(["orange", "blue", "green", "red", "purple"]); // level 2
colorsInList.push(["purple", "red", "green", "blue", "orange"]); // level 3
colorsInList.push(["purple", "red", "green", "blue"]); // level 4
colorsInList.push([]); // level 5
colorsInList.push([]); // level 6
colorsInList.push(["purple", "red", "green", "blue", "orange", "pink", "brown"]); // level 7
colorsInList.push(["purple", "red", "green", "blue", "orange", "pink", "brown"]); // level 8




var level = 3;

var x;
var y;
var color;
var teleportused;
var hiddenpathx;
var hiddenpathy;
var teleportpad1y;
var teleportpad1x;
var teleportpad2x;
var teleportpad2y;


var gameboards = [];

var makeBackDrop1 = function () {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 600, 550);
    ctx.fillStyle = "white";
    ctx.fillRect(230, 240, 140, 140);


}

var makeBackDrop2 = function () {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 600, 550);
    ctx.fillStyle = "white";
    ctx.fillRect(130, 240, 120, 120);
    ctx.fillRect(370, 240, 120, 120);

}

var makeColorLabel = function (inputColor) {
    ctx.fillStyle = inputColor;
    ctx.font = "35px Arial";
    ctx.fillText(inputColor, 255, 475);
}

var placeColors = function () {
    for (var i = 0; i < colorsInList[level - 1].length; i++) {
        colorInfo[colorsInList[level - 1][i]].placeColor();
    }

}

var drawTile = function () {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 20, 20);
}

var setUpLevel = function () {
    teleportpad1x = null
    teleportpad1y = null
    hiddenpathx = null
    hiddenpathy = null
    teleportused = 0;
    resetGottenValues()
    if (level === 1) {
        levelone();
    } else if (level === 2) {
        leveltwo();
    } else if (level === 3) {
        levelthree();
    } else if (level === 4) {
        levelfour();
    } else if (level === 5) { // missing
        level = 7
        levelseven()
    } else if (level === 6) { //  missing

    } else if (level === 7) {
        levelseven();
    } else if (level === 8) {
        leveleight();
    }

}

/*
checkColorEnds function
- Checks if user is currently in an end color tile. If the user is, then updates the gotten property of 
that color.
*/
var checkColorEnds = function () {
    for (var i = 0; i < colorsInList[level - 1].length; i++) {
        if (colorInfo[colorsInList[level - 1][i]].getEndx() === x && colorInfo[colorsInList[level - 1][i]].getEndy() === y) {
            colorInfo[colorsInList[level - 1][i]].setGotten();
        }
    } 
}




// colorInfo["red"].updateCoords(startx, starty, endx, endy);

var levelone = function () {
    makeBackDrop1();
    makeColorLabel("purple")
    x = 230;
    y = 240;

    ctx.fillStyle = "white";
    ctx.font = "35px Arial";
    ctx.fillText("Level " + level, 255, 105);

    color = "purple";

    colorInfo["purple"].updateCoords(230, 240, 310, 300);
    colorInfo["red"].updateCoords(230, 320, 250, 240);
    colorInfo["green"].updateCoords(230, 360, 330, 360);
    colorInfo["blue"].updateCoords(230, 340, 350, 360);
    colorInfo["orange"].updateCoords(270, 240, 350, 320);
    colorInfo["pink"].updateCoords(270, 260, 330, 260);

    placeColors();
};


var leveltwo = function () {
    makeBackDrop1();
    makeColorLabel("purple")
    
    x = 230;
    y = 240;
    color = "purple";

    colorInfo["purple"].updateCoords(230, 240, 250, 360);
    colorInfo["red"].updateCoords(330, 340, 230, 360);
    colorInfo["green"].updateCoords(310, 280, 310, 340);
    colorInfo["blue"].updateCoords(250, 260, 270, 320);
    colorInfo["orange"].updateCoords(250, 280, 230, 260);
    colorInfo["pink"].updateCoords(0, 0, 0, 0);


    placeColors();
};
var levelthree = function () {
    makeBackDrop1();
    makeColorLabel("purple")

    x = 230;
    y = 240;
    color = "purple";

    colorInfo["purple"].updateCoords(230, 240, 270, 240);
    colorInfo["red"].updateCoords(250, 240, 290, 280);
    colorInfo["green"].updateCoords(250, 340, 330, 340);
    colorInfo["blue"].updateCoords(270, 260, 270, 300);
    colorInfo["orange"].updateCoords(250, 300, 330, 260);

    placeColors();

};

var levelfour = function () {
    makeBackDrop1();
    makeColorLabel("purple")

    x = 230;
    y = 240;
    color = "purple";

    colorInfo["purple"].updateCoords(230, 240, 350, 240);
    colorInfo["red"].updateCoords(330, 240, 250, 240);
    colorInfo["green"].updateCoords(270, 240, 310, 240);
    colorInfo["blue"].updateCoords(290, 300, 290, 240);

    placeColors();
};

var levelfive = function () {

}

var levelseven = function () {
    makeBackDrop2()
    makeColorLabel("purple")

    x = 370;
    y = 240;
    color = "purple";

    colorInfo["purple"].updateCoords(370, 240, 150, 280);
    colorInfo["red"].updateCoords(130, 340, 370, 300);
    colorInfo["green"].updateCoords(210, 320, 130, 320);
    colorInfo["blue"].updateCoords(230, 260, 230, 320);
    colorInfo["orange"].updateCoords(430, 300, 370, 260);
    colorInfo["pink"].updateCoords(370, 280, 410, 320);
    colorInfo["brown"].updateCoords(150, 260, 210, 260);


    hiddenpathx = 230;
    hiddenpathy = 340;
    teleportpad1x = 470;
    teleportpad1y = 240;
    teleportpad2x = 230;
    teleportpad2y = 280;
    ctx.fillStyle = "Grey";
    ctx.fillRect(teleportpad1x, teleportpad1y, 20, 20);
    ctx.fillStyle = "Grey";
    ctx.fillRect(teleportpad2x, teleportpad2y, 20, 20);
    ctx.fillStyle = "cyan";
    ctx.fillRect(teleportpad1x + 4, teleportpad1y + 4, 12, 12);
    ctx.fillStyle = "cyan";
    ctx.fillRect(teleportpad2x + 4, teleportpad2y + 4, 12, 12);

    placeColors();
}

var leveleight = function () {
    makeBackDrop2()
    makeColorLabel("purple")

    x = 410;
    y = 280;
    color = "purple";

    colorInfo["purple"].updateCoords(410, 280, 390, 320);
    colorInfo["red"].updateCoords(430, 320, 170, 280);
    colorInfo["green"].updateCoords(390, 300, 370, 340);
    colorInfo["blue"].updateCoords(130, 300, 470, 340);
    colorInfo["orange"].updateCoords(230, 340, 130, 320);
    colorInfo["pink"].updateCoords(150, 280, 210, 260);
    colorInfo["brown"].updateCoords(130, 340, 210, 340);

    hiddenpathx = 230;
    hiddenpathy = 300;
    teleportpad1x = 430;
    teleportpad1y = 280;
    teleportpad2x = 130;
    teleportpad2y = 280;
    ctx.fillStyle = "Grey";
    ctx.fillRect(teleportpad1x, teleportpad1y, 20, 20);
    ctx.fillStyle = "Grey";
    ctx.fillRect(teleportpad2x, teleportpad2y, 20, 20);
    ctx.fillStyle = "cyan";
    ctx.fillRect(teleportpad1x + 4, teleportpad1y + 4, 12, 12);
    ctx.fillStyle = "cyan";
    ctx.fillRect(teleportpad2x + 4, teleportpad2y + 4, 12, 12);

    placeColors();
}

// levelone();

levelthree();







var Ball = function () {
};
Ball.prototype.moving = function (guess) {
    if (guess === "up") {
        if (checkMoveTileStatus(x, y, x, y - 20)) {
            x = x;
            y = y - 20;
            drawTile();
            checkColorEnds();
            checkHiddenPathConditions();
        } else {
            checkExtraConditions(x, y - 20)
        }
    } else if (guess === "down") {
        if (checkMoveTileStatus(x, y, x, y + 20)) {
            x = x;
            y = y + 20;
            drawTile();
            checkColorEnds();
            checkHiddenPathConditions();
        } else {
            checkExtraConditions(x, y + 20)
        }
    } else if (guess === "right") {
        if (checkMoveTileStatus(x, y, x + 20, y)) {
            x = x + 20;
            y = y;
            drawTile();
            checkColorEnds();
            checkHiddenPathConditions();
        } else {
            checkExtraConditions(x + 20, y)
        }
    } else if (guess === "left") {
        if (checkMoveTileStatus(x, y, x - 20, y)) {
            x = x - 20;
            y = y;
            drawTile();
            checkColorEnds();
            checkHiddenPathConditions();
        } else {
            checkExtraConditions(x - 20, y)
        }
    } else if (guess ==="enter") {
        // update current color's last coords
        colorInfo[color].setCurrentx(x)
        colorInfo[color].setCurrenty(y)

        // switch to next color
        var currentNumColor = colorsInList[level - 1].indexOf(color);
        if (currentNumColor < (colorsInList[level - 1].length - 1)) {
            currentNumColor++;
        } else {
            currentNumColor = 0;
        }
        color = colorsInList[level - 1][currentNumColor];

        // change x and y and fill in spot with color
        x = colorInfo[color].getCurrentx();
        y = colorInfo[color].getCurrenty();
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 20, 20);


        // change text display
        ctx.fillStyle = "black";
        ctx.fillRect(240, 440, 150, 50);
        ctx.fillStyle = color;
        ctx.font = "35px Arial";
        ctx.fillText(color, 255, 475);
    } else if (guess ==="n") {
        var tempcounter = 0;
        for (var i = 0; i < colorsInList[level - 1].length; i++) {
            if (colorInfo[colorsInList[level - 1][i]].getGotten()) {
                tempcounter++;
            }
        }
        if (tempcounter == colorsInList[level - 1].length) {
            level++;
            setUpLevel();
        }
    } else if (guess ==="r") {
        ctx.clearRect(230, 240, 300, 230);
        setUpLevel();
    }
};
var keyNames = {
    38: "up",
    39: "right",
    37: "left",
    40: "down",
    82: "r",
    83: "s",
    13: "enter",
    78: "n",
};


var ball = new Ball();
$("body").keydown(function (event) {
    if ([37, 38, 39, 40].includes(event.keyCode)) {
        event.preventDefault();
    }
    var whatletteris = keyNames[event.keyCode];
    console.log(whatletteris);
    ball.moving(whatletteris);
});

var colorIsWhite = function (imageData) {
    // Takes in imageData and returns True if color at given location is white and False if color is not

    var r = imageData.data[0]; // red
    var g = imageData.data[1]; // green
    var b = imageData.data[2]; // blue
    if (r === 255 && g === 255 && b === 255) {
        return true
    }
    return false
}


/*
checkMoveTileStatus function
- Checks if user can move to a new tile. Returns true if they can and false if they can't.
*/
var checkMoveTileStatus = function (currx, curry, newx, newy) {
    if (colorInfo[color].getEndy() === newy && colorInfo[color].getEndx() === newx) { // new coords == the current color's end coords
        return true;
    }
    var tempcounter = 0;
    for (var i = 0; i < colorsInList[level - 1].length; i++) {
        if (colorInfo[colorsInList[level - 1][i]].getEndx() != currx || colorInfo[colorsInList[level - 1][i]].getEndy() != curry) { // currently not in end box of a color
            tempcounter++;
        }

    }
    var imgData = ctx.getImageData(newx, newy, 20, 20); 
    
    if (colorIsWhite(imgData) && tempcounter == colorsInList[level - 1].length) { // color of new tile == white && newx + newy do not equal any color's end coordinates
        console.log("new x: " + newx + " and newy: " + newy)
        return true;
    }
    return false;
}

var checkHiddenPathConditions = function () {
    console.log("test")
    if (hiddenpathy === y && hiddenpathx === x && level === 7) {
        ctx.clearRect(250, 340, 120, 20);
    }
    if (hiddenpathy === y && hiddenpathx === x && level === 8) {
        ctx.clearRect(250, 300, 60, 20);
        ctx.clearRect(290, 320, 80, 20);
    }
}

var checkExtraConditions = function (newx, newy) {
    if (teleportpad1y === newy && teleportpad1x === newx) {
        ctx.fillRect(newx, newy, 20, 20);
        x = teleportpad2x;
        y = teleportpad2y;
        ctx.fillRect(x, y, 20, 20);
        teleportused = 1;
    }
}

